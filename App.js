import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/Screens/HomeScreen';
import ShowScreen from './src/Screens/ShowScreen';
import { Provider } from './src/context/BlogContext';
import FavoriteContentScreen from './src/Screens/FavoriteContentScreen';
import Profile from './src/Screens/Profile';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerTitle: "Favorite Foods",
            headerStyle: { backgroundColor: "#F4CE14" },
            headerTintColor: "#fff",
          }}
        >
          <Stack.Screen name ="Profile" component={Profile}/>
          <Stack.Screen name="Home" component={HomeScreen}/>
          <Stack.Screen name="Show" component={ShowScreen} />
          <Stack.Screen name="FavoriteContent" component={FavoriteContentScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
