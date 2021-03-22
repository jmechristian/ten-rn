import React, { useState, useEffect } from 'react';
import { TouchableWithoutFeedback, Keyboard } from 'react-native';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import { updateValue } from '../../store/actions/form';

const SecretsScreen = ({ navigation }) => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  const formState = useSelector((state) => state.form);
  const { formData } = formState;

  useEffect(() => {
    setText(formData.secrets);
  }, []);

  const submitAndMoveForward = () => {
    dispatch(updateValue('secrets', text));
    navigation.push('harm');
  };

  const submitAndMoveBack = () => {
    dispatch(updateValue('secrets', text));
    navigation.goBack();
  };

  return (
    <ImageBack source={require('../../assets/card-back.png')}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <SafeArea>
          <Title>Have I been keeping Secrets?</Title>
          <TextInput
            onChangeText={setText}
            defaultValue={formData.secrets}
            multiline={true}
            numberOfLines={6}
            placeholder='Enter Text...'
          />
          <NextButton onPress={submitAndMoveForward}>
            <ButtonText>NEXT&#8594;</ButtonText>
          </NextButton>
          <BackButton onPress={submitAndMoveBack}>
            <ButtonText>&#8592;BACK</ButtonText>
          </BackButton>
        </SafeArea>
      </TouchableWithoutFeedback>
    </ImageBack>
  );
};

export default SecretsScreen;

const ImageBack = styled.ImageBackground`
  flex: 1;
  width: 100%;
`;

const SafeArea = styled.SafeAreaView`
  flex: 1;
  justify-content: flex-end;
`;

const Title = styled.Text`
  font-size: 100px;
  line-height: 80px;
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

const NextButton = styled.TouchableOpacity`
  background-color: black;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80px;
`;

const BackButton = styled.TouchableOpacity`
  background-color: #888;
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
