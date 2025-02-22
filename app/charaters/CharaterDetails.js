import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

const CharacterDetails = () => {
  const { id } = useLocalSearchParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    if (id) {
      fetch(`https://rickandmortyapi.com/api/character/${id}`)
        .then((response) => response.json())
        .then((json) => setCharacter(json))
        .catch((error) => console.error(error));
    }
  }, [id]);

  if (!character) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={styles.container}>
      <Image source={{ uri: character.image }} style={styles.image} />
      <Text style={styles.name}>{character.name}</Text>
      <Text>Status: {character.status}</Text>
      <Text>Species: {character.species}</Text>
      <Text>Gender: {character.gender}</Text>
      <Text>Origin: {character.origin.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  name: {
    fontSize: 32,
    fontWeight: 'bold',
    marginVertical: 10,
  },
});

export default CharacterDetails;