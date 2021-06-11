import React, { Component } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { MyContext } from '../context';
import StageOne from './StageOne';
import StageTwo from './StageTwo';
import {LinearGradient} from 'expo-linear-gradient';

class App extends Component {
  static contextType = MyContext;

  render() {
    return (
      <LinearGradient
        colors={[ 'rgba(141,249,252,1)', 'rgba(196,165,237,1)', 'rgba(238,54,217,1)' ]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.linearGradient}
      >
        <ScrollView>
          <View style={styles.container}>
            {
              this.context.state.stage === 1 ?
              <StageOne />
              :
              <StageTwo />
            }
          </View>
        </ScrollView>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 80,
  },
  linearGradient: {
    height: '100%',
  },
});

export default App;