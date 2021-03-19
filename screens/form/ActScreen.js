import React from 'react';
import styled from 'styled-components';

const ActScreen = ({ navigation }) => {
  return (
    <Container>
      <Title>Act</Title>
      <Button onPress={() => navigation.push('checklist')}>
        <ButtonText>NEXT</ButtonText>
      </Button>
      <Button onPress={() => navigation.pop()}>
        <ButtonText>BACK</ButtonText>
      </Button>
    </Container>
  );
};

export default ActScreen;

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Title = styled.Text``;

const Button = styled.TouchableOpacity``;
const ButtonText = styled.Text``;
