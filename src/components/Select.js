import React, {useEffect} from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import MyTheme from '../styles/MyTheme';
import { Picker } from '@react-native-picker/picker';
import { useForm, Controller } from 'react-hook-form';


export function Select({ datas, largura, label, control, setValue, value, name, error, ...rest }) {
    
    return (
        <View style={[styles.viewBtn, largura ? {width: largura}:'']}>
            <Text style={styles.txt}>{label}</Text>
            <Controller
                control={ control }
                render={({ field: { onChange, onBlur, value } }) => (
                    <TouchableOpacity style = {styles.inp}>
                        <Picker 
                            selectedValue = {value}
                            style = {{height:'100%', width:'100%'}}
                            onValueChange = {(itemValue) => setValue(name, itemValue)
                            
                        }>
                            <Picker.Item key={'unselectable'} disabled ={true} enabled = {false} label="Selecione uma opção" value='-1' />
                            {
                                datas.map(d => {
                                    return  <Picker.Item style={{fontSize: 18}}label={d.nome} value={d.id} key={d.id}/>
                                })
                            }
                        </Picker>
                    </TouchableOpacity>
                )}
                name={name}
            />
            { error && <Text style={styles.error}>{error}</Text> }
        </View>
    );
};

const styles = StyleSheet.create({
    viewBtn: {
        width: '100%',
        marginTop: 10,
    },
    inp: {
        height: 45,
        width: '100%',
        backgroundColor: MyTheme.colors.white,
        borderRadius: 10,
        fontSize: 18,
    },
    txt: {
        fontSize: 15,
        paddingLeft: 5,
        fontWeight: 'bold'
    },
    error: {
        fontSize: 15,
        paddingLeft: 5,
        color: 'red',
    },
});