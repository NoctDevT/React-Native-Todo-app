import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';

import Navigation from './components/controller'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getUser } from './components/DbHandler/dbHandler'

export default function App() {


    // const clearAll = async () => {
    //     try {
    //         await AsyncStorage.clear()
    //     } catch (e) {
    //         // clear error
    //     }

    //     console.log('Done.')
    // }


    // useEffect(() => {
    //     clearAll();
    // }, [])


    return (
        <IsUserNameEntered />
    )
}




const LoadingScreen = () => {


    return (
        <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
            <Text> Loading... </Text>
            <ActivityIndicator color='#7f7f7f' style={{ marginTop: 17 }} />
        </View>
    )
}


const IsUserNameEntered = () => {

    const [registered, setRegistered] = useState(false);
    const [loaded, setLoaded] = useState(false);

    const getData = async () => {
        try {
            const value = await AsyncStorage.getItem('@userName')
            if (value !== null) {
                setRegistered(true);
            }
        } catch (e) {
            setRegistered(false);
        }
    }

    useEffect(() => {
        getData().then(() => setLoaded(true));
    }, [])


    if (loaded == false) {
        return <LoadingScreen />
    } else if (loaded === true && registered === false) {
        return <SetUsername />
    } else if (loaded === false && registered === true) {
        return <Navigation />
    } else if (loaded === true && registered === true) {
        return <Navigation />
    }

    // return <LoadingScreen />



    // return (
    //     !loaded && <SetUsername />,
    //     (loaded && registered) && <SetUsername />,
    //     (loaded && registered) && <Navigation />



    // )

}



const SetUsername = () => {

    const [name, setName] = useState();
    const [complete, setComplete] = useState(false);


    const storeData = async () => {
        try {
            const jsonValue = JSON.stringify(name)
            await AsyncStorage.setItem('@userName', jsonValue)
            setComplete(true);
        } catch (e) {
            // saving error
        }
    }
    return (
        complete ? (<Navigation />) : (<View style={styles.view}>
            <Text style={styles.sectionTitle}> Welcome, what's your name?</Text>
            <TextInput
                underlineColorAndroid='transparent'
                style={styles.input}
                placeholder="Enter Name"

                onChangeText={text => setName(text)}
                value={name} />

            <TouchableOpacity style={styles.button} onPress={() => storeData()}>
                <Text style={{ color: '#fff' }}>Next </Text>

            </TouchableOpacity>
        </View>)
    )
}


const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        width: '90%',
        paddingLeft: 12,
        borderWidth: 0,
        backgroundColor: '#ffb8da'

    },
    view: {
        flex: 1,
        justifyContent: 'center', //Centered horizontally
        alignItems: 'center', //Centered vertically
        backgroundColor: '#b19cd9'

    },
    sectionTitle: {
        fontSize: 26,
        // fontWeight: 'bold',
        color: '#602e5b',
        width: '90%',
        left: '5%',
        marginBottom: 80

    },
    button: {
        justifyContent: 'center', //Centered horizontally
        alignItems: 'center', //Centered vertically
        marginTop: 30,
        backgroundColor: '#2b2261',
        borderRadius: 10,
        padding: 2,
        height: 50,
        width: 60


    }
});
