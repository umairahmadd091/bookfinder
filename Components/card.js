import React,{Component} from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';


export class Cards extends Component {
 
render(){
  return (
    <TouchableOpacity onPress={this.props.onclick}>

      <View style={styles.main}>

        <View>
        <Image source={{uri: this.props.imguri != null ? this.props.imguri :  "'https://media.gettyimages.com/photos/stack-of-books-picture-id157482029?s=612x612'" }} 
        style={styles.img} />
        </View> 

        <View style={styles.txt}>
            <Text numberOfLines={2}
            style={styles.title}>{this.props.title}</Text>
            
            <Text numberOfLines={1}
             style={styles.subtitle}>{this.props.subtitle}</Text>
        </View>

      </View>

    </TouchableOpacity>
  );
}
}


const styles = StyleSheet.create({
    main:{
        flexDirection:'row',
        height:80,
        width: 360,
        shadowOffset:{
            height:3,
            width:3
        },
        shadowColor:'#ccc',
        shadowOpacity:0.9,
        backgroundColor:'#9AC6F8',
        marginVertical:2,
        borderRadius: 10
    },
    img:{
        height:80,
        width:76
    },
    txt:{
        margin:5,
        marginLeft:17,
        margin:10,
        paddingHorizontal:10,
        width:260
    },
    title:{
        fontWeight:'bold',
        fontSize:14,
        marginTop:4
    },
    subtitle:{
        fontSize:12
    }
  
})