import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import styled from 'styled-components/native';
import * as Animatable from 'react-native-animatable';

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #f9f9f9;
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const StyledTextInput = styled.TextInput`
  width: 80%;
  height: 50px;
  border-radius: 10px;
  border-width: 1px;
  padding: 10px;
  margin-bottom: 20px;
`;

const StyledButton = styled.Button`
  width: 80%;
`;

function RegisterScreen({ navigation }) {
  return (
    <Container>
      <Title>Registro</Title>
      <StyledTextInput placeholder="Nombre completo" />
      <StyledTextInput placeholder="Email" />
      <StyledTextInput placeholder="Contraseña" secureTextEntry />
      <StyledButton title="Registrarse" onPress={() => {/* Lógica para registrar */}} />
    </Container>
  );
}

export default RegisterScreen;
