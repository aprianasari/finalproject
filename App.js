import React from 'react';
import { View, StyleSheet } from 'react-native';
import Greeting from './components/Greeting';
import Header from './components/Header';
import TextBody from './components/TextBody';
import Global from './components/Global';
import DataFlexBox from './components/DataFlexBox';
import DataList from './components/DataList';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.boxHeader}>
        <Header />
      </View>
      <View style={styles.boxSub}>
        <Greeting />
        <Global />
      </View>
      <View style={styles.boxSubBody}>
        <TextBody />
        <DataFlexBox />
      </View>
      <View style={styles.boxBody}>
        <DataList />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;