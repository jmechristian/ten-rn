import React from 'react';
import styled from 'styled-components';

const ChecklistScreen = ({ navigation }) => {
  return (
    <Container>
      <Text>This is the Checklist screen</Text>
      <Button onPress={() => navigation.popToTop()} title='Submit' />
    </Container>
  );
};

export default ChecklistScreen;

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Text = styled.Text``;

const Button = styled.Button``;
