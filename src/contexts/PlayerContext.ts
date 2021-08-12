import { createContext } from 'react';

type Episode = {
  title: string;
  numbers: string;
  thumbnail: string;
  duration: string;
  url: string;
};

type PlayerContextData = {
  episodeList: Episode[];
  currentEpisodeIndex: number;
};

const PlayerContext = createContext({} as PlayerContextData);

export default PlayerContext;
