import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#d8d8d8',
      alignItems: 'center',
      justifyContent: 'center',
    },
    containerList: {
        flex: 1,
        paddingTop: 30 ,
        backgroundColor: '#d8d8d8',
        alignItems: 'center',
        justifyContent: 'flex-start',
      },
    title: {
      color: '#e0961d',
      fontSize: 24,
      fontWeight: 'bold',
      transform: [{translateY:-40}],
      textDecorationLine: 'underline',
    }
  });