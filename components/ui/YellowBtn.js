import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function YellowBtn() {
  return (
    <Pressable style={styles.btn}>
        <Text style={styles.text}>Next</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    btn: {
        backgroundColor: '#F4CE14',
        width: 350,
        alignItems: 'center',
        padding: 10,
        borderRadius: 5
    },
    text: {
        fontSize: 20,
        fontWeight: '500',
        color: '#2f463d'
    }
})