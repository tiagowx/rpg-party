import IPlayer from "./IPlayer";
import IRoom from "./IRoom";

interface IGameController {
  room: IRoom;
  turn: number;
  player: IPlayer;
  currentPlayer: IPlayer;
  phase: "Batalha" | "Escolha" | "Referendo" | "Exploração" | "Início";
  timer: number;
}

export default IGameController;
