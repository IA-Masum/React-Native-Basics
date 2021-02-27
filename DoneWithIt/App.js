import {StatusBar} from 'expo-status-bar';
import React, {useState} from 'react';
import {TextInput, Text, View} from 'react-native';

export default function App() {

    const [text, setText] = useState("");
    return (
        <View style={{paddingTop: 100, paddingLeft: 20}}>
            <TextInput
                style={{height: 40}}
                placeholder="Type Here To Translate"
                onChangeText={text => setText(text)}
                defaultText={text}
            />

            <Text
                style={{padding: 40, fontSize: 40}}
            >
                {text.split(" ").map(word => word && '🍕').join(" ")}
            </Text>
        </View>
    );
}

// const styles = StyleSheet.create({
//     container: {
//         backgroundColor: '#fff',
//         flexDirection: "row",
//         height: 100,
//         padding: 20
//     },
// });
