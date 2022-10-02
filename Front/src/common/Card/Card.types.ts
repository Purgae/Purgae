// * props types
export interface CardProps {
  url: string;
  // 미니게임에서 해당 nft가 선택되었는지
  selected?: boolean;
  isProfile?: boolean;
  onClick?: React.MouseEventHandler;
  id?: number;
}

export interface CardGroupProps {
  lst: string[];
  selectCard?: number;
  isProfile?: boolean;
  onClick?: React.MouseEventHandler;
  selectCardFunc?: (idx: string) => void;
}
