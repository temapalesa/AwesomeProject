import React , {Component} from 'react';
import {View , Text } from 'react-native';

class News extends Component {
    
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
                <Text>News</Text>
            </View>
        )
    }
}

export default News ;