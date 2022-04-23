import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './Login.js';
import SignUp from './SignUp'
<<<<<<< HEAD
import MyStack from './MyStack.js';
=======
// import MyStack from './MyStack.js';
import BlockCard from './app/components/BlockCard.js';
// import Screen from './app/components/Screen.js';
import FeaturedFood from './app/components/FeaturedFood.js';
import SearchBar from './app/components/SearchBar.js';
import FriendProfile from './friend_profile.js';
>>>>>>> a8a111cfb63f9f08442b6c8d76c3f0c9aecb6ba3
import EditProfile from './edit_profile.js';

export default function App() {
  return (
<<<<<<< HEAD
    <EditProfile/>
=======
    <View styles={styles.container}>
        <SearchBar/>
        <BlockCard/>
        <FeaturedFood/>
    </View>
    // <EditProfile/>
>>>>>>> a8a111cfb63f9f08442b6c8d76c3f0c9aecb6ba3
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
