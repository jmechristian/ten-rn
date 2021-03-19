import React from 'react';
import styled from 'styled-components';

const FearfulScreen = ({ navigation }) => {
  return (
    <Container>
      <Title>Fearful</Title>
      <Button onPress={() => navigation.push('obsessing')}>
        <ButtonText>NEXT</ButtonText>
      </Button>
      <Button onPress={() => navigation.pop()}>
        <ButtonText>BACK</ButtonText>
      </Button>
    </Container>
  );
};

export default FearfulScreen;

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Title = styled.Text``;

const Button = styled.TouchableOpacity``;
const ButtonText = styled.Text``;
