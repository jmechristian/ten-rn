import React from 'react';
import styled from 'styled-components';

import LoginModal from '../../components/auth/LoginModal';

const LoginScreen = ({ navigation }) => {
  return (
    <ImageBack source={require('../../assets/login-back.png')}>
      <LoginModal
        login={() => navigation.push('Start')}
        signup={() => navigation.push('Signup')}
      />
    </ImageBack>
  );
};

export default LoginScreen;

const ImageBack = styled.ImageBackground`
  flex: 1;
  width: 100%;
`;

const Text = styled.Text``;

const Button = styled.Button``;
