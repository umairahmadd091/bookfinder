import React,{Component} from 'react';
import { View, Text, TextInput, StyleSheet, FlatList } from 'react-native';

import {Cards} from '../Components/card';

export class Home extends Component {
 
  state={
    data: null
  }

  Findbook(text) {
        fetch('https://www.googleapis.com/books/v1/volumes?q='+text, {
            "method": "GET"
    })

    .then(data=>
      data.json()
    )
    
    .then(data2=>{
        this.setState({
          data: data2.items
        })
        
    })
    .catch(err => {
        console.log(err);
    });
}

render(){
  return (
    <View style={{flex:1,backgroundColor:'#C2D997'}}>
      <TextInput
      style={styles.input}
      onChangeText={text => this.Findbook(text)}
      placeholder='Enter Book Name'
    />

    <FlatList
    data={this.state.data}
    renderItem={({item})=>
  <Cards title={item.volumeInfo.title} subtitle={item.volumeInfo.publisher}
  imguri={item.volumeInfo.imageLinks.thumbnail}
  onclick={()=> {this.props.navigation.navigate('Detailscreen',{
    Data : item
  })
}
  }
  />
  }
  />
    </View>
  );
}
}


const styles = StyleSheet.create({
  input:{
    height: 45,
    borderColor: 'black',
    borderWidth: 1,
    backgroundColor: 'white',
    marginVertical:10
  }
})