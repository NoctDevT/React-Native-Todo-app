
import * as React from 'react';
import { Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';




export async function setTaskDB(taskArray) {
    return AsyncStorage.setItem('tasks', JSON.stringify(taskArray))
        .then(json => console.log('success!'))
        .catch(error => console.log('error!'));
}


export async function getTaskDB() {
    return AsyncStorage.getItem('tasks')
    // .then(req => JSON.parse(req))
    // .then(json => console.log(json))
    // .catch(error => console.log('error!'));

}


export async function setThemeDB(darkModeEnabled) {
    return AsyncStorage.setItem('darkModeEnabled', JSON.stringify(darkModeEnabled))
        .then(json => console.log('success!'))
        .catch(error => console.log('error!'));
}

export async function getThemeDB() {
    return AsyncStorage.getItem('darkModeEnabled')

}



// export async function getUser() {
//     try {
//         const value = await AsyncStorage.getItem('@userName')
//         if (value !== null) {
//             return true;

//         }
//     } catch (e) {
//         return false;
//     }
// }




// const getData = async () => {
//     try {
//         const value = await AsyncStorage.getItem('@userName')
//         if (value !== null) {
//             setRegistered(true);

//         }
//     } catch (e) {
//         setRegistered(false);
//     }
// }