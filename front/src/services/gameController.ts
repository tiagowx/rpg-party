import IEnemy from "interfaces/IEnemy";
import IGameController from "interfaces/IGameController";
import IPlayer from "interfaces/IPlayer";
import IRoom from "interfaces/IRoom";
import roomMock from "mocks/roomMock";

export class GameController {
  static getDataGame = async (room: IRoom) => {
    const roomData: IRoom = await roomMock;

    return roomData;
  };

  static toAttack = (player: IPlayer, enemy: IEnemy) => {};

  static toCollect = (player: IPlayer) => {};

  static toExplore = (player: IPlayer) => {};

  static toForge = (player: IPlayer) => {};

  static toMine = (player: IPlayer) => {};

  static toUnlock = (player: IPlayer) => {};
}
