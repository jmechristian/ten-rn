import React from 'react';
import styled from 'styled-components';

const DishonestScreen = ({ navigation }) => {
  return (
    <Container>
      <Text>This is the Dishonest screen</Text>
      <Button
        onPress={() => navigation.push('Obsessing')}
        title='To Obsessing'
      />
    </Container>
  );
};

export default DishonestScreen;

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Text = styled.Text``;

const Button = styled.Button``;
