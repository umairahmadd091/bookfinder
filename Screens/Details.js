import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native';

import {Headers} from '../Components/header';

export function Detailscreen ({ route, navigation }) {

   const {Data} = route.params;
  return (
    
    <View style={styles.main}>

        <Headers onclick={()=> navigation.navigate('Home')} />    

        <ScrollView>        
        <View style={styles.container}>
        <Image source={{uri: Data.volumeInfo.imageLinks.thumbnail != null ? 
        Data.volumeInfo.imageLinks.thumbnail :  "'https://media.gettyimages.com/photos/stack-of-books-picture-id157482029?s=612x612'" }} 
        style={styles.img} />

        <View style={styles.txt}>
        <Text style={styles.title}>{Data.volumeInfo.title}</Text>
        </View>
        
        <Text numberOfLines={10} style={styles.description}>
            {Data.volumeInfo.description != null ? Data.volumeInfo.description : "No Description"}  
        </Text>
        
        <View style={styles.txt}>
        <Text style={{...styles.title,fontSize:18}}>Publisher: {Data.volumeInfo.publisher}</Text>
        </View>

        <View style={{...styles.txt,marginTop:5}}>
        <Text style={{...styles.title,fontSize:18}}>Publish Date: {Data.volumeInfo.publishedDate}</Text>
        </View>

        <View style={{...styles.txt,marginTop:5}}>
        <Text style={{...styles.title,fontSize:18}}>Total Pages: {Data.volumeInfo.pageCount}</Text>
        </View>

        <View style={{...styles.txt,marginTop:5}}>
        <Text style={{...styles.title,fontSize:18}}>Average Rating: {Data.volumeInfo.averageRating}</Text>
        </View>

       
        <TouchableOpacity style={styles.Btn} 
        onPress={()=> Linking.openURL(Data.volumeInfo.previewLink)}>
            <Text style={{...styles.title, textAlign:'center'}}>Preview Book</Text>
        </TouchableOpacity>
       
        </View>
        </ScrollView>
        </View>
  );
}



const styles = StyleSheet.create({
  main:{
      flex:1,
      backgroundColor:'#C2D997'
    },
    img:{
        height:230,
        width:340
    },
    container:{
        margin:10,
        marginTop:5
    },
    title:{
        fontSize:20,
        fontWeight:'bold',
        color: 'white',
        padding:5
    },
    txt:{
        backgroundColor:'#3055A2',
        paddingHorizontal:8,
        borderRadius:5
    },
    description:{
        padding:5,
        paddingHorizontal:15,
        fontSize:15
    },
    Btn:{
        backgroundColor:'#EF8D76',
        borderRadius:20,
        marginHorizontal:40,
        marginTop:5

    }
})