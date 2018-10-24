import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Button } from 'native-base';

class Login extends Component {

    static navigationOptions = {
        header: null
    }

    render() {
        return (
            <Container style={styles.Containers}>
                <Image
                    source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfZWMEIdh8BFuywPIgCOs4Y2Nc_HqgHoyVZU01jrU37WC7qqG0' }}
                    style={styles.logo}
                />
                <Form  style={{marginHorizontal : 20 , justifyContent :'space-evenly'}}>
                    <Item  rounded style ={styles.Input} >
                        <Input placeholder="Username"  />
                    </Item>
                    <Item  rounded style ={styles.Input} >
                        <Input placeholder="Password" />
                    </Item>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
                        <Button rounded
                            style={[styles.buttonTexts, styles.button]}
                        >
                            <Text >Sign in</Text>
                        </Button>
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <Text style={{justifyContent:'center'}}>Forgot Password ?</Text>
                    </TouchableOpacity>
                   
                </Form>
            </Container>
        )
    }

}


const styles = StyleSheet.create({

    logo: {
        //alignContent :'center',
        alignSelf: 'center',
        width: 180,
        height: 200,
        marginBottom : 50,
    },

    Containers: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        backgroundColor : 'steelblue' ,
        

    },
    Input: {
        alignSelf: 'center',
        width: 300,
        backgroundColor : 'white' ,
        marginBottom : 10 , 
        backgroundColor : 'red', 
    },
    buttonTexts: {
        fontSize: 23,
        fontWeight: '500',
        color: 'white',
        textAlign: 'center',
        alignSelf: 'center',
        justifyContent : 'center'
    },
    button: {
        width: 300,
        height : 50 ,
        backgroundColor: '#B3E5FC',
        borderRadius: 25,
        paddingVertical: 13,
        marginVertical: 10,
        alignSelf: 'center',
        textAlign: 'center',
        marginBottom : 5 ,

    }
})

export default Login;