export interface Movie {
    title: string;
    release_date: string;
    vote_average: number;
    editors: string[];
  }
  
  export interface MovieApiResponse {
    results: Array<{
      id: number;
      title: string;
      release_date: string;
      vote_average: number;
    }>;
  }
  
  export interface CreditApiResponse {
    crew: Array<{
      known_for_department: string;
      name: string;
    }>;
  }
  