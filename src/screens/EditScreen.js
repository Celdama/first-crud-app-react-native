import { useContext, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const EditScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.label}>Enter Title:</Text>

      <Text style={styles.label}>Enter Content:</Text>
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
