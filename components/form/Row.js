import React, { useState } from 'react';
import styled from 'styled-components';

const Row = ({ title, initialValue, toggleSwitch }) => {
  const [switchValue, setSwitchValue] = useState(initialValue);
  const updateValue = () => {
    setSwitchValue((prevState) => !prevState);
    toggleSwitch(title, switchValue);
  };

  return (
    <Container borderBottomColor='#000000' borderBottomWidth='1'>
      <Title>{title}?</Title>
      <Switch
        trackColor={{ false: '#767577', true: '#81b0ff' }}
        thumbColor={initialValue ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor='#3e3e3e'
        onValueChange={updateValue}
        value={switchValue}
      />
    </Container>
  );
};

export default Row;

const Container = styled.View`
  width: 75%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 18px;
  padding-top: 18px;
`;

const Title = styled.Text`
  font-size: 16px;
`;

const Switch = styled.Switch``;
