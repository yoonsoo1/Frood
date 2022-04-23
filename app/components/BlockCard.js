import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import Title from './Title'
import Subtitle from './Subtitle'

const BlockCard = ({style, imageStyle, item}) => {
    const {thumbnail, title, desc} = item;
    return (
        <View style = {[styles.container, style]}>
            <Image
                source = {{uri: thumbnail}}
                style= {[styles.image, imageStyle]}
            />
            <View style= {styles.contentContainer}>
                <Title>{title}</Title> {/* cava */}
                <Subtitle> {desc}</Subtitle> {/* miles away location icon */}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: 300,
        borderRadius: 8,
        overflow: 'hidden',
        backgroundColor: '#fff',
    },
    image: {
        width: '100%',
        height: 200,
    },
    contentContainer: {
        padding: 5,
    }
})

export default BlockCard;