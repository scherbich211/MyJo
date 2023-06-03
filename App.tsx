import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text } from 'react-native';
import { useAllQuery } from './src/api/user';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useFilteredTasks, usePrevious } from './src/hooks';
import { SafeAreaView } from 'react-native';
import Card from './src/components';
import { Alert } from 'react-native';
import { TAddCard, TCard } from './src/types';
import { addCard } from './src/utils';
import _ from 'lodash';

export default function App() {
  const { data, refetch } = useAllQuery();

  useEffect(() => {
    const interval = setInterval(() => refetch(), 10000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const filteredTasks = useFilteredTasks(data && data.result || [])

  const onCardsPress = useCallback((item: TCard) => {
    const newItem: TAddCard = {
      reviewer_id: item.reviewer_id,
      name: item.name,
      reward: item.reward,
      video_required: item.video_required,
      period_start: item.period_start,
      period_stop: item.period_stop,
      type: item.type,
    };
    addCard(newItem);
    return Alert.alert(`${item.name}`, `${item.description}`);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text>Cards</Text>
      <FlatList
        data={filteredTasks}
        renderItem={({item})=> <Card item={item} onCardsPress={onCardsPress} />}
        keyExtractor={(item) => item.card_id.toString()}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
