
import { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface BlogPost {
  id: string;
  title: string;
  content: string;
  date: string;
  excerpt: string;
}

const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    const savedPosts = localStorage.getItem('blogPosts');
    if (savedPosts) {
      setPosts(JSON.parse(savedPosts));
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <section className="py-16 bg-gradient-to-br from-red-50 to-pink-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
                  Our Blog
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Stay updated with the latest trends, tips, and insights in digital marketing and content creation.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-4xl mx-auto px-6">
            {posts.length === 0 ? (
              <Card>
                <CardContent className="p-12 text-center">
                  <h3 className="text-2xl font-semibold mb-4">No Posts Yet</h3>
                  <p className="text-gray-600">
                    We're working on some amazing content for you. Check back soon!
                  </p>
                </CardContent>
              </Card>
            ) : (
              <div className="space-y-8">
                {posts.map((post) => (
                  <Card key={post.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex justify-between items-start mb-4">
                        <CardTitle className="text-2xl">{post.title}</CardTitle>
                        <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                          {new Date(post.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </span>
                      </div>
                      <p className="text-lg text-gray-600">{post.excerpt}</p>
                    </CardHeader>
                    <CardContent>
                      <div className="prose max-w-none">
                        <div className="whitespace-pre-wrap">{post.content}</div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
