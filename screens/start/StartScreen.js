import React from 'react';
import styled from 'styled-components';

const StartScreen = () => {
  return (
    <Container>
      <Text>This is the start screen</Text>
    </Container>
  );
};

export default StartScreen;

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Text = styled.Text``;
