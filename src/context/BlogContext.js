import React from 'react';

const BlogContext = React.createContext();

const blogPosts = [
  { id: 1, title: 'post 1' },
  { id: 2, title: 'post 2' },
  { id: 3, title: 'post 3' },
  { id: 4, title: 'post 4' },
  { id: 5, title: 'post 5' },
];

export const BlogProvider = ({ children }) => {
  return (
    <BlogContext.Provider value={blogPosts}>{children}</BlogContext.Provider>
  );
};

export default BlogContext;
