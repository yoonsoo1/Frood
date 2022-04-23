import React from 'react';
import {View, StyleSheet, StatusBar} from 'react-native';
import { clickProps } from 'react-native-web/dist/cjs/modules/forwardedProps';

const Screen = ({children}) => {
    return (
        <ScrollView style={styles.container}>
            {children}
        </ScrollView>
    )
}

const styles = StyleSheet.create ({
    container:{
        marginTop: StatusBar.currentHeight,
        paddingHorizontal: 15,
        backgroundColor: '#f7f3f3',
        flex: 1,
    },
});

export default Screen;