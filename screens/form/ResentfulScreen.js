import React from 'react';
import styled from 'styled-components';

const ResentfulScreen = ({ navigation }) => {
  return (
    <Container>
      <Text>This is the Resentful screen</Text>
      <Button onPress={() => navigation.push('Fearful')} title='To Fearful' />
    </Container>
  );
};

export default ResentfulScreen;

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Text = styled.Text``;

const Button = styled.Button``;
