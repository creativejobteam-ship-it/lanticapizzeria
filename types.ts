export interface Location {
  id: number;
  address: string;
  name: string;
  type: 'Emporter' | 'Sur place' | 'Prochainement';
  hours: string;
  phone?: string;
  image: string;
  link: string;
  mapImage: string;
}

export interface MenuItem {
  id: number;
  title: string;
  category: string;
  image: string;
}