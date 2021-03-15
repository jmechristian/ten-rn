import React from 'react';
import styled from 'styled-components';

const KindScreen = ({ navigation }) => {
  return (
    <Container>
      <Text>This is the Kind screen</Text>
      <Button
        onPress={() => navigation.push('Checklist')}
        title='To Checklist'
      />
    </Container>
  );
};

export default KindScreen;

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Text = styled.Text``;

const Button = styled.Button``;
