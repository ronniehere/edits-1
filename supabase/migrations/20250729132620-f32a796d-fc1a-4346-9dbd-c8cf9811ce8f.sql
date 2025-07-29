-- Enable Row Level Security on the Blogs table
ALTER TABLE public."Blogs" ENABLE ROW LEVEL SECURITY;

-- Create policies for blog management
-- Allow everyone to view published blogs
CREATE POLICY "Anyone can view blogs" 
ON public."Blogs" 
FOR SELECT 
USING (true);

-- For now, allow all authenticated users to manage blogs
-- (You can restrict this to specific admin users later)
CREATE POLICY "Authenticated users can insert blogs" 
ON public."Blogs" 
FOR INSERT 
TO authenticated
WITH CHECK (true);

CREATE POLICY "Authenticated users can update blogs" 
ON public."Blogs" 
FOR UPDATE 
TO authenticated
USING (true);

CREATE POLICY "Authenticated users can delete blogs" 
ON public."Blogs" 
FOR DELETE 
TO authenticated
USING (true);