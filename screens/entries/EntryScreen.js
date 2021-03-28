import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import moment from 'moment';

import Question from '../../components/Question';
import Loading from '../../components/Loading';

const EntryScreen = ({ route, navigation }) => {
  const [loading, setLoading] = useState(false);
  const [entry, setEntry] = useState();
  const { itemId } = route.params;

  useEffect(() => {
    const fetchEntry = async () => {
      setLoading(true);
      try {
        await axios
          .get(`https://step-ten-server.herokuapp.com/api/entries/${itemId}`)
          .then((response) => {
            setEntry(response.data.entry);
          });
      } catch (err) {
        console.log(err);
      }
      setLoading(false);
    };
    fetchEntry();
  }, []);

  if (loading) {
    return <Loading />;
  } else {
    return (
      <ImageBack source={require('../../assets/start-screen.png')}>
        <Heading>
          {moment(`${entry?.submitted}`).format('ddd, MMMM D, YYYY')}
        </Heading>
        <EntryContainer>
          <Question
            question='Was I resentful'
            answer={entry?.entry.resentful}
          />
          <Question question='Was I selfish' answer={entry?.entry.selfish} />
          <Question
            question='Was I dishonest'
            answer={entry?.entry.dishonest}
          />
          <Question question='Was I fearful' answer={entry?.entry.fearful} />
          <Question
            question='Am I obsessing over anything?'
            answer={entry?.entry.obsessing}
          />
          <Question
            question='Am I keeping any secrets?'
            answer={entry?.entry.secrets}
          />
          <Question
            question='Do I owe amends to anyone?'
            answer={entry?.entry.harm}
          />
          <Question
            question='Did I act kind towards everyone?'
            answer={entry?.entry.act}
          />
          <Question
            question='Did I go to a meeting?'
            answer={`${entry?.checklist.meeting}`}
          />
          <Question
            question='Did I meditate?'
            answer={`${entry?.checklist.meditated}`}
          />
          <Question
            question='Did I fellowship?'
            answer={`${entry?.checklist.fellowship}`}
          />
          <Question
            question='Did I read literature?'
            answer={`${entry?.checklist.literature}`}
          />
          <Question
            question='Did I pray?'
            answer={`${entry?.checklist.pray}`}
          />
          <Question
            question='Did I call my sponsor?'
            answer={`${entry?.checklist.sponsor}`}
          />
          <Question
            question='Did I talk to another alcoholic?'
            answer={`${entry?.checklist.another}`}
          />
          <Question
            question='Was I help another person?'
            answer={`${entry?.checklist.helped}`}
          />
        </EntryContainer>
      </ImageBack>
    );
  }
};

export default EntryScreen;

const ImageBack = styled.ImageBackground`
  flex: 1;
  width: 100%;
`;

const EntryContainer = styled.ScrollView`
  left: 31px;
  margin-top: 150px;
  padding-right: 50px;
  padding-top: 16px;
`;

const Heading = styled.Text`
  font-family: 'Frunchy';
  font-size: 52px;
  position: absolute;
  top: 85px;
  left: 31px;
`;
