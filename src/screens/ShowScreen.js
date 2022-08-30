import { Ionicons } from '@expo/vector-icons';
import { useContext } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { Context } from '../context/BlogContext';

const ShowScreen = ({ navigation }) => {
  const { state } = useContext(Context);

  const blogPost = state.find(
    (blogPost) => blogPost.id === navigation.getParam('id')
  );

  return (
    <View>
      <Text>{blogPost.title}</Text>
      <Text>{blogPost.id}</Text>
    </View>
  );
};

ShowScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => {
      return (
        <TouchableOpacity>
          <Ionicons style={styles.headerIcon} name='md-pencil' />
        </TouchableOpacity>
      );
    },
  };
};

const styles = StyleSheet.create({
  headerIcon: {
    marginRight: 10,
    size: 30,
    color: 'black',
  },
});

export default ShowScreen;
