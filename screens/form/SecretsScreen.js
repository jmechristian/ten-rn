import React from 'react';
import styled from 'styled-components';

const SecretsScreen = ({ navigation }) => {
  return (
    <Container>
      <Text>This is the Secrets screen</Text>
      <Button onPress={() => navigation.push('Harm')} title='To Harm' />
    </Container>
  );
};

export default SecretsScreen;

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Text = styled.Text``;

const Button = styled.Button``;
