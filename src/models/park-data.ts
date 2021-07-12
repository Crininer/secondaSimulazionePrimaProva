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
  name: string;
  image: string;
  location: string;
  theme: string;
  distance: string;
  peopleInside: number;
  openingDates: any[];
  openingHours: OpeningHour[];
  popularityData: any[];
  attractions: Attraction[];
}

export interface ParkList {
  parks: Park[];
}
