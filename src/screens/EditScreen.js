import { useContext, useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

import { Context } from '../context/BlogContext';

const EditScreen = ({ navigation }) => {
  const { state, editBlogPost } = useContext(Context);
  const id = navigation.getParam('id');
  const blogPost = state.find((blogPost) => blogPost.id === id);

  const [title, setTitle] = useState(blogPost.title);
  const [content, setContent] = useState(blogPost.content);

  return (
    <View>
      <Text style={styles.label}>Edit Title:</Text>
      <TextInput
        value={title}
        style={styles.input}
        onChangeText={(newTitle) => setTitle(newTitle)}
      />
      <Text style={styles.label}>Edit Content:</Text>
      <TextInput
        value={content}
        style={styles.input}
        onChangeText={(newContent) => setContent(newContent)}
      />
      <Button
        title='Edit Blog Post'
        onPress={() =>
          editBlogPost(id, title, content, () => {
            navigation.navigate('Index');
          })
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 15,
    padding: 5,
    margin: 5,
  },

  label: {
    fontSize: 20,
    marginLeft: 5,
    marginBottom: 5,
  },
});

export default EditScreen;
