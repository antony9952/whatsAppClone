import React from 'react'
import { View, Text } from 'react-native'

export default function Chats() {
   return (
      <View style={{ flex: 1, padding: 5, paddingRight: 10 }}>
        <ListItem
          type="chat"
          />
        <Text>
           Hello
        </Text>
      </View>
   )
}
