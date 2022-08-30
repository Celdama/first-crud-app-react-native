import { useContext, useState } from 'react';

import BlogPostForm from '../components/BlogPostForm';
import { Context } from '../context/BlogContext';

const CreateScreen = ({ navigation }) => {
  const { addBlogPost } = useContext(Context);

  return <BlogPostForm />;
};

export default CreateScreen;
