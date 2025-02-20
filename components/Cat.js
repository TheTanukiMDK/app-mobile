import { useState } from 'react';
import { View, Button, Text } from 'react-native';

export default function Cat({ name }) {
    const [isHungry, setIsHungry] = useState(true);
    return (
        <View>
            <Text>Hola, Soy el michi: {name} 😽!</Text>
            <Button
                onPress={() => {
                    setIsHungry(false);
                }}
                disabled={!isHungry}
                title={isHungry ? 'Dame comidaaa!' : 'Gracias!'}
            />
        </View>
    );
};