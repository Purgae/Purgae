export interface CardPageProps {
  nftLst: string[];
  gameSelectCard?: number;
  onClick?: React.MouseEventHandler;
  nftexist: boolean;
  isProfile?: boolean;
  selectCardFunc?: (idx: string) => void;
}
