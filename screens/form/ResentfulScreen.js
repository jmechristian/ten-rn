import React, { useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import * as formActions from '../../store/actions/form';

const ResentfulScreen = ({ navigation }) => {
  const [newResentment, updateResentment] = useState('');
  const dispatch = useDispatch();
  const formState = useSelector((state) => state.form.formData);
  const resentmentValue = formState.resentful;

  const saveValueAndMoveForward = () => {
    dispatch(formActions.updateValue('resentful', newResentment));
    navigation.push('Fearful');
  };

  return (
    <Container>
      <Text>This is the Resentful screen</Text>
      <TextInput onChangeText={updateResentment} value={newResentment} />
      <Button onPress={saveValueAndMoveForward} title='To Fearful' />
    </Container>
  );
};

export default ResentfulScreen;

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Text = styled.Text``;

const Button = styled.Button``;

const TextInput = styled.TextInput``;
