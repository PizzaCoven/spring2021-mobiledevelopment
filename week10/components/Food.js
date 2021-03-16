import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

// import from local files
import AssetExample from './components/AssetExample';

// javascript modules available in npm
import { Card } from 'react-native-paper';
export default class Name extends Component {
    render() {
        return (
        
    <View style={styles.container}>
     <Text style={styles.paragraph}>
       My favorite food is Mac and Cheese!</Text>
    </View>
  );
}
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});