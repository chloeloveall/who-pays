import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {  Button } from 'react-native-elements';
import { MyContext } from '../context';
import { MainLogo } from '../utils/tools';

const StageTwo = () => {
  const context = useContext(MyContext);

  return (
    <>
      <MainLogo />
      <Text style={styles.result}>{context.state.result}</Text>
      <Button
        buttonStyle={styles.button}
        title='Try again'
        onPress={()=> context.getNewLoser()}
      />
      <Button
        buttonStyle={styles.button}
        title="Start over"
        onPress={()=> context.resetGame()}
      />
    </>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#DB3EB1',
    marginTop: 40,
    width: '100%',
    padding: 10
  },
  result: {
    marginTop: 30,
    fontSize: 30
  }
})

export default StageTwo;