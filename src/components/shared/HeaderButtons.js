import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {
  HeaderButtons,
  HeaderButton,
  defaultOnOverflowMenuPress,
} from 'react-navigation-header-buttons';

// define IconComponent, color, sizes and OverflowIcon in one place
const MaterialHeaderButton = props => (
  <HeaderButton
    {...props}
    IconComponent={MaterialIcons}
    iconSize={23}
    color="#666"
  />
);

export const MaterialHeaderButtons = props => {
  return (
    <HeaderButtons
      HeaderButtonComponent={MaterialHeaderButton}
      OverflowIcon={<MaterialIcons name="more-vert" size={23} color="#666" />}
      onOverflowMenuPress={({overflowButtonRef, hiddenButtons}) =>
        defaultOnOverflowMenuPress({
          overflowButtonRef,
          hiddenButtons,
          cancelButtonLabel: 'cancel - custom iOS label!',
        })
      }
      {...props}
    />
  );
};

export {Item, HiddenItem} from 'react-navigation-header-buttons';
