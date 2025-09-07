import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Idcreated = () => {
  const navigation = useNavigation()

  return (
    <View className='flex-1 justify-center items-center'>
      <TouchableOpacity onPress={()=>{navigation.navigate("HomeDrawer")}} className='bg-blue-500 py-2 px-1'>
        <Text className='text-tertiarywhite font-Quicksandregular p-5'>Go to home section</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Idcreated