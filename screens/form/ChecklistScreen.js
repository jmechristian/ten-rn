import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import { useDispatch, useSelector } from 'react-redux';
import { updateSwitch, clearState } from '../../store/actions/form';
import { getEntries } from '../../store/actions/entries';

import Row from '../../components/form/Row';

const ChecklistScreen = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const formState = useSelector((state) => state.form);
  const { checklist } = formState;
  const dispatch = useDispatch();

  const toggleSwitch = (title, value) => {
    dispatch(updateSwitch(title, value));
  };

  const submitAndMoveForward = async () => {
    setLoading(true);
    const submitted = new Date();
    try {
      await axios.post('https://step-ten-server.herokuapp.com/api/entries/', {
        submitted,
        entry: formState.formData,
        checklist: formState.checklist,
      });
      dispatch(clearState());
      dispatch(getEntries());
      navigation.push('entries');
    } catch (err) {}
    setLoading(false);
  };

  const submitAndMoveBack = () => {
    navigation.goBack();
  };

  return (
    <ImageBack source={require('../../assets/card-back.png')}>
      <SafeArea>
        <Title>Daily Checklist</Title>
        <ChecklistContainer>
          <Row
            question='Go to a Meeting'
            initialValue={checklist.meeting}
            toggleSwitch={toggleSwitch}
            title='meeting'
          />
          <Row
            question='Did I Meditate'
            initialValue={checklist.meditated}
            toggleSwitch={toggleSwitch}
            title='meditated'
          />
          <Row
            question='Did I Fellowship'
            initialValue={checklist.fellowship}
            toggleSwitch={toggleSwitch}
            title='fellowship'
          />
          <Row
            question='Read Literature'
            initialValue={checklist.literature}
            toggleSwitch={toggleSwitch}
            title='literature'
          />
          <Row
            question='Did I Pray'
            initialValue={checklist.pray}
            toggleSwitch={toggleSwitch}
            title='pray'
          />
          <Row
            question='Talk to Sponsor'
            initialValue={checklist.sponsor}
            toggleSwitch={toggleSwitch}
            title='sponsor'
          />
          <Row
            question='Talk to an Alcoholic'
            initialValue={checklist.another}
            toggleSwitch={toggleSwitch}
            title='another'
          />
          <Row
            question='Help Another Person'
            initialValue={checklist.helped}
            toggleSwitch={toggleSwitch}
            title='helped'
          />
        </ChecklistContainer>
        <NextButton onPress={submitAndMoveForward}>
          <ButtonText>NEXT&#8594;</ButtonText>
        </NextButton>
        <BackButton onPress={submitAndMoveBack}>
          <ButtonText>&#8592;BACK</ButtonText>
        </BackButton>
      </SafeArea>
    </ImageBack>
  );
};

export default ChecklistScreen;

const ImageBack = styled.ImageBackground`
  flex: 1;
  width: 100%;
`;

const SafeArea = styled.SafeAreaView`
  flex: 1;
  justify-content: flex-end;
`;

const ChecklistContainer = styled.View`
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  position: absolute;
  top: 270px;
  margin: 0 auto;
  padding-left: 2%;
  padding-right: 2%;
`;

const Title = styled.Text`
  font-size: 100px;
  line-height: 85px;
  font-weight: bold;
  font-family: 'Frunchy';
  position: absolute;
  top: 95px;
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
