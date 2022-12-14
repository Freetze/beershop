export interface Beer {
  id: string;
  name: string;
  tagline: string;
  first_brewed: string;
  description: string;
  image_url: string 
  abv: number;
  ibu: number;
  target_fg: number;
  target_og: number;
  ebc: number;
  srm: number;
  ph: number;
  attenuation_level: number;
  food_pairing: string[];
  brewers_tips: string;
  contributed_by: string;
  beerPrice: number;
  badgeType: number
  quantity: number;
  ingredients: string;

}

