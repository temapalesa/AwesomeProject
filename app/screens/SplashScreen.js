import React, {Component} from 'react';
import {StyleSheet , Text , View ,Image } from  'react-native';

class SplashScreen extends Component {

    constructor(props){
        super(props);
        this.state = {

        }
    }
    
    static navigationOptions = {
        header : null 
    }
    componentDidMount(){
        setTimeout(() => {
            this.props.navigation.navigate('Home'); 
        },4000 ) 
    }

        render(){
            return(
                <View style={styles.Container}>
                        <Image 
                          source = {{uri : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfZWMEIdh8BFuywPIgCOs4Y2Nc_HqgHoyVZU01jrU37WC7qqG0'}}
                          style = {styles.picBackgrpund}
                        /> 
                        <Text >Palesa Tema</Text>
                </View>
            )
        }

}

const styles = StyleSheet.create({

    Container: {
      
        flex : 1 ,
        alignItems : 'center' ,
    

    },
    picBackgrpund : {
        width : 150 ,
        height :150,     
    }
    , 
});
export default SplashScreen;