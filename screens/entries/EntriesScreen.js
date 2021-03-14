import React from 'react';
import styled from 'styled-components';

const EntriesScreen = () => {
  return (
    <Container>
      <Text>This is the Entries screen</Text>
    </Container>
  );
};

export default EntriesScreen;

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Text = styled.Text``;
