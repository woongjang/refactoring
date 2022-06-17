type PlayID = 'hamlet' | 'as-like' | 'othello';
type Genre = 'tragedy' | 'comedy';

export interface StatementData {
  customer: Invoice['customer'];
  performances: EnrichPerformance[];
  totalAmount: number;
  totalVolumeCredits: number;
}

export interface EnrichPerformance extends Performance {
  play: Play;
  amount: number;
  volumeCredits: number;
}

export interface Performance {
  playID: PlayID;
  audience: number;
}
export interface Invoice {
  customer: string;
  performances: Performance[];
}

export interface Play {
  name: string;
  type: Genre;
}

export type Plays = {
  [playID in PlayID]: Play;
};
