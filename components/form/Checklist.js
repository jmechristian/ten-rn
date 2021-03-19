import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { SafeAreaView } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import styled from 'styled-components';

import { updateSwitch } from '../../store/actions/form';

import Row from './Row';

const Checklist = ({ moveBack }) => {
  const switchValue = useSelector((state) => state.form);
  const { checklist } = switchValue;
  const dispatch = useDispatch();

  const toggleSwitch = (title, value) => {
    dispatch(updateSwitch(title, value));
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <Container>
          <Title>Did I?</Title>
          <Row
            title='meeting'
            initialValue={checklist.meeting}
            toggleSwitch={toggleSwitch}
          />
          <Row
            title='meditated'
            initialValue={checklist.meditated}
            toggleSwitch={toggleSwitch}
          />
          <Row
            title='fellowship'
            initialValue={checklist.fellowship}
            toggleSwitch={toggleSwitch}
          />
          <Row
            title='literature'
            initialValue={checklist.literature}
            toggleSwitch={toggleSwitch}
          />
          <Row
            title='pray'
            initialValue={checklist.pray}
            toggleSwitch={toggleSwitch}
          />
          <Row
            title='sponsor'
            initialValue={checklist.sponsor}
            toggleSwitch={toggleSwitch}
          />
          <Row
            title='another'
            initialValue={checklist.another}
            toggleSwitch={toggleSwitch}
          />
          <Row
            title='helped'
            initialValue={checklist.helped}
            toggleSwitch={toggleSwitch}
          />
          <Button onPress={moveBack}>
            <ButtonText>Back</ButtonText>
          </Button>
        </Container>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Checklist;

const Title = styled.Text`
  font-size: 36px;
  font-weight: bold;
  margin-top: 24px;
`;

const Container = styled.View`
  flex: 1;
  align-items: center;
`;

const Button = styled.TouchableOpacity`
  background: #5263ff;
  width: 250px;
  height: 50px;
  justify-content: center;
  align-items: center;
  margin-top: 24px;
  box-shadow: 0 5px 5px #c2cbff;
`;

const ButtonText = styled.Text`
  color: #ffffff;
  font-size: 18px;
`;
