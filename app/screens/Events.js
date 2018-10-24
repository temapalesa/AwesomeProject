import React , {Component} from 'react';
import {View , Text } from 'react-native';

class Events extends Component {

    
    constructor(props){
        super(props);
        this.state = {

        }
    }
    
    static navigationOptions = {
      headerMode : 'none'
    }

    render(){
        return(
            <View>
                <Text>Events</Text>
            </View>
        )
    }
}

export default Events ;