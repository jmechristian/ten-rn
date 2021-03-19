import React from 'react';
import styled from 'styled-components';

const ObsessingScreen = ({ navigation }) => {
  return (
    <Container>
      <Title>Obsessing</Title>
      <Button onPress={() => navigation.push('secrets')}>
        <ButtonText>NEXT</ButtonText>
      </Button>
      <Button onPress={() => navigation.pop()}>
        <ButtonText>BACK</ButtonText>
      </Button>
    </Container>
  );
};

export default ObsessingScreen;

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Title = styled.Text``;

const Button = styled.TouchableOpacity``;
const ButtonText = styled.Text``;
