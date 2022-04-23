import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './Login.js';
import SignUp from './SignUp'
import MyStack from './MyStack.js';
import BlockCard from './app/components/BlockCard';
import Screen from './app/components/Screen';
import FeaturedFood from './app/components/FeaturedFood';
import SearchBar from './app/components/SearchBar';

export default function App() {
  return (
    <Screen>
        <SearchBar/>
        <FeaturedFood/>
        <BlockCard/>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
