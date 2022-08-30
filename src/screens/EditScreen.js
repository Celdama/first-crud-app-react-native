import { useContext, useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

import { Context } from '../context/BlogContext';

const EditScreen = ({ navigation }) => {
  const [title, setTitle] = useState(null);
  const [content, setContent] = useState(null);
  const id = navigation.getParam('id');
  const { state } = useContext(Context);

  useEffect(() => {
    const blogPost = state.find((blogPost) => blogPost.id === id);

    setTitle(blogPost.title);
    setContent(blogPost.content);
  }, [id]);

  return (
    <View>
      <Text style={styles.label}>Edit Title:</Text>
      <TextInput
        value={title}
        style={styles.input}
        onChangeText={(textChange) => setTitle(textChange)}
      />
      <Text style={styles.label}>Edit Content:</Text>
      <TextInput
        value={content}
        style={styles.input}
        onChangeText={(textChange) => setContent(textChange)}
      />
      <Button title='Edit Blog Post' onPress={() => console.log('edited')} />
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
