import { memo } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { TCard } from '../types';

type Card = {
  item: TCard;
  onCardsPress: (item: TCard) => void;
};

const Card: React.FC<Card> = (props) => {
  console.log(33333);

  return (
    <TouchableOpacity
      style={{ backgroundColor: 'red', margin: 10, padding: 30 }}
      onPress={() => props.onCardsPress(props.item)}
    >
      <Text style={{ color: 'white' }}>{props.item.name}</Text>
    </TouchableOpacity>
  );
};


export default memo(Card);
