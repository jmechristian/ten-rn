import React from 'react';
import styled from 'styled-components';

const LoginModal = ({ login, signup }) => {
  return (
    <Container>
      <Modal>
        <Logo source={require('../../assets/fake-logo.png')} />
        <TextInput placeholder='Email' />
        <TextInput placeholder='Password' />
        <ButtonView onPress={login}>
          <ButtonText>Log in</ButtonText>
        </ButtonView>
        <ButtonView onPress={signup}>
          <ButtonText>Signup</ButtonText>
        </ButtonView>
      </Modal>
    </Container>
  );
};

export default LoginModal;

const Container = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const TextInput = styled.TextInput`
  border: 1px solid #dbdfea;
  width: 295px;
  height: 44px;
  border-radius: 10px;
  font-size: 17px;
  color: #3c4560;
  padding-left: 44px;
  margin-top: 20px;
`;

const Modal = styled.View`
  width: 335px;
  height: 460px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.75);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  align-items: center;
`;

const Logo = styled.Image`
  width: 199px;
  height: 80px;
  margin-top: 40px;
  margin-bottom: 15px;
`;

const Text = styled.Text`
  margin-top: 20px;
  font-size: 13px;
  font-weight: 600;
  text-transform: uppercase;
  width: 160px;
  color: #b8bece;
  text-align: center;
`;

const ButtonView = styled.TouchableOpacity`
  background: #000000;
  width: 295px;
  height: 50px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin-top: 20px;
`;

const ButtonText = styled.Text`
  color: white;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 16px;
  letter-spacing: 6px;
`;
