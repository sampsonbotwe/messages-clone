import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MessagesList from '../components/Messages/MessagesList';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <MessagesList />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
});

export default HomeScreen;
