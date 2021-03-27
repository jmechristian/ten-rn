import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import Loading from '../../components/Loading';
import { getEntries } from '../../store/actions/entries';

const StartScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.entries);

  useEffect(() => {
    const setEntries = () => {
      dispatch(getEntries());
    };
    setEntries();
  }, [dispatch]);

  const step =
    'Continued to take personal inventory and when we were wrong promptly admitted it.';

  return (
    <>
      <ImageBack source={require('../../assets/start-screen.png')}>
        {loading && <Loading />}
        <SafeArea>
          <Heading>STEP TEN</Heading>
          <Step>{step}</Step>
          <Button
            onPress={() => navigation.push('Form')}
            disabled={loading ? true : false}
          >
            <ButtonText>{loading ? 'LOADING...' : 'START!'}</ButtonText>
          </Button>
        </SafeArea>
      </ImageBack>
    </>
  );
};

export default StartScreen;

const ImageBack = styled.ImageBackground`
  flex: 1;
  width: 100%;
`;

const SafeArea = styled.SafeAreaView`
  flex: 1;
  justify-content: flex-end;
`;

const Heading = styled.Text`
  font-weight: bold;
  font-size: 30px;
  letter-spacing: 12px;
  position: absolute;
  top: 115px;
  left: 31px;
`;

const Step = styled.Text`
  font-size: 85px;
  line-height: 64px;
  font-family: 'Frunchy';
  width: 90%;
  padding-right: 31px;
  padding-top: 12px;
  position: absolute;
  top: 190px;
  left: 31px;
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
