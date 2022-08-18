import React, {useRef, useState} from 'react';
import {Text, View} from 'react-native';
import {BotonCalc} from '../components/BotonCalc';
import {styles} from '../theme/appTheme';
import {useCalculadora} from '../hooks/useCalculadora';

export const CalculadoraScreen = () => {
  const {
    limpiar,
    armarNumero,
    btnDel,
    btnMultiplicar,
    btnRestar,
    btnSumar,
    btnDividir,
    calcular,
    positivoNegativo,
    numero,
    numeroAnterior
  } = useCalculadora();

  return (
    <View style={styles.calculadoraContainer}>
      {numeroAnterior !== '0' && (
        <Text style={styles.resultadoFloat}>{numeroAnterior}</Text>
      )}

      <Text style={styles.resultado} numberOfLines={1} adjustsFontSizeToFit>
        {numero}
      </Text>

      <View style={styles.fila}>
        <BotonCalc accion={limpiar} bgcolor="#9B9B9B" texto="c" />
        <BotonCalc accion={positivoNegativo} bgcolor="#9B9B9B" texto="+/-" />
        <BotonCalc accion={btnDel} bgcolor="#9B9B9B" texto="del" />
        <BotonCalc accion={btnDividir} bgcolor="#FF9427" texto="/" />
      </View>
      <View style={styles.fila}>
        <BotonCalc accion={armarNumero} texto="7" />
        <BotonCalc accion={armarNumero} texto="8" />
        <BotonCalc accion={armarNumero} texto="9" />
        <BotonCalc accion={btnMultiplicar} bgcolor="#FF9427" texto="X" />
      </View>
      <View style={styles.fila}>
        <BotonCalc accion={armarNumero} texto="4" />
        <BotonCalc accion={armarNumero} texto="5" />
        <BotonCalc accion={armarNumero} texto="6" />
        <BotonCalc accion={btnRestar} bgcolor="#FF9427" texto="-" />
      </View>
      <View style={styles.fila}>
        <BotonCalc accion={armarNumero} texto="1" />
        <BotonCalc accion={armarNumero} texto="2" />
        <BotonCalc accion={armarNumero} texto="3" />
        <BotonCalc accion={btnSumar} bgcolor="#FF9427" texto="+" />
      </View>
      <View style={styles.fila}>
        <BotonCalc accion={armarNumero} texto="0" ancho />
        <BotonCalc accion={armarNumero} texto="." />
        <BotonCalc accion={calcular} bgcolor="#FF9427" texto="=" />
      </View>
    </View>
  );
};
