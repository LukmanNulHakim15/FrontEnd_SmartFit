// import { Image } from 'native-base'
import React, { useState } from 'react'
import { Text, View, Button, Image} from 'react-native'
import * as ImagePicker from 'expo-image-picker';

export default function jajal()  {
    const [image, setImage] = useState(null); 

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes : ImagePicker.MediaTypeOptions.Images, 
            allowsEditing : true
        })

        if (!result.cancelled){
            setImage(result.uri)
        }
    }
    
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                {image && <Image source={{uri:image}} style={{width:200, height:200}}/>}
                <Button title="Click to pick an image from camera roll" onPress={pickImage}/>
                
                
            </View>
        )
    }

