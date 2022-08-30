import { useContext } from 'react';

import BlogPostForm from '../components/BlogPostForm';
import { Context } from '../context/BlogContext';

const EditScreen = ({ navigation }) => {
  const { state, editBlogPost } = useContext(Context);
  const id = navigation.getParam('id');
  const blogPost = state.find((blogPost) => blogPost.id === id);

  return (
    <BlogPostForm
      onSubmit={(title, content) => {
        editBlogPost(id, title, content, () => {
          navigation.navigate('Index');
        });
      }}
      initialValues={{ title: blogPost.title, content: blogPost.content }}
    />
  );
};

export default EditScreen;
