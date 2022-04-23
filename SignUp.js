import React, {Component} from 'react';
import { View, Image, Text, Pressable, StyleSheet, TextInput } from 'react-native';

export default class Login extends Component {
    render() {
        return (
            <View>
                <Image 
                    source={require('./frood_logo.png')}
                    style={{ marginLeft: "auto", marginRight: "auto", width: 250, height: 200 }}
                />
                <Text style={{marginLeft: 12}}>Display name:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Username"
                />
                <Text style={{marginLeft: 12}}>Email:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                />
                <Text style={{marginLeft: 12}}>Password:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                />
                <Pressable style={styles.btn}>
                    <Text style={{textAlign:'center', lineHeight: 25}}>Sign up</Text>
                </Pressable>
            </View>
          )
    }
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderColor: "#3E8CE4",
        borderRadius: 15, 
    },
    btn: {
        display: "flex",
        flexDirection: "row",
        justifyContent: 'center',
        alignSelf: 'flex-end',
        margin: 10,
        backgroundColor: "#3E8CE4",
        height: 25,
        width: 60,
        borderRadius: 15, 
    }
});

