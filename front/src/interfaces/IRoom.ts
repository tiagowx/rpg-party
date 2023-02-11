import IPlayer from "./IPlayer";

interface IRoom {
  code: string;
  consoleMessages: string[]; 
  permission: 'public'|'private';
  players: IPlayer[];
  name: string;
  status: 'playing'|'waiting'|'finished';
}

export default IRoom;