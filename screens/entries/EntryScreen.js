import React from 'react';
import styled from 'styled-components';

const EntryScreen = ({ route, navigation }) => {
  const { itemId } = route.params;
  return (
    <ImageBack source={require('../../assets/start-screen.png')}>
      <Heading>{itemId}</Heading>
    </ImageBack>
  );
};

export default EntryScreen;

const ImageBack = styled.ImageBackground`
  flex: 1;
  width: 100%;
`;

const Heading = styled.Text`
  font-weight: bold;
  font-size: 30px;
  letter-spacing: 12px;
  position: absolute;
  top: 85px;
  left: 31px;
`;
