import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View, Image } from 'react-native';
import React, { useState } from 'react';

export default function EditProfile() {
  return (
    <View style={styles.mainContainer}>
        {/* Profile information */}
        <View style={styles.profileContainer}>
            <View style={styles.picContainer}>
                <Image source={require('./assets/profile_photo.jpeg')}
                style={{width: 100, height: 100, borderRadius: 50}}></Image>
            </View>
            <View style={styles.infoContainer}>
                <Text style={{fontSize:20, paddingBottom: 10}}>Scope Member</Text>
                <Pressable style={styles.button}>
                    <Text style={styles.text}>Edit Profile</Text>
                </Pressable>
                <Text style={{fontSize:12, paddingTop: 10}}>Followers 28 | Following 69</Text>
            </View>
        </View>

        {/* Bio */}
        <View style={styles.bioContainer}>
            <Text>"Entering my joker era.. Please buy me Pot of Cha"</Text>
        </View>

        {/* Restaurant entries */}
        <View style={styles.restaurantsContainer}>
            <View style={styles.restaurantTab}>
              <Pressable style={styles.activeButton}>
                    <Text style={styles.text}>Restaurants</Text>
                </Pressable>
            </View>
            <View style={styles.likesTab}>
            <Pressable style={styles.inactiveButton}>
                    <Text style={styles.regtext}>Likes</Text>
                </Pressable>
            </View>
        </View>

        <View style={styles.topEntryContainer}>
            <Image source={require('./assets/popeyes_logo.png')}
            style={{width: 100, height: 100, paddingBottom: 10}}></Image>
            <Text style={styles.title}>Popeyes Louisiana Kitchen</Text>
        </View>

        <View style={styles.entryContainer}>
            <Image source={require('./assets/chc_logo.png')}
            style={{width: 60, height: 60, marginTop: 10, marginLeft: 20}}></Image>
            <Text style={{marginLeft: 20, fontWeight: 'bold', fontSize: 16, lineHeight: 80}}>California Hot Chicken</Text>
        </View>

        <View style={styles.entryContainer}>
            <Image source={require('./assets/innout_logo.png')}
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
        justifyContent: 'center',
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
        marginLeft: 30,
        marginRight: 20,
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
        width: 120,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        fontSize: 16,
    },
    inactiveButton: {
        backgroundColor: '#DEDEDE',
        height: 30,
        width: 120,
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
