import { Season } from './season';

export interface ListItemDetails {
  adult: boolean;
  name: string;
  created_by: string[];
  first_air_date: Date;
  genres: string[];
  last_air_date: Date;
  number_of_episodes: number;
  number_of_seasons: number;
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: string[];
  seasons: Season[];
  status: string;
  vote_average: number;
  tagline: string;
}
