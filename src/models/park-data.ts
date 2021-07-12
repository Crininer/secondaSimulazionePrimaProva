export interface OpeningHour {
  season: string;
  opening: string;
  closing: string;
}

export interface Attraction {
  name: string;
  type: string;
  hourOffset: number;
  peopleInQueue: number;
}

export interface Park {
  id: string;
  name: string;
  image: string;
  location: string;
  theme: string;
  distance: number;
  peopleInside: number;
  openingDates: any[];
  openingHours: OpeningHour[];
  popularityData: any[];
  attractions: Attraction[];
  attractionTypes: string[];
}

export interface ParkList {
  parks: Park[];
}
