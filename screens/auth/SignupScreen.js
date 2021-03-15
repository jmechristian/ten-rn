import React from 'react';
import styled from 'styled-components';
import SignupModal from '../../components/auth/SignupModal';

const SignupScreen = ({ navigation }) => {
  return (
    <Container>
      <SignupModal
        login={() => navigation.push('Start')}
        signup={() => navigation.push('Login')}
      />
    </Container>
  );
};

export default SignupScreen;

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Text = styled.Text``;

const Button = styled.Button``;
