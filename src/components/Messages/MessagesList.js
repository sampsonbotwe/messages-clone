import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {connect} from 'react-redux';

import {getMessages} from '../../store/actions/messageActions';

import {ScrollView} from 'react-native-gesture-handler';

const MessagesList = props => {
  useEffect(() => {
    props.onGetMessages();
  }, []);

  return (
    <ScrollView style={styles.container}>
      {props.messages.map((message, index) => (
        <View key={index} style={{marginbottom: 20}}>
          <Text>{message.address}</Text>
          <Text>{message.body}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
});

const mapStateToProps = state => {
  return {
    messages: state.messages,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onGetMessages: () => dispatch(getMessages()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MessagesList);
