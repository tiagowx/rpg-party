interface IMap {
  id: number;
  name: string;
  picture: string;
  description: string;
  effect: string;
  places: string[];
  monsters: string[];
  collectibles: [];
}

export default IMap;
