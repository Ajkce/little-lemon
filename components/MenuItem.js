import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function MenuItem({ item }) {
  const { name, price, description, image } = item;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{name}</Text>
      <View style={styles.content}>
        <View>
          <Text style={styles.description}>{description}</Text>
          <Text style={styles.price}>{price}</Text>
        </View>
        <Image
        style={styles.image}
          source={{
            uri: `https://github.com/Meta-Mobile-Developer-PC/Working-With-Data-API/blob/main/images/${image}?raw=true`,
          }}
        ></Image>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {

    },
    content: {
        flexDirection: 'row'
    }

});
