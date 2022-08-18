import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from '../theme/appTheme';

interface Props {
  texto: string;
  bgcolor?: string;
  ancho?: boolean;
  accion: ( numeroTexto:string ) => void;
}

export const BotonCalc = ({
  texto,
  bgcolor = '#2d2d2d',
  ancho = false,
  accion
}:Props) => {
  
  return (
    <TouchableOpacity
    onPress={() => accion(texto)}
        activeOpacity={0.6}>
      <View
        style={{
          ...styles.boton,
          backgroundColor: bgcolor,
          width: ancho ? 180 : 80
        }}>
        <Text
          style={{
            ...styles.botonTexto,
            color: bgcolor === '#9B9B9B' ? 'black' : 'white'
          }}>{texto}</Text>
      </View>
    </TouchableOpacity>
  )
}
