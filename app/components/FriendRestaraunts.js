import React from 'react';
import {View, StyleSheet} from 'react-native';
import HorizontalList from './HorizontalList';

const FriendRestaraunts = () => {
    return <HorizontalList title='Food your friends love...' data={data}/>;
};

const styles = StyleSheet.create ({
    container: {},
});

export default FriendRestaraunts;