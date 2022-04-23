import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View, Image } from 'react-native';
import React, { useState } from 'react';

export default function EditProfile() {
  return (
    <View style={styles.mainContainer}>
        {/* Profile information */}
        <View style={styles.profileContainer}>
            <View style={styles.picContainer}>
                <Image source={require('./profile_photo.jpeg')}
                style={{width: 100, height: 100, borderRadius: 50}}></Image>
            </View>
            <View style={styles.infoContainer}>
                <Text style={{fontSize:20, paddingBottom: 10}}>Scope Member</Text>
                <Pressable style={styles.button}>
                    <Text style={styles.text}>Following</Text>
                </Pressable>
                <Text style={{fontSize:12, paddingTop: 10}}>Followers 28 | Following 69</Text>
            </View>
        </View>

        {/* Bio */}
        <View style={styles.bioContainer}>
            <Text>"Will trade one (1) feet pic for some Dulce rn."</Text>
        </View>

        {/* Restaurant entries */}
        <View style={styles.restaurantsContainer}>
            <View style={styles.restaurantTab}>
              <Pressable style={styles.activeButton}>
                    <Text style={{fontSize: 14, lineHeight: 35, fontWeight: 'bold', letterSpacing: 0.5, color: 'black', textAlign: 'center'}}>Restaurants</Text>
                </Pressable>
            </View>
        </View>

        <View style={styles.topEntryContainer}>
            <Image source={require('./dulce_logo.png')}
            style={{width: 60, height: 60, marginTop: 20, marginLeft: 20}}></Image>
            <Text style={{marginLeft: 20, fontWeight: 'bold', fontSize: 16, lineHeight: 100}}>Dulce</Text>
        </View>

        <View style={styles.entryContainer}>
            <Image source={require('./northern_logo.png')}
            style={{width: 70, height: 70, marginTop: 5, marginLeft: 10}}></Image>
            <Text style={{marginLeft: 20, fontWeight: 'bold', fontSize: 16, lineHeight: 80}}>Northern Cafe</Text>
        </View>

        <View style={styles.entryContainer}>
            <Image source={require('./innout_logo.png')}
            style={{width: 70, height: 70, marginTop: 5, marginLeft: 10}}></Image>
            <Text style={{marginLeft: 20, fontWeight: 'bold', fontSize: 16, lineHeight: 80}}>In-n-Out</Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    mainContainer: {
        padding: 20,
        paddingTop: 0,
        flex: 1,
        backgroundColor: '#F5F5F5'
    },
    profileContainer: {
        flex: 0.2,
        width: 350,
        borderRadius: 50,
        padding: 20,
        flexDirection: 'row',
        alignContent: 'center',
    },
    picContainer: {
      paddingRight: 20,
      marginTop: 5,
    },
    infoContainer: {
      alignItems: 'center',
      paddingTop: 10,
    },
    bioContainer: {
      flex: 0.1,
      width: 320,
      padding: 20,
    },
    restaurantsContainer: {
        flexDirection: 'row',
    },
    restaurantTab: {
        backgroundColor: '#3E8CE4',
        borderRadius: 50,
    },
    topEntryContainer: {
        flex: 0.2,
        flexDirection: 'row',
        borderBottomWidth: 2,
        borderTopWidth: 5,
        borderColor: '#3E8CE4',
        marginBottom: 10,
        width: 330,
        height: 150,
        alignContent: 'center',
    },
    entryContainer: {
        flex: 0.2,
        flexDirection: 'row',
        borderBottomWidth: 2,
        borderBottomColor: '#3E8CE4',
        marginTop: 10,
        marginBottom: 10,
        width: 330,
        height: 150,
        alignContent: 'center',
    },
    activeButton: {
        backgroundColor: '#3E8CE4',
        height: 30,
        width: 330,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        fontSize: 16,
    },
    button: {
        height: 30,
        width: 120,
        borderRadius: 50,
        fontSize: 16,
        backgroundColor: '#3E8CE4',
    },
    text: {
        fontSize: 14,
        lineHeight: 30,
        fontWeight: 'bold',
        letterSpacing: 0.5,
        color: 'black',
        textAlign: 'center',
    },
    regtext: {
        fontSize: 14,
        lineHeight: 30,
        letterSpacing: 0.5,
        color: 'black',
        textAlign: 'center',
    },
    title: {
      fontSize: 16,
      fontWeight: 'bold',
      lineHeight: 100,
    }
});
