export interface Pokemon {
  id: number;
  name: string;
  image: string;
  esc: string;
  stats: {
    hp: number;
    attack: number;
    defense: number;
    special_attack: number;
    special_defense: number;
    speed: number;
  };
}
