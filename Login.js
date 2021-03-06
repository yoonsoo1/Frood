import React, {Component} from 'react';
import { View, Image, Text, Pressable, StyleSheet, TextInput } from 'react-native';

export default class Login extends Component {
    static navigationOptions = {
        title: 'LoginPage',
      };     
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <Image 
                    source={require('./assets/frood_logo.png')}
                    style={{ marginLeft: "auto", marginRight: "auto", width: 250, height: 200 }}
                />
                <Text style={{marginLeft: 12}}>Email:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="ID"
                />
                <Text style={{marginLeft: 12}}>Password:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                />
                <Pressable style={styles.btn}>
                    <Text style={{textAlign:'center', lineHeight: 25}}>Sign in</Text>
                </Pressable>
                <Text style={{marginTop: 50}}>Don't have an account? Sign up <Pressable
                onPress={() => navigate('SignupPage')}>
                    <Text style={{color:"#3E8CE4", padding: 0, margin: 0}}>Here</Text></Pressable>
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
      },
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
        bottom: 110,
        right: 180,
        position: 'absolute',
        margin: 10,
        backgroundColor: "#3E8CE4",
        height: 25,
        width: 60,
        borderRadius: 15, 
    }
});

