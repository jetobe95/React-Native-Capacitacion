import { createStackNavigator } from 'react-navigation';

//Importando vistas
import LoginScreen from './../screens/Login/';
import RegisterScreen from './../screens/Register/';

const Navigator = createStackNavigator({
    Login: {
        screen: LoginScreen
    },
    Register: {
        screen: RegisterScreen
    },
});

export default Navigator;