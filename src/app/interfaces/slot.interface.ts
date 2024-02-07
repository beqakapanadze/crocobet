export interface ISlotFilterCategory {
  category: string;
  games: ISlotGameInfo[];
  group: string;
  name: string;
  order: number;
  platform: string;
  totalGames: number;
  type: string;
}

export interface ISlotFilterProvider {
  enabled: boolean;
  gamesCount: number;
  iframeH: number;
  iframeW: number;
  logo: string;
  name: string;
  order: number;
  provider: string;
  tags: string[];
  type: string;
  vendor: string;
  _id: string;
}

export interface ISlotFilterProviderWithGames {
  games: ISlotGameInfo[];
  iframeH: number;
  iframeW: number;
  name: string;
  order: number;
  provider: string;
  tags: string[];
  totalGames: number;
  type: string;
  vendor: string;
}



export interface ISlotGameInfo {
  favoriteCount?: number;
  providerName: string;
  hasLargeImage?: boolean;
  imageSet?: ISlotImageSet;
  gameId: string;
  game_id: string;
  image: string;
  image2: string;
  name: string;
  order: number;
  provider: string;
  stats: string[];
  tags: string[];
  url: string;
}

interface ISlotImageSet {
  blurhash: string;
  original: string;
  webp: string;
}

export interface ISlotFilterCategoriesResponse {
  data: ISlotFilterCategory[]
}

export interface ISlotFilterProvidersResponse {
  data: ISlotFilterProvider[]
}

export interface ISlotFilterProviderWithGamesResponse {
  data: ISlotFilterProviderWithGames
}
