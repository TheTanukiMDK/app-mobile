import {Link} from "expo-router"
import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

export default function Card({ name, status, image }) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.cardContent}>
        <Text style={styles.name}>{name}</Text>
        <Text>{status}</Text>
        <Link href={`/${name}`}>Ver más</Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    alignItems: 'center',
    flexDirection: 'row',
  },
  cardContent: {
    marginLeft: 10,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
});