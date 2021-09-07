import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, Text, View, TextInput, Keyboard, TouchableOpacity, ScrollView, Pressable } from 'react-native';
import Icon from 'react-native-ico-material-design';


export default function Home() {




    return (
        <View style={styles.container}>



            <ScrollView
                contentContainerStyle={{
                    flexGrow: 1,
                }}
                keyboardShouldPersistTaps='handled'
            >

                <View style={styles.tasksWrapper}>
                    <Text style={styles.sectionTitle}>Home
                        {/* <Text>
              <Icon name="add-plus-button" height="12" width="12" />
            </Text> */}
                    </Text>

                </View>
            </ScrollView>


        </View >
    );
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E8EAED',

    },
    tasksWrapper: {
        marginTop: 105,
        paddingHorizontal: 30,
    },
    sectionTitle: {
        fontSize: 26,
        fontWeight: 'bold'

    },
    items: {
        marginTop: 30,
        // height: 20,
        // overflow: 'hidden'
    },
    writeTaskWrapper: {
        position: 'absolute',
        bottom: 20,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'

    },


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



