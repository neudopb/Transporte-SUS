import { StyleSheet } from 'react-native';

export default StyleSheet.create({
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