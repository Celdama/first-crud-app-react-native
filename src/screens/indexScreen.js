import { useContext } from 'react';

import BlogContext from '../context/BlogContext';

const { View, Text, StyleSheet, FlatList, Button } = require('react-native');

const IndexScreen = () => {
  const { data, addBlogPost } = useContext(BlogContext);

  return (
    <View>
      <Text>Index Screen</Text>
      <Button title='button' onPress={() => addBlogPost()} />
      <FlatList
        data={data}
        keyExtractor={({ id }) => id}
        renderItem={({ item }) => {
          return <Text>{item.title}</Text>;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default IndexScreen;
