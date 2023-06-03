import { useRef, useEffect, useState } from 'react';
import { TCard } from './types';
import _ from 'lodash';

export const usePrevious = (value: string) => {
  const ref = useRef('');
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};

export const useFilteredTasks = (tasks: Array<TCard>): Array<TCard> => {
  const [data, setData] = useState<Array<TCard>>([]);
  const jsonData = JSON.stringify(tasks);
  const myPreviousState = usePrevious(jsonData);

  useEffect(() => {
    if (
      myPreviousState !== undefined &&
      !_.isEqual(myPreviousState, jsonData) &&
      tasks.length > 0
    ) {
      setData(tasks.filter((item) => item.type === 'TASKS'));
    }
  }, [tasks]);

  return data;
};
