import React from 'react';
import styled from 'styled-components';
import LottieView from 'lottie-react-native';

const Loading = () => {
  return (
    <Container>
      <LottieView source={require('../assets/loader.json')} autoPlay loop />
    </Container>
  );
};

export default Loading;

const Container = styled.View`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
`;
