import React from 'react';
import styled from 'styled-components';

const DishonestScreen = ({ navigation }) => {
  return (
    <Container>
      <Title>Dishonest</Title>
      <Button onPress={() => navigation.push('fearful')}>
        <ButtonText>NEXT</ButtonText>
      </Button>
      <Button onPress={() => navigation.pop()}>
        <ButtonText>BACK</ButtonText>
      </Button>
    </Container>
  );
};

export default DishonestScreen;

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Title = styled.Text``;

const Button = styled.TouchableOpacity``;
const ButtonText = styled.Text``;
