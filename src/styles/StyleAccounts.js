import { StyleSheet } from 'react-native';
import MyTheme from './MyTheme';

export default StyleSheet.create({
    containerLogin: {
        flex: 1,
        backgroundColor: MyTheme.colors.background_gray,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    logo: {
        marginTop: 100,
    },
    txtAdm:{
      fontSize: 22,
      color: 'blue',
      textDecorationLine: 'underline',
    },
    btnAdm:{
      transform: [{translateY:80}],
    },

    containerRegister: {
      flex: 1,
      backgroundColor: MyTheme.colors.background_gray,
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      color: MyTheme.colors.primary_orange,
      fontSize: 24,
      fontWeight: 'bold',
      //transform: [{translateY:-40}],
      padding: 20,
      textDecorationLine: 'underline',
    },

    actInd: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }
});