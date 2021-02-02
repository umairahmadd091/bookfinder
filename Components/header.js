import React, { Component } from 'react';
import { Container, Header, Body, Right, Button, Text, Title } from 'native-base';

export class Headers extends Component {
  render() {
    return (
        
        <Header style={{backgroundColor:'#EF8D76'}}>
          <Body>
            <Title>Book Details</Title>
          </Body>
          <Right>
            <Button hasText transparent onPress={this.props.onclick}>
              <Text>Back</Text>
            </Button>
          </Right>
        </Header>
     
    );
  }
}