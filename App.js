import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from './screens/SignIn';
import Profile from './screens/Profile';
import Chats from './screens/Chat';
import Photo from './screens/Photo';
import { theme } from "./utils";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";


const Stack = createNativeStackNavigator();
const Tab = createMaterialTopTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Group screenOptions={{ headerShown: false }}>
        <Stack.Screen name="signIn" component={SignIn} />
        <Stack.Screen name="profile"
        component={Profile}
      />
      </Stack.Group>
      <Stack.Group screenOptions={{
            headerStyle: {
              backgroundColor: theme.colors.foreground,
              shadowOpacity: 0,
              elevation: 0,
            },
            headerTintColor: theme.colors.white,
          }}>
        <Stack.Screen name="home" component={Home} 
        options={{title:"WhatsApp"}}/>
      </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function Home(){
 return(
   <Tab.Navigator screenOptions={{tabBarShowIcon: true,
    tabBarLabelStyle: {
      color: theme.colors.white,
    },
    tabBarIndicatorStyle: {
      backgroundColor: theme.colors.white,
    },
    tabBarStyle: {
      backgroundColor: theme.colors.foreground,
    }}}>
     <Tab.Screen name="photo" component={Photo} />
      <Tab.Screen name="chats" component={Chats} />
   </Tab.Navigator>
 )
}
export default App;