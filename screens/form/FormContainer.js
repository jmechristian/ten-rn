import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import * as formActions from '../../store/actions/form';

import Question from '../../components/form/Question';

const FormContainer = () => {
  const [index, setIndex] = useState(0);
  const dispatch = useDispatch();

  const submitAndMoveForward = (title, value) => {
    dispatch(formActions.updateValue(title, value));
    setIndex((prevState) => prevState + 1);
  };

  const moveBack = () => {
    setIndex((prevState) => prevState - 1);
  };

  const cards = [
    <Question
      title='resentful'
      question='Have I been Resentful?'
      onSubmit={submitAndMoveForward}
    />,
    <Question
      title='fearful'
      question='Have I been Fearful?'
      onSubmit={submitAndMoveForward}
      moveBack={moveBack}
    />,
    <Question
      title='selfish'
      question='Have I been Selfish?'
      onSubmit={submitAndMoveForward}
      moveBack={moveBack}
    />,
    <Question
      title='selfish'
      question='Have I been Dishonest?'
      onSubmit={submitAndMoveForward}
      moveBack={moveBack}
    />,
    <Question
      title='obsessing'
      question='Have I been Obsessing?'
      onSubmit={submitAndMoveForward}
      moveBack={moveBack}
    />,
    <Question
      title='secrets'
      question='Have I been Secrets?'
      onSubmit={submitAndMoveForward}
      moveBack={moveBack}
    />,
    <Question
      title='kind'
      question='Have I been Kind?'
      onSubmit={submitAndMoveForward}
      moveBack={moveBack}
    />,
    <Question
      title='harm'
      question='Have I been Harmful?'
      onSubmit={submitAndMoveForward}
      moveBack={moveBack}
    />,
    <Question
      title='checklist'
      question='Have I been Checklist?'
      moveBack={moveBack}
    />,
  ];

  return <Container>{cards[index]}</Container>;
};

export default FormContainer;

const Container = styled.View`
  flex: 1;
  align-content: center;
  justify-content: center;
`;
