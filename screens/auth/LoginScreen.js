import React from 'react';
import styled from 'styled-components';

import LoginModal from '../../components/auth/LoginModal';

const LoginScreen = ({ navigation }) => {
  return (
    <Container>
      <LoginModal
        login={() => navigation.push('Start')}
        signup={() => navigation.push('Signup')}
      />
    </Container>
  );
};

export default LoginScreen;

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Text = styled.Text``;

const Button = styled.Button``;
