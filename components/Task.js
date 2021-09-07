import React, { useState, useContext } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
// import { set } from 'react-native-reanimated'
import Icon from 'react-native-ico-material-design';
import { ThemeContext } from "./themeContext";


const Task = (props) => {


    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;



    const [isComplete, setComplete] = useState(false)

    return (
        <View style={styles(darkMode).item}>
            <View style={styles().itemLeft}>
                <TouchableOpacity style={styles().square} onPress={() => { setComplete(!isComplete) }}>

                    <Text style={{ position: 'absolute', justifyContent: 'center', alignItems: 'center' }}>

                        {isComplete === true ?
                            <Icon name="check-symbol" color='green' height="12" width="12" group="material-design" /> :
                            <Icon name="circle-outline" color='red' height="12" width="12" group="material-design" color={'#fff'} />


                        }


                    </Text>

                </TouchableOpacity>

                <Text style={styles(darkMode).itemText}>
                    {props.text}
                </Text>
            </View>
            <View style={styles().circular} />
        </View>
    )
}


const styles = (darkMode) => StyleSheet.create({

    item: {
        // backgroundColor: '#ffe5d4',
        // backgroundColor: '#373ecc',
        backgroundColor: darkMode ? '#3a41be' : '#cfc4bf',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
        opacity: 1
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',

    },
    square: {
        width: 24,
        height: 24,
        backgroundColor: '#55BCF6',
        // opacity: 0.4,
        borderRadius: 5,
        marginRight: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    itemText: {
        maxWidth: '80%',
        color: darkMode ? '#fff' : '#000'
    },
    circular: {
        width: 12,
        height: 12,
        borderColor: '#55BCF6',
        borderWidth: 2,
        borderRadius: 5,
    }

})


export default Task;