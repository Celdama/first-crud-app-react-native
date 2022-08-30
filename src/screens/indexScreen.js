import { Feather } from '@expo/vector-icons';
import { useContext, useEffect } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { Context } from '../context/BlogContext';

const IndexScreen = ({ navigation }) => {
  const { state, getBlogPosts, deleteBlogPost } = useContext(Context);
  const { navigate } = navigation;

  useEffect(() => {
    getBlogPosts();

    const listerner = navigation.addListener('didFocus', () => {
      getBlogPosts();
    });

    // this function right here is the perfect location to do some cleanup after our component and essentially
    // turn off any listeners that we have created
    return () => {
      listerner.remove();
    };
  }, []);

  return (
    <View>
      <FlatList
        data={state}
        keyExtractor={({ id }) => id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => navigate('Show', { id: item.id })}>
              <View style={styles.row}>
                <Text style={styles.title}>{item.title}</Text>
                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                  <Feather style={styles.icon} name='trash' />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

IndexScreen.navigationOptions = ({ navigation }) => {
  const { navigate } = navigation;
  return {
    headerRight: () => {
      return (
        <TouchableOpacity onPress={() => navigate('Create')}>
          <Feather name='plus' size={30} style={styles.headerIcon} />
        </TouchableOpacity>
      );
    },
  };
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderColor: 'gray',
  },
  title: {
    fontSize: 18,
  },
  icon: {
    fontSize: 24,
  },
  headerIcon: {
    marginRight: 10,
  },
});

export default IndexScreen;
