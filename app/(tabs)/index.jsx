import { View, Text, StyleSheet, ImageBackground } from 'react-native'
import Dashboardbg from "@/assets/images/gradient.png"
import React from 'react'

const app = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={Dashboardbg} resizeMode="cover" style={styles.image}> 
      <Text style={styles.text}>TrueMe</Text>
      </ImageBackground>
    </View>
  )
}

export default app

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  text: {
    color: 'black',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
  },
})

//