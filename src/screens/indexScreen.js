import { useContext } from 'react';
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';

import { Context } from '../context/BlogContext';

const IndexScreen = () => {
  const { state, addBlogPost } = useContext(Context);

  return (
    <View>
      <Text>Index Screen</Text>
      <Button title='button' onPress={() => addBlogPost()} />
      <FlatList
        data={state}
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
