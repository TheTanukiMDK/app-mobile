import {Stack} from "expo-router"

const RootApp = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{
        headerTitle: "Personajes",
      }}  />
      <Stack.Screen name="charaters/[id]" options={{
        headerTitle: "Detalles",
      }}  />
    </Stack>
  );
}

export default RootApp;