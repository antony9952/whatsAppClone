import React from 'react'
import { View, Text, Image, TextInput, Button, TouchableOpacity} from 'react-native'
import { theme } from "../utils";
export default function SignIn({navigation}) {
   return (
      <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        backgroundColor: theme.colors.white,
      }}
    >
        <Text
        style={{ color: theme.colors.foreground, fontSize: 24, marginBottom: 20 }}
      >
        Welcome to Whatsapp
      </Text>
      <Image
        source={require("../assets/welcome-img.png")}
        style={{ width: 180, height: 180 }}
        resizeMode="cover"
      />
      <View style={{ marginTop: 20 }}>
        <TextInput
          placeholder="Email"
          style={{
            borderBottomColor: theme.colors.primary,
            borderBottomWidth: 2,
            width: 200,
          }}
        />
        <TextInput
          placeholder="Password"
          secureTextEntry={true}
          style={{
            borderBottomColor: theme.colors.primary,
            borderBottomWidth: 2,
            width: 200,
            marginTop: 20,
          }}
        />
        <View style={{ marginTop: 20 }}>
          <Button
            title={"Sign Up"}
            color={theme.colors.secondary}
            onPress={()=> navigation.navigate('profile')}
          />
           <TouchableOpacity
          style={{ marginTop: 15 }}>
          <Text style={{ color: theme.colors.secondaryText }}>
           Already have an account? Sign in
          </Text>
          </TouchableOpacity>
        </View>
        </View>
       </View>
   )
}
