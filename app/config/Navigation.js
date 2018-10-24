import {createStackNavigator , createBottomTabNavigator} from 'react-navigation';

import SplashScreen from '../screens/SplashScreen';
import Home from '../screens/Home';
import News from '../screens/News';
import Sports from '../screens/Sports';
import Events from '../screens/Events';
import Login from '../screens/Login'
import App from '../../App';


const AppNav = createStackNavigator({

    Login : {
        screen : Login
    },
       /* SplashScreen : {
            screen : SplashScreen 
        },*/

        Home : createBottomTabNavigator({

            Home : {
                screen : Home ,
            
            } ,
            News : {
                screen : News ,

            },
            Sports :{
                screen : Sports , 

            },
            Events :{
                screen :Events , 
            }
        }),
      

    }
);

export default AppNav;