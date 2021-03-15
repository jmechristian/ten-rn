import React from 'react';
import styled from 'styled-components';

const HarmScreen = ({ navigation }) => {
  return (
    <Container>
      <Text>This is the Harm screen</Text>
      <Button onPress={() => navigation.push('Kind')} title='To Kind' />
    </Container>
  );
};

export default HarmScreen;

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Text = styled.Text``;

const Button = styled.Button``;
