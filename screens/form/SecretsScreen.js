import React from 'react';
import styled from 'styled-components';

const SecretsScreen = ({ navigation }) => {
  return (
    <Container>
      <Title>Secrets</Title>
      <Button onPress={() => navigation.push('harm')}>
        <ButtonText>NEXT</ButtonText>
      </Button>
      <Button onPress={() => navigation.pop()}>
        <ButtonText>BACK</ButtonText>
      </Button>
    </Container>
  );
};

export default SecretsScreen;

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Title = styled.Text``;

const Button = styled.TouchableOpacity``;
const ButtonText = styled.Text``;
