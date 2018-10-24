import React , {Component} from 'react';
import {View , Text } from 'react-native';

class Sports extends Component {

    
    constructor(props){
        super(props);
        this.state = {

        }
    }
    
    static navigationOptions = {
        header : null 
    }

    render(){
        return(
            <View>
                <Text>Sports</Text>
            </View>
        )
    }
}

export default Sports ;