export type TGetCards = {
  success: boolean;
  result: Array<TCard>;
};

export type TCard = {
  card_id: number;
  reviewer_id: number;
  name: string;
  reward: number;
  photo_required: boolean;
  video_required: boolean;
  schedule: Array<boolean> | null;
  period_start: string | null;
  period_stop: string | null;
  type: 'ALL' | 'TASKS' | 'CORSES';
  description?: string | null;
  every_month?: Array<number> | null;
};
export type TAddCard = Omit<TCard, 'card_id' | 'photo_required' | 'schedule'>;
