import React from 'react';
import styled from 'styled-components';

const ResentfulScreen = ({ navigation }) => {
  return (
    <Container>
      <Title>Resentful</Title>
      <Button onPress={() => navigation.push('selfish')}>
        <ButtonText>NEXT</ButtonText>
      </Button>
    </Container>
  );
};

export default ResentfulScreen;

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Title = styled.Text``;

const Button = styled.TouchableOpacity``;
const ButtonText = styled.Text``;
