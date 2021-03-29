import React, { useLayoutEffect } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import moment from 'moment';
import { View } from 'react-native';

const EntriesScreen = ({ navigation }) => {
  const { entries } = useSelector((state) => state.entries);

  return (
    <ImageBack source={require('../../assets/start-screen.png')}>
      <Heading>ENTRIES</Heading>
      <EntryList
        data={entries}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{
          padding: '2%',
          paddingTop: '4%',
        }}
        renderItem={({ item, index }) => {
          const entryDate = moment(item.submitted).format('MMMM D, YYYY');
          const entryDay = moment(item.submitted).format('ddd');
          return (
            <EntryWrapper
              onPress={() => {
                navigation.navigate('entry', {
                  itemId: item.id,
                  date: entryDate,
                });
              }}
            >
              <View>
                <EntryDay>{entryDay}</EntryDay>
                <EntryDate>{entryDate}</EntryDate>
              </View>
              <ArrowWrapper>
                <Arrow>&#8594;</Arrow>
              </ArrowWrapper>
            </EntryWrapper>
          );
        }}
      />
    </ImageBack>
  );
};

export default EntriesScreen;

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

const EntryList = styled.FlatList`
  width: 100%;
  margin-top: 135px;
`;

const EntryWrapper = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.8);
  margin-bottom: 16px;
  padding: 24px;
  border-radius: 10px;
`;

const EntryDate = styled.Text`
  font-family: 'Frunchy';
  font-size: 44px;
`;

const EntryDay = styled.Text`
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 8px;
  text-transform: uppercase;
`;

const ArrowWrapper = styled.View`
  background-color: #000000;
  color: white;
  padding: 12px;
  border-radius: 8px;
`;

const Arrow = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: bold;
`;
