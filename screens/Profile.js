import React from 'react'
import { View, Text, StatusBar, TouchableOpacity, TextInput, Button } from 'react-native'
import Icon  from 'react-native-vector-icons/MaterialCommunityIcons';
import { theme } from "../utils";
export default function Profile({navigation}) {
   return (
      <React.Fragment>
         <StatusBar style="auto" />
         <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          flex: 1,
          paddingTop: 20,
          padding: 20,
        }}        
      >
         <Text style={{ fontSize: 22, color: theme.colors.foreground }}>
          Profile Info
        </Text>
        <Text style={{ fontSize: 14, color: theme.colors.text, marginTop: 20 }}>
          Please provide your name and an optional profile photo
        </Text>
        <TouchableOpacity
          style={{
            marginTop: 30,
            borderRadius: 120,
            width: 120,
            height: 120,
            backgroundColor: theme.colors.background,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
           <Icon name='camera-plus' size={45}/>
        </TouchableOpacity>
        <TextInput
          placeholder="Type your name"
          style={{
            borderBottomColor: theme.colors.primary,
            marginTop: 40,
            borderBottomWidth: 2,
            width: "100%",
          }}
        />
        <View style={{ marginTop: "auto", width: 80 }}>
          <Button
            title="Next"
            color={theme.colors.secondary}
            onPress={()=> navigation.navigate('home')}
          />
        </View>
      </View>
      </React.Fragment>
   )
}
