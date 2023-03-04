import IRoom from "interfaces/IRoom";
import playerMock from "./playerMock";

const roomMock: IRoom = {
  code: "D5SD1A884",
  consoleMessages: [],
  name: "Aventura",
  permission: "private",
  players: [playerMock],
  status: "playing",
};

export default roomMock;
