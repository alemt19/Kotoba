import { View, StyleSheet, Image , Pressable} from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';

interface InfoBtnProps {
    type : number;
}

export default function Button({ type }: InfoBtnProps) {

    const router = useRouter();

    const handlePress = () => {

        if(type === 1) {
            router.push({
                pathname: "/howToPlay",
              });
        } else {
            console.log("Ajustes")
        }
    };


    return(
        
        <Pressable onPress={handlePress}>
            <View>
                {type === 1 ? (
                    <Image style={styles.icon} source={require('@/assets/images/help.png')}></Image>
                ) : (
                    <Image style={styles.icon} source={require('@/assets/images/settings.png')}></Image>
                )}
                
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    icon: {
        height: 30,
        width: 30
    },
});