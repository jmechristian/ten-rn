import React from 'react';
import styled from 'styled-components';
import SignupModal from '../../components/auth/SignupModal';

const SignupScreen = ({ navigation }) => {
  return (
    <ImageBack source={require('../../assets/login-back.png')}>
      <SignupModal
        login={() => navigation.push('Start')}
        signup={() => navigation.push('Login')}
      />
    </ImageBack>
  );
};

export default SignupScreen;

const ImageBack = styled.ImageBackground`
  flex: 1;
  width: 100%;
`;

const Text = styled.Text``;

const Button = styled.Button``;
