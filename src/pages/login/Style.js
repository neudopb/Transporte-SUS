import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#d8d8d8',
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
});