import React , {Component} from 'react';
import {View , Text  , Button} from 'react-native';

class Home extends Component {

  
    constructor(props){
        super(props);
        this.state = {

        }
    }
    
    static navigationOptions = ({navigation}) => {
        return {
            header : null 
        }
    }

    render(){
        return(
            <View>
                <Text >Home</Text>
                <Button title= "Login" onPress= {() =>  this.props.navigation.navigate('Login')} />
            </View>
        )
    }
}

export default Home ;