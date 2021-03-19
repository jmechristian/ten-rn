import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import { updateValue } from '../../store/actions/form';

const ResentfulScreen = ({ navigation }) => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  const formState = useSelector((state) => state.form);
  const { formData } = formState;

  useEffect(() => {
    setText(formData.selfish);
  }, []);

  const submitAndMoveForward = () => {
    dispatch(updateValue('selfish', text));
    navigation.push('dishonest');
  };

  const submitAndMoveBack = () => {
    dispatch(updateValue('selfish', text));
    navigation.goBack();
  };

  return (
    <Container>
      <Title>Was I Selfish?</Title>
      <TextInput onChangeText={setText} defaultValue={formData.selfish} />
      <Button onPress={submitAndMoveForward}>
        <ButtonText>NEXT</ButtonText>
      </Button>
      <Button onPress={submitAndMoveBack}>
        <ButtonText>BACK</ButtonText>
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

const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
`;

const TextInput = styled.TextInput`
  border: 1px solid black;
  width: 200px;
  height: 50px;
  margin-top: 18px;
  padding-left: 12px;
`;

const Button = styled.TouchableOpacity`
  background-color: black;
  width: 200px;
  height: 50px;
  justify-content: center;
  align-items: center;
  margin-top: 24px;
`;
const ButtonText = styled.Text`
  color: white;
`;
