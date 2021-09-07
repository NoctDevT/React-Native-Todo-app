import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import TodoList from './todoList.js'
import Icon from 'react-native-ico-material-design';
import HomePage from './Home'
import { ThemeProvider } from './themeContext'
// import AsyncStorage from '@react-native-async-storage/async-storage';

import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react/cjs/react.development';
import { createStackNavigator } from '@react-navigation/stack';
import CreateTask from './createTask'







function Home() {


    return (
        <HomePage />
    );
}






function Home2() {


    return (
        <SafeAreaView>
            <HomePage />
        </SafeAreaView>

    );
}







// const Tab = createBottomTabNavigator();

const Tab = createMaterialBottomTabNavigator();
const stack = createStackNavigator();


const CreateNewPlaceholder = () => <View style={{ flex: 1, backgroundColor: 'blue' }} />;

const CreateNewPlaceholder2 = () => <View style={{ flex: 1, backgroundColor: 'red' }} />;

const config = {
    animation: 'spring',
    config: {
        stiffness: 1000,
        damping: 500,
        mass: 3,
        overshootClamping: true,
        restDisplacementThreshold: 0.01,
        restSpeedThreshold: 0.01,
    },
};


export default function App() {






    return (
        <ThemeProvider>
            <SafeAreaProvider>
                <NavigationContainer>

                    <Tab.Navigator
                        // screenOptions={{
                        //     headerShown: false,
                        //     tabBarStyle: { backgroundColor: '#30277e', justifyContent: 'center', borderTopWidth: 0 },
                        //     tabBarItemStyle: {
                        //         marginBottom: Platform.OS === 'android' ? 5 : 0
                        //     },
                        //     tabBarHideOnKeyboard: true,
                        screenOptions={{
                            animation: true
                        }}
                        //     //
                        //     // tabBarShowLabel: false,
                        // }}
                        initialRouteName="Home"
                        activeColor="#f0edf6"
                        inactiveColor="#777777"
                        barStyle={{ backgroundColor: '#30277e' }}
                        shifting={true}
                    >
                        <Tab.Screen name="Home"
                            component={TodoList}
                            options={{
                                tabBarLabel: 'Tasks',
                                tabBarIcon: ({ color, size }) => (
                                    <Icon name="create-new-pencil-button" group="material-design" color={'#fff'} />
                                ),
                                tabBarLabelStyle: {
                                    fontSize: 10,
                                    position: 'relative',
                                    top: "2%",
                                    color: '#fff',
                                    fontWeight: '300'
                                },
                            }}


                        />


                        <Tab.Screen name="createTask" component={CreateTask}
                            options={{
                                tabBarLabel: 'create',
                                tabBarIcon: ({ color, size }) => (
                                    <Icon name="add-plus-button" group="material-design" color={'#fff'} size={size} />
                                ),
                                tabBarLabelStyle: {
                                    fontSize: 10,
                                    position: 'relative',
                                    bottom: 0,
                                    color: '#fff',
                                    fontWeight: '300'


                                },
                                tabBarIconStyle: {
                                    bottom: 0,
                                }
                            }}
                            listeners={({ navigation }) => ({
                                tabPress: event => {
                                    event.preventDefault();
                                    navigation.navigate("createTask")
                                }
                            })}
                        />

                        <Tab.Screen name="Settings" component={Home}
                            options={{
                                tabBarLabel: 'Home',
                                tabBarIcon: ({ color, size }) => (
                                    <Icon name="home-button" group="material-design" color={'#fff'} size={size} />

                                ),
                                tabBarLabelStyle: {
                                    fontSize: 10,
                                    position: 'relative',
                                    top: "2%",
                                    color: '#fff',
                                    fontWeight: '300'


                                },
                            }} />



                    </Tab.Navigator>
                </NavigationContainer>
            </SafeAreaProvider>
        </ThemeProvider>
    );
}


// export default TodoList;