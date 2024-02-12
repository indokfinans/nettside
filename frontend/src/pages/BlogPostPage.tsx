import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { marked } from "marked";
import { baseUrl } from "marked-base-url";

// Define a type for the blog post metadata
type BlogMetadata = {
  title: string;
  // Add any other metadata properties here, e.g., date, author
  [key: string]: any;
};

// Define a type for the blog post state
type BlogPost = {
  metadata: BlogMetadata;
  content: string;
};

const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPost>({
    metadata: { title: "" },
    content: "",
  });

  useEffect(() => {
    const fetchPostContent = async () => {
      try {
        // Dynamic import to get the markdown file
        const { content, metadata } = await import(
          `../../public/blogs/${slug}`
        );
        // Parsing the markdown content to separate metadata and content
        // Convert the markdown content to HTML
        console.log(slug)
        marked.use(baseUrl(`/blogs/${slug}/`));
        const htmlContent = await marked(content);
        console.log(htmlContent);
        setPost({ metadata, content: htmlContent });
      } catch (error) {
        console.error("Error loading blog post content:", error);
        // Handle the error state appropriately
      }
    };

    if (slug) {
      fetchPostContent();
    }
  }, [slug]);

  return (
    <article>
      <h1>{post.metadata.publishedAt}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
      {/* Render additional post details like author, date, etc., from post.metadata */}
    </article>
  );
};

export default BlogPostPage;
