import React from 'react';
import {View, StyleSheet} from 'react-native';
import HorizontalList from './HorizontalList';

const NearYou = () => {
    return <HorizontalList title='More food near you...' data={data}/>;
};

const styles = StyleSheet.create ({
    container: {},
});

export default NearYou;