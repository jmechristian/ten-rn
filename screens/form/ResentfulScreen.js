import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import { updateValue } from '../../store/actions/form';

const ResentfulScreen = ({ navigation }) => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  const formState = useSelector((state) => state.form);
  const { formData } = formState;

  const submitAndMoveForward = () => {
    dispatch(updateValue('resentful', text));
    navigation.push('selfish');
  };

  return (
    <ImageBack source={require('../../assets/card-back.png')}>
      <SafeArea>
        <Title>Was I Resentful?</Title>
        <TextInput
          onChangeText={setText}
          defaultValue={formData.resentful}
          multiline={true}
          numberOfLines={6}
          placeholder='Enter Text...'
        />
        <Button onPress={submitAndMoveForward}>
          <ButtonText>NEXT&#8594;</ButtonText>
        </Button>
      </SafeArea>
    </ImageBack>
  );
};

export default ResentfulScreen;

const ImageBack = styled.ImageBackground`
  flex: 1;
  width: 100%;
`;

const SafeArea = styled.SafeAreaView`
  flex: 1;
  justify-content: flex-end;
`;

const Title = styled.Text`
  font-size: 116px;
  line-height: 90px;
  font-weight: bold;
  font-family: 'Frunchy';
  position: absolute;
  top: 125px;
  left: 31px;
`;

const TextInput = styled.TextInput`
  width: 320px;
  position: absolute;
  top: 400px;
  left: 31px;
  font-size: 24px;
`;

const Button = styled.TouchableOpacity`
  background-color: black;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80px;
`;

const ButtonText = styled.Text`
  color: white;
  font-size: 18px;
  font-weight: bold;
  letter-spacing: 8px;
`;
