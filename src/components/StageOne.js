import React, { useContext, useState } from 'react';
import { Alert, Modal, StyleSheet, Pressable, View } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Input, Button, ListItem, Text } from 'react-native-elements';
import { MyContext } from '../context';
import { MainLogo } from '../utils/tools';
import { Icon } from 'react-native-elements/dist/icons/Icon';

const StageOne = () => {
  const context = useContext(MyContext);
  const [modalVisible, setModalVisible] = useState(false);

  const renderPlayers = () => (
    context.state.players.map((item, idx) => (
      <ListItem
        key={idx}
        bottomDivider
        containerStyle={{backgroundColor: 'transparent'}}
        style={{ width: '100%' }}
        onLongPress={() => context.removePlayer(idx)}
      >
        <ListItem.Chevron />
        <ListItem.Content>
          <ListItem.Title>{item}</ListItem.Title>
        </ListItem.Content>
      </ListItem>
    ))
  )

  return (
    <>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text h1 style={styles.modalText}>Welcome</Text>
            <Text style={[styles.modalText]}>
              Simply add two or more players and select "Find Out Who Pays" to generate a loser - who's on the hook for the bill tonight!
            </Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Icon lefticon fontSize='20px' alt='close' color='white' type='antdesign' name='closecircleo' />
            </Pressable>
          </View>
        </View>
      </Modal>

      <Formik
        initialValues={{player: ''}}
        validationSchema={Yup.object({
          player: Yup.string()
          .min(3, 'Must be more than 3 characters')
          .max(15, 'Must be less than 15 characters')
          .required('This field is required')
        })}
        onSubmit={(values, { resetForm }) => {
          context.addPlayer(values.player)
          resetForm();
        }}
      >
        {({handleChange, handleBlur, handleSubmit, values, touched, errors }) => (
          <>
          <MainLogo />
          <View style={{flex: 1, justifyContent: 'flex-start', padding: 50, width: '100%'}}>
            <Input 
              placeholder='Add player names'
              leftIcon={{type: 'antdesign', name: 'adduser'}}
              // inputContainerStyle={{
              //   marginHorizontal: 50,
              //   marginTop: 50
              // }}
              renderErrorMessage={errors.play && touched.player}
              errorMessage={errors.player}
              errorStyle={{
                // marginHorizontal: 50
              }}
              onChangeText={handleChange('player')}
              onBlur={handleBlur('player')}
              value={values.player}
            />
            <Button 
              buttonStyle={styles.button}
              title='Add Player'
              onPress={handleSubmit}
            />

            {context.state.players && context.state.players.length < 1 ?
              <Pressable
                style={[styles.button, styles.buttonOpen]}
                onPress={() => setModalVisible(true)}
              >
                <Text style={styles.textStyle}>How to Play</Text>
              </Pressable>
              :
              null}
            
          </View>
          </>
        )}
      </Formik>

      <View style={{padding: 50, width: '100%'}}>
        {
          context.state.players && context.state.players.length > 0 ?
          <>
            {renderPlayers()}
            <Button 
              buttonStyle={styles.button}
              title='Find out who pays!'
              onPress={() => context.next()}
            />
          </>
          : null
        }
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#DB3EB1',
    marginTop: 20,
    padding: 10,
    borderRadius: 20,
    fontSize: 18
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: '#E8D6FF',
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: '80%',
    height: '50%'
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  textStyle: {
    color: "white",
    textAlign: "center",
    fontSize: 18
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    lineHeight: 50
  }
})

export default StageOne;