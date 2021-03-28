import React from 'react';
import styled from 'styled-components';

const Question = ({ question, answer }) => {
  return (
    <EntryContainer>
      <QuestionContainer>
        <QuestionText>{question}</QuestionText>
      </QuestionContainer>
      <AnswerContainer>
        <Answer>{answer}</Answer>
      </AnswerContainer>
    </EntryContainer>
  );
};

export default Question;

const EntryContainer = styled.View`
  padding-bottom: 24px;
`;

const QuestionContainer = styled.View`
  margin-bottom: 4px;
`;

const AnswerContainer = styled.View`
  margin-bottom: 8px;
`;

const QuestionText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 2px;
  padding-bottom: 0;
`;

const Answer = styled.Text``;
