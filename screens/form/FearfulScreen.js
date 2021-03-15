import React from 'react';
import styled from 'styled-components';

const FearfulScreen = ({ navigation }) => {
  return (
    <Container>
      <Text>This is the Fearful screen</Text>
      <Button onPress={() => navigation.push('Selfish')} title='To Selfish' />
    </Container>
  );
};

export default FearfulScreen;

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Text = styled.Text``;

const Button = styled.Button``;
