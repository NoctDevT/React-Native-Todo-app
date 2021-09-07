import React, { useState, useEffect, useContext } from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, Text, View, TextInput, Keyboard, TouchableOpacity, ScrollView, Pressable, FlatList } from 'react-native';
import Icon from 'react-native-ico-material-design';
// import * as Device from 'expo-device';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ToggleButton from './toggleButton';
import { ThemeContext } from "./themeContext";

import { setTaskDB, getTaskDB } from './DbHandler/dbHandler';

import Task from './Task'

export default function App() {

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;


  const tasks = getTaskDB();



  useEffect(() => {
    tasks.then(req => JSON.parse(req)).then(json => { if (json !== null) setTaskItems(json) })
  }, [tasks])


  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);
  const [deviceName, setDeviceName] = useState([]);
  const [userGreeting, setUserGreeting] = useState('')




  const handleAddTask = () => {
    Keyboard.dismiss();
    // setTaskItems([...taskItems, task])
    setTaskDB([...taskItems, task])
    setTask(null);
  }

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskDB(itemsCopy);
    // setTaskItems(itemsCopy);
  }


  useEffect(() => {
    getData();

    var date = new Date();
    var hours = date.getHours();

    if (hours <= 12 && hours >= 12) {
      setUserGreeting("Have a great morning, ")
    }
    else if (hours > 12 && hours <= 18) {
      setUserGreeting("Hope you have a good afternoon, ")
    }
    else if (hours < 18 && hours >= 21) {
      setUserGreeting("Good evening, ")
    }
    else {
      setUserGreeting("Have a wonderful night, ")
    }
  }, [])



  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('@userName')
      if (value !== null) {
        setDeviceName(value.replace(/['"]+/g, ''));
      }
    } catch (e) {
      setDeviceName('user')
    }
  }

    ;



  return (
    <View style={styles(darkMode).container}>




      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
        }}
        keyboardShouldPersistTaps='handled'
      >



        <View style={styles().header}>
          <TouchableOpacity>
            <Icon name="sort-button-with-three-lines" group="material-design" color={darkMode ? '#fff' : '#000'} opacity={0.7} />
          </TouchableOpacity>
          <View style={styles().slider}>
            <ToggleButton />
          </View>
        </View>


        <View style={styles().tasksWrapper}>
          <Text style={styles(darkMode).sectionGreeting}>{userGreeting} </Text>
          <Text style={styles(darkMode).sectionName}>{deviceName} </Text>



          <View style={styles().items}>
            {
              taskItems.map((item, index) => {
                return (
                  <TouchableOpacity key={index} onLongPress={() => completeTask(index)}>
                    <Task text={item} />
                  </TouchableOpacity>

                )
              })
            }

          </View>

        </View>
      </ScrollView>

      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"
        }
        style={styles().writeTaskWrapper}>

        <TextInput style={styles().input} placeholder={"Write a task"} value={task} onChangeText={text => setTask(text)} />

        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles().addWrapper}>
            <Text style={styles().addText}>+</Text>
          </View>
        </TouchableOpacity>

      </KeyboardAvoidingView>



    </View >
  );
}



const styles = (darkMode) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: darkMode ? '#110022' : '#FFF'    //Night mode

  },
  header: {
    position: 'relative',
    top: 70,
    paddingLeft: 30,
  },
  slider: {
    position: 'absolute',
    paddingLeft: '85%'
  },
  tasksWrapper: {
    marginTop: 105,
    paddingHorizontal: 30,
  },
  sectionGreeting: {
    fontSize: 16,
    opacity: 0.6,
    fontWeight: 'bold',
    color: darkMode ? '#c3c1f3' : '#602e5b',

  },
  sectionName: {
    fontSize: 34,
    color: darkMode ? '#c3c1f3' : '#602e5b',
    letterSpacing: 1.5,
    fontWeight: "600"

  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 20,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'

  },
  input: {
    paddingVertical: 15,
    width: 250,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    borderRadius: 25,
    borderColor: '#C0C0C0',
    borderWidth: 1,

  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1
  },
  addText: {},

  // NavContainer: {
  //   position: 'absolute',
  //   alignItems: 'center',
  //   bottom: 0
  // },
  // Navbar: {
  //   flexDirection: 'row',
  //   backgroundColor: "#2b2261",
  //   width: "100%",
  //   height: 60,
  //   justifyContent: 'space-evenly',
  //   // borderRadius: 40
  // },
  // IconBehaviour: {

  // },

});




const Navbar = () => {


  return (
    <View style={styles.NavContainer} >
      <View style={styles.Navbar} >

        <Pressable style={styles.IconBehaviour}>

          <Icon name="add-label-button" background="circle" height={26} width={26} color="#000" />

        </Pressable>

      </View>
    </View>
  )
}