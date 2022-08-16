import { useContext } from 'react';

import BlogContext from '../context/BlogContext';

const { View, Text, StyleSheet } = require('react-native');

const IndexScreen = () => {
  const value = useContext(BlogContext);

  return (
    <View>
      <Text>Index Screen</Text>
      <Text>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default IndexScreen;
