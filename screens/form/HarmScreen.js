import React from 'react';
import styled from 'styled-components';

const HarmScreen = ({ navigation }) => {
  return (
    <Container>
      <Title>Harm</Title>
      <Button onPress={() => navigation.push('act')}>
        <ButtonText>NEXT</ButtonText>
      </Button>
      <Button onPress={() => navigation.pop()}>
        <ButtonText>BACK</ButtonText>
      </Button>
    </Container>
  );
};

export default HarmScreen;

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Title = styled.Text``;

const Button = styled.TouchableOpacity``;
const ButtonText = styled.Text``;
