type PlayID = "hamlet" | "as-like" | "othello";
type Genre = "tragedy" | "comedy";

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
