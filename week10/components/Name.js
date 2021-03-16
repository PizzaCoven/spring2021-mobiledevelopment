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
      My name is T'mara!</Text>
    </View>
  );
}
}
