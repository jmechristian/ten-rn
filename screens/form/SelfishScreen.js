import React from 'react';
import styled from 'styled-components';

const SelfishScreen = ({ navigation }) => {
  return (
    <Container>
      <Text>This is the Selfish screen</Text>
      <Button
        onPress={() => navigation.push('Dishonest')}
        title='To Dishonest'
      />
    </Container>
  );
};

export default SelfishScreen;

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Text = styled.Text``;

const Button = styled.Button``;
