import { StatusBar } from 'expo-status-bar';
import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import React, { useState } from 'react';

const Following = () => {
    return (
        <View>
        <Pressable style={styles.button} onPress ={toggleSwitch()}>
            <Text style={styles.text}>Following</Text>
        </Pressable>
        </View>
    )
}

const Follow = () => {
    return (
        <View>
        <Pressable style={styles.button}>
            <Text style={styles.text}>Follow</Text>
        </Pressable>
        </View>
    )
}

export default function FriendProfile() {
const [isFollowing, setFollowing] = useState(false);
const toggleSwitch = () => setFollowing(previousState => !previousState);

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
                {isFollowing == true? 
                <View>
                <Pressable style={styles.followingbutton} onPress ={toggleSwitch}>
                    <Text style={styles.text}>Following</Text>
                </Pressable>
                </View>
                :
                <View>
                    <Pressable style={styles.button} onPress ={toggleSwitch}>
                        <Text style={styles.text}>Follow</Text>
                    </Pressable>
                </View>}
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

        <SafeAreaView>
        <ScrollView style={styles.scrollview}>
            <View style={styles.topEntryContainer}>
                <Image source={require('./assets/dulce_logo.png')}
                style={{width: 60, height: 60, marginLeft: 20}}></Image>
                <Text style={{marginLeft: 20, fontWeight: 'bold', fontSize: 16, lineHeight: 80}}>Dulce</Text>
            </View>

            <View style={styles.entryContainer}>
                <Image source={require('./assets/northern_logo.png')}
                style={{width: 70, height: 70, marginTop: -10, marginLeft: 10}}></Image>
                <Text style={{marginLeft: 20, fontWeight: 'bold', fontSize: 16, marginTop: 10}}>Northern Cafe{"\n"}Ham Fried Rice</Text>
            </View>

            <View style={styles.entryContainer}>
                <Image source={require('./assets/innout_logo.png')}
                style={{width: 70, height: 70, marginTop: -10, marginLeft: 10}}></Image>
                <Text style={{marginLeft: 20, fontWeight: 'bold', fontSize: 16, marginTop: 10}}>In-n-Out{"\n"}Double-Double Burger</Text>
            </View>

            <View style={styles.entryContainer}>
                <Image source={require('./assets/cava.jpg')}
                style={{width: 70, height: 70, marginTop: -10, marginLeft: 10}}></Image>
                <Text style={{marginLeft: 20, fontWeight: 'bold', fontSize: 16, marginTop: 10}}>Cava{"\n"}Salad Bowl</Text>
            </View>

            <View style={styles.entryContainer}>
                <Image source={require('./assets/thai_logo.png')}
                style={{width: 70, height: 70, marginTop: -10, marginLeft: 10}}></Image>
                <Text style={{marginLeft: 20, fontWeight: 'bold', fontSize: 16, marginTop: 10}}>Thai By Trio{"\n"}Pad Thai</Text>
            </View>

            <View style={styles.entryContainer}>
                <Image source={require('./assets/tacobell_logo.png')}
                style={{width: 70, height: 70, marginTop: -10, marginLeft: 10}}></Image>
                <Text style={{marginLeft: 20, fontWeight: 'bold', fontSize: 16, marginTop: 10}}>Taco Bell{"\n"}Beef Quesurrito</Text>
            </View>

        </ScrollView>
        </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
    mainContainer: {
        padding: 20,
        paddingTop: 0,
        flex: 1,
        backgroundColor: '#F5F5F5',
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
      marginTop: 60,
    },
    restaurantsContainer: {
        flexDirection: 'row',
        marginTop: 20,
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
    followingbutton: {
        height: 30,
        width: 120,
        borderRadius: 50,
        fontSize: 16,
        backgroundColor: '#3EE462',
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
    },
    scrollview: {
        // flex: 0.3,
        height: 400,
    }
});
