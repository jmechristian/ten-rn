import React from 'react';
import styled from 'styled-components';

const ObsessingScreen = ({ navigation }) => {
  return (
    <Container>
      <Text>This is the Obsessing screen</Text>
      <Button onPress={() => navigation.push('Secrets')} title='To Secrets' />
    </Container>
  );
};

export default ObsessingScreen;

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Text = styled.Text``;

const Button = styled.Button``;
