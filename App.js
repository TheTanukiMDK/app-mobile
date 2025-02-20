import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaProvider,SafeAreaView } from 'react-native-safe-area-context';
//import Cat from './components/Cat'
import { useEffect, useState } from 'react';
export default function App() {
  const [data,setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((json) => setData(json))
    .catch((error) => console.error
    (error
    ));
  }, []);
  return (
    <>
      <SafeAreaProvider>
        <SafeAreaView>
          <FlatList data={data}
          keyExtractor={item => item.id.toString()}
          >
          </FlatList>
        </SafeAreaView>
      </SafeAreaProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
