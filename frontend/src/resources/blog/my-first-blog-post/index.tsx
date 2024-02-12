const content = `
# My First Blog Post

Welcome to my blog! This is where I write about my journey in technology.

## Section 1
This is an image of a cat:
![Cat Image](main_image.png)
`;

const metadata = {
  title: "Your Title Here",
  publishedAt: new Date().toISOString(),
  description: "Your Description Here",
  author: "Your Name Here",
  keywords: ["keyword1", "keyword2", "keyword3"],
};

export { content, metadata };
