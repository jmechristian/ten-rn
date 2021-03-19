import React from 'react';
import styled from 'styled-components';

const SelfishScreen = ({ navigation }) => {
  return (
    <Container>
      <Title>Selfish</Title>
      <Button onPress={() => navigation.push('dishonest')}>
        <ButtonText>NEXT</ButtonText>
      </Button>
      <Button onPress={() => navigation.pop()}>
        <ButtonText>BACK</ButtonText>
      </Button>
    </Container>
  );
};

export default SelfishScreen;

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Title = styled.Text``;

const Button = styled.TouchableOpacity``;
const ButtonText = styled.Text``;
