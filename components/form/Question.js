import React, { useRef, useState } from 'react';
import styled from 'styled-components';

const Question = ({ onSubmit, moveBack, question, title }) => {
  const [textValue, setTextValue] = useState('');
  const inputRef = useRef('');

  const sendData = () => {
    onSubmit(title, textValue);
    inputRef.current.clear();
  };

  return (
    <Container>
      <Title>{question}</Title>
      <Answer ref={inputRef} onChangeText={setTextValue} />
      {onSubmit && (
        <Button onPress={sendData}>
          <ButtonText>Next</ButtonText>
        </Button>
      )}
      {moveBack && (
        <Button onPress={moveBack}>
          <ButtonText>Back</ButtonText>
        </Button>
      )}
    </Container>
  );
};

export default Question;

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Title = styled.Text`
  font-size: 24px;
  margin-bottom: 18px;
`;

const Answer = styled.TextInput`
  border: 1px solid #888;
  font-size: 16px;
  width: 250px;
  height: 40px;
  padding: 4px 8px;
`;

const Button = styled.TouchableOpacity`
  background: #5263ff;
  width: 250px;
  height: 50px;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  box-shadow: 0 5px 5px #c2cbff;
`;

const ButtonText = styled.Text`
  color: #ffffff;
  font-size: 18px;
`;
