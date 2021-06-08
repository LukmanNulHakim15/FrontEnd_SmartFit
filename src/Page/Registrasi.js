import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput, ScrollView, Platform, Button, Image, FlatList, TouchableOpacity, Dimensions} from 'react-native'
import { connect } from 'react-redux'
import ImagePicker from 'react-native-image-picker';
// import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
// import * as ImagePicker from 'expo-image-picker';
// import { Picker } from '@react-native-picker/picker';
// import {ActionSheet, Root} from "native-base";

    const options ={
        title: 'my pic app',
        takePhotoButtonTitle: 'Take Photo with Your Camera',
        chooseFromLibraryButtonTitle: 'choose photo from library',

    }
 class Registrasi extends Component  {
    
    constructor (props){
        super(props);
        this.state={
            avatarSource:null,
             nama:"",
             tempat:"",
             ttl:"",
             tinggiBadan:"",
             beratBadanAwal:"",
             hp:"",
             email:"",
             username:"",
             password:"",
             image:null,
        }
    }

    // componentDidMount(){
    //     this.getPermission()
    // }

    // async getPermission(){
    //     if (Platform.OS !== 'web') {
    //         const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    //         console.log(status)
    //         if (status !== 'granted') {
    //           alert('Sorry, we need camera roll permissions to make this work!');
    //         }
    //       }
    // }

    // async pickImage(){
    //     let result = await ImagePicker.launchImageLibraryAsync({
    //         mediaTypes: ImagePicker.MediaTypeOptions.All,
    //         allowsEditing: true,
    //         aspect: [4, 3],
    //         quality: 1,
    //       });
      
    //       console.log(result);
      
    //       if (!result.cancelled) {
    //           console.log(result.uri)
    //        this.setState({image:result.uri})
    //       }
    // }

   
    myfun=()=>{
        //alert('clicked');
      
        ImagePicker.showImagePicker(options, (response) => {
          console.log('Response = ', response);
      
          if (response.didCancel) {
            console.log('User cancelled image picker');
          }
          else if (response.error) {
            console.log('Image Picker Error: ', response.error);
          }
      
          else {
            let source = { uri: response.uri };
      
            // You can also display the image using data:
            // let source = { uri: 'data:image/jpeg;base64,' + response.data };
      
            this.setState({
              avatarSource: source,
             // pic:response.data
            });
          }
        });
      }

    render() {
      
        return (
           
            <ScrollView> 
                <Text> Nama </Text>
                <TextInput 
                style={styles.input}
                onChangeText={(data)=>{this.setState({nama:data})}}
                placeholder="Nama"
                />

                <Text> Tempat Lahir </Text>
                <TextInput 
                style={styles.input}
                onChangeText={(data)=>{this.setState({tempat:data})}}
                placeholder="Tempat Lahir"
                />

                <Text> Tanggal Bulan dan Tahun  </Text>
                <TextInput 
                style={styles.input}
                onChangeText={(data)=>{this.setState({ttl:data})}}
                placeholder="Tanggal Bulan dan Tahun"
                />

                <Text> Tinggi Badan </Text>
                <TextInput 
                style={styles.input}
                onChangeText={(data)=>{this.setState({tinggiBadan:data})}}
                placeholder="Tinggi Badan"
                />

                <Text> Berat Badan </Text>
                <TextInput 
                style={styles.input}
                onChangeText={(data)=>{this.setState({beratBadanAwal:data})}}
                placeholder="Berat Badan Saat Ini"
                />

                <Text> No Hp </Text>
                <TextInput 
                style={styles.input}
                onChangeText={(data)=>{this.setState({hp:data})}}
                placeholder="Number HandPhone"
                />

                <Text> Email </Text>
                <TextInput 
                style={styles.input}
                onChangeText={(data)=>{this.setState({email:data})}}
                placeholder="Email"
                />

                <Text> Username </Text>
                <TextInput 
                style={styles.input}
                onChangeText={(data)=>{this.setState({username:data})}}
                placeholder="Username"
                />

                <Text> Password </Text>
                <TextInput 
                style={styles.input}
                onChangeText={(data)=>{this.setState({tempat:data})}}
                placeholder="Tempat"
                />

                <Text> Gambar </Text>
                <TouchableOpacity style={{backgroundColor:'green', margin:10,padding: 10}} onPress={this.myfun}>
                    <Text style={{backgroundColor:'#fff'}}> Select Image</Text>
                </TouchableOpacity>
                

                {/* <Button title="Pick an image from camera roll" onPress={()=>{this.pickImage}} />
                <Image source={{ uri: this.state.image }} style={{ width: 200, height: 200 }} /> */}

            </ScrollView>
          
            
            ) 
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Registrasi)
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