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
        marginTop: 80,
        marginBottom: 50,
        height: 200,
        width: 200,
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
    },
    btnlogout: {
      margin: 20,
      paddingVertical: 7,
      paddingHorizontal: 12,
      borderRadius: 20,
      flexDirection: 'row',
      borderWidth: 1,
      borderColor: MyTheme.colors.white,
    },
    txtlogout: {
        fontSize: 18,
        color: MyTheme.colors.white, 
    },
});