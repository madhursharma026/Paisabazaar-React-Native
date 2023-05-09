import { StyleSheet, Image, Text, View, TouchableOpacity, TouchableHighlight } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Login'
import Homepage from './Homepage'
import FirstPage from './FirstPage'


export default function App() {
  const Stack = createStackNavigator();

  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="FirstPage" component={FirstPage} options={{ headerShown: false }} />
          <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
          <Stack.Screen name="Homepage" component={Homepage} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    alignItems: 'center',
  },
  mainHeading: {
    fontWeight: 700,
    fontSize: 20,
    marginTop: 5,
  },
  subHeading: {
    maxWidth: 300,
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 15,
    fontSize: 15,
    marginTop: 5,
    color: 'gray',
  },
  buttonOutside: {
    backgroundColor: '#D2493D',
    padding: 8,
    borderRadius: 5,
    width: '85%',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonInside: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
  },
  hrStyle: {
    marginTop: 20,
    flex: 1,
    height: 1,
    backgroundColor: 'gray',
  },
  link: {
    color: 'blue',
    marginTop: 20,
  },
  containerBottom: {
    padding: 35,
  },
});
