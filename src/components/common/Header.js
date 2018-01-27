import React from 'react';
import { Text, SafeAreaView } from 'react-native';

const Header = () => {
  const { headerStyle, textStyle } = styles;

  return (
  <SafeAreaView style={headerStyle}>
    <Text style={textStyle}>Tech Stack</Text>
  </SafeAreaView>
  );
};

const styles = {
  headerStyle: {
  backgroundColor: '#F8F8F8',
  justifyContent: 'center',
  alignItems: 'center',
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.2,
  elevation: 2,
  position: 'relative'
  },
  textStyle: {
  fontSize: 20,
  paddingBottom: 10
  }
};

export { Header };
