import IPlayer from "./IPlayer";
import IRoom from "./IRoom";

interface IGameController {
  room: IRoom;
  turn: number;
  player: IPlayer;
  currentPlayer: IPlayer;
  timer: number;
}

export default IGameController;
