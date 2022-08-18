import { Feather } from '@expo/vector-icons';
import { useContext } from 'react';
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';

import { Context } from '../context/BlogContext';

const IndexScreen = () => {
  const { state, addBlogPost } = useContext(Context);

  return (
    <View>
      <Button title='button' onPress={() => addBlogPost()} />
      <FlatList
        data={state}
        keyExtractor={({ id }) => id}
        renderItem={({ item }) => {
          return (
            <View style={styles.row}>
              <Text>{item.title}</Text>
              <Feather name='trash' />
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default IndexScreen;
