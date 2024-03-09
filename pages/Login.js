import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Animatable from 'react-native-animatable';

const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: #f9f9f9;
`;

const Content = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding-horizontal: 20px;
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const StyledTextInput = styled(TextInput)`
  width: 100%;
  height: 50px;
  border-radius: 10px;
  border-width: 1px;
  padding: 10px;
  margin-bottom: 20px;
`;

const StyledButton = styled(TouchableOpacity)`
  width: 100%;
  height: 50px;
  border-radius: 10px;
  background-color: #007bff;
  justify-content: center;
  align-items: center;
`;

const ButtonText = styled.Text`
  color: #ffffff;
  font-size: 18px;
  font-weight: bold;
`;

const RegisterLink = styled(Animatable.Text)`
  margin-top: 20px;
  color: #007bff;
  font-size: 16px;
`;

function LoginScreen({ navigation }) {
  return (
    <Container>
      <Content>
        <Title>Iniciar Sesión</Title>
        <StyledTextInput placeholder="Email" />
        <StyledTextInput placeholder="Contraseña" secureTextEntry />
        <StyledButton onPress={() => {}} animation="bounceIn" duration={1000}>
          <ButtonText>Iniciar Sesión</ButtonText>
        </StyledButton>
        <RegisterLink animation="fadeIn" delay={500} onPress={() => navigation.navigate('Register')}>
          ¿No tienes cuenta? Regístrate aquí
        </RegisterLink>
      </Content>
    </Container>
  );
}

export default LoginScreen;
