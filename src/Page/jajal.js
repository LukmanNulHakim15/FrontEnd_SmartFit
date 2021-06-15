// import { Image } from 'native-base'
import React, { useState } from 'react'
import { Text, View, Button, Image, ScrollView, TextInput, StyleSheet} from 'react-native'
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
            <ScrollView>
                    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                        {image && <Image source={{uri:image}} style={{width:200, height:200}}/>}
                        <Button title="Click to pick an image from camera roll" onPress={pickImage}/>
                        
                        
                    </View>

                    <Text> Nama </Text>
                <TextInput 
                style={styles.input}
                onChangeText={(data)=>{}}
                placeholder="Nama"
                />

                <Text> Tempat Lahir </Text>
                <TextInput 
                style={styles.input}
                onChangeText={(data)=>{}}
                placeholder="Tempat Lahir"
                />

                <Text> Tanggal Bulan dan Tahun  </Text>
                <TextInput 
                style={styles.input}
                onChangeText={(data)=>{}}
                placeholder="Tanggal Bulan dan Tahun"
                />

                <Text> Tinggi Badan </Text>
                <TextInput 
                style={styles.input}
                onChangeText={(data)=>{}}
                placeholder="Tinggi Badan"
                />

                <Text> Berat Badan </Text>
                <TextInput 
                style={styles.input}
                onChangeText={(data)=>{}}
                placeholder="Berat Badan Saat Ini"
                />

                <Text> No Hp </Text>
                <TextInput 
                style={styles.input}
                onChangeText={(data)=>{}}
                placeholder="Number HandPhone"
                />

                <Text> Email </Text>
                <TextInput 
                style={styles.input}
                onChangeText={(data)=>{}}
                placeholder="Email"
                />

                <Text> Username </Text>
                <TextInput 
                style={styles.input}
                onChangeText={(data)=>{}}
                placeholder="Username"
                />

                <Text> Password </Text>
                <TextInput 
                style={styles.input}
                onChangeText={(data)=>{}}
                placeholder="Tempat"
                />

            
            
            </ScrollView>
        )
    }

    const styles = StyleSheet.create({
        input: {
            height: 40,
            margin: 12,
            borderWidth: 1,
          },
    
          button: {
            alignItems: "center",
            backgroundColor: "#DDDDDD",
            padding: 10,
          },
    
    });
