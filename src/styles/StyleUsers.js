import { StyleSheet } from 'react-native';
import MyTheme from './MyTheme';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 30,
        backgroundColor: MyTheme.colors.background_gray,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    logo: {
        height: 180,
        width: 180,
    },
    viewBtn: {
        flex: 1,
        width: '100%',
        paddingTop: 70,
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: MyTheme.colors.gray2,
    },
    viewSep: {
        height: 40,
    },

    containerAgendar: {
        flex: 1,
        backgroundColor: '#d8d8d8',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
    color: '#e0961d',
    fontSize: 24,
    fontWeight: 'bold',
    transform: [{translateY:-40}],
    textDecorationLine: 'underline',
    },
});