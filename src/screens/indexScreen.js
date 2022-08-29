import { Feather } from '@expo/vector-icons';
import { useContext } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { Context } from '../context/BlogContext';

const IndexScreen = ({ navigation }) => {
  const { state, addBlogPost, deleteBlogPost } = useContext(Context);
  const { navigate } = navigation;

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
