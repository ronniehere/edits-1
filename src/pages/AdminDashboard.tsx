
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { toast } from '@/components/ui/use-toast';
import { LogOut, Plus, Trash2 } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

interface BlogPost {
  id: number;
  Title: string;
  Content: string;
  created_at: string;
  Excerpt: string;
}

const AdminDashboard = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [newPost, setNewPost] = useState({ title: '', content: '', excerpt: '' });
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is authenticated with Supabase
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        navigate('/admin-login');
        return;
      }
      // Load posts from Supabase
      loadPosts();
    };

    checkAuth();
  }, [navigate]);

  const loadPosts = async () => {
    try {
      const { data, error } = await supabase
        .from('Blogs')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error loading posts:', error);
        toast({
          title: 'Error',
          description: 'Failed to load blog posts.',
          variant: 'destructive',
        });
      } else {
        setPosts(data || []);
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    toast({
      title: 'Logged Out',
      description: 'You have been logged out successfully.',
    });
    navigate('/');
  };

  const handleCreatePost = async () => {
    if (!newPost.title || !newPost.content || !newPost.excerpt) {
      toast({
        title: 'Error',
        description: 'Please fill in all fields.',
        variant: 'destructive',
      });
      return;
    }

    try {
      const { error } = await supabase
        .from('Blogs')
        .insert({
          Title: newPost.title,
          Content: newPost.content,
          Excerpt: newPost.excerpt,
        });

      if (error) {
        console.error('Error creating post:', error);
        toast({
          title: 'Error',
          description: 'Failed to create blog post.',
          variant: 'destructive',
        });
      } else {
        setNewPost({ title: '', content: '', excerpt: '' });
        setIsDialogOpen(false);
        loadPosts(); // Reload posts
        toast({
          title: 'Success',
          description: 'Blog post created successfully!',
        });
      }
    } catch (error) {
      console.error('Error:', error);
      toast({
        title: 'Error',
        description: 'Failed to create blog post.',
        variant: 'destructive',
      });
    }
  };

  const handleDeletePost = async (id: number) => {
    try {
      const { error } = await supabase
        .from('Blogs')
        .delete()
        .eq('id', id);

      if (error) {
        console.error('Error deleting post:', error);
        toast({
          title: 'Error',
          description: 'Failed to delete blog post.',
          variant: 'destructive',
        });
      } else {
        loadPosts(); // Reload posts
        toast({
          title: 'Success',
          description: 'Blog post deleted successfully!',
        });
      }
    } catch (error) {
      console.error('Error:', error);
      toast({
        title: 'Error',
        description: 'Failed to delete blog post.',
        variant: 'destructive',
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
            Admin Dashboard
          </h1>
          <Button variant="outline" onClick={handleLogout}>
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </Button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-xl font-semibold">Blog Posts</h2>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button className="bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700">
                <Plus className="w-4 h-4 mr-2" />
                New Post
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>Create New Blog Post</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="title">Title</Label>
                  <Input
                    id="title"
                    value={newPost.title}
                    onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
                    placeholder="Enter post title"
                  />
                </div>
                <div>
                  <Label htmlFor="excerpt">Excerpt</Label>
                  <Textarea
                    id="excerpt"
                    value={newPost.excerpt}
                    onChange={(e) => setNewPost({ ...newPost, excerpt: e.target.value })}
                    placeholder="Enter a brief excerpt"
                    rows={3}
                  />
                </div>
                <div>
                  <Label htmlFor="content">Content</Label>
                  <Textarea
                    id="content"
                    value={newPost.content}
                    onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
                    placeholder="Enter post content"
                    rows={8}
                  />
                </div>
                <Button onClick={handleCreatePost} className="w-full">
                  Create Post
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        <div className="grid gap-6">
          {isLoading ? (
            <Card>
              <CardContent className="p-8 text-center text-gray-500">
                Loading blog posts...
              </CardContent>
            </Card>
          ) : posts.length === 0 ? (
            <Card>
              <CardContent className="p-8 text-center text-gray-500">
                No blog posts yet. Create your first post!
              </CardContent>
            </Card>
          ) : (
            posts.map((post) => (
              <Card key={post.id}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl mb-2">{post.Title}</CardTitle>
                      <p className="text-sm text-gray-500">{new Date(post.created_at).toLocaleDateString()}</p>
                    </div>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => handleDeletePost(post.id)}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-3">{post.Excerpt}</p>
                  <div className="prose max-w-none">
                    <p>{post.Content.substring(0, 200)}...</p>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
