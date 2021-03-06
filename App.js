import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './Login.js';
import SignUp from './SignUp'
import MyStack from './MyStack.js';
// import MyStack from './MyStack.js';
import BlockCard from './app/components/BlockCard.js';
// import Screen from './app/components/Screen.js';
import FeaturedFood from './app/components/FeaturedFood.js';
import SearchBar from './app/components/SearchBar.js';
import FriendProfile from './friend_profile.js';
import EditProfile from './edit_profile.js';

export default function App() {
  return (
    <View styles={styles.container}>
        <SearchBar/>
        <BlockCard/>
        <FeaturedFood/>
    </View>
    // <EditProfile/>
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
