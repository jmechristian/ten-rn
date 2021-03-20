import React, { useState } from 'react';
import styled from 'styled-components';

const Row = ({ question, initialValue, toggleSwitch, title }) => {
  const [switchValue, setSwitchValue] = useState(initialValue);
  const updateValue = () => {
    setSwitchValue((prevState) => !prevState);
    toggleSwitch(title, switchValue);
  };

  return (
    <Container>
      <Title>{question}?</Title>
      <Switch
        trackColor={{ false: '#ffffff', true: '#000000' }}
        thumbColor={!initialValue ? '#000000' : '#ffffff'}
        onValueChange={updateValue}
        value={switchValue}
      />
    </Container>
  );
};

export default Row;

const Container = styled.View`
  flex-direction: column;
  align-items: center;
  padding-bottom: 18px;
  padding-top: 18px;
  margin: 0 18px;
  width: 40%;
`;

const Title = styled.Text`
  font-size: 16px;
  margin-bottom: 8px;
`;

const Switch = styled.Switch``;
