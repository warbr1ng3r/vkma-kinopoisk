export type OMDbResponse = {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: Rating[];
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  totalSeasons: string;
  Response: 'True' | 'False';
  Error?: string;
};

export type OMDbSearchListResponse = {
  Search: OMDbSearchItemResponse[];
  totalResults: string;
  Response: 'True' | 'False';
  Error?: string;
};

export type OMDbSearchItemResponse = {
  Title: string;
  Year: string;
  imdbID: string;
  Type: Type;
  Poster: string;
};

type Type = 'movie' | 'series' | 'game';

type Rating = {
  Source: string;
  Value: string;
};
