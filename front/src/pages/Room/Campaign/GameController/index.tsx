import { Box, Paper } from "@mui/material";
import IGameController from "interfaces/IGameController";
import playerMock from "mocks/playerMock";
import roomMock from "mocks/roomMock";
import { FC, useState } from "react";
import Epic from "./Epic";
import Referendum from "./Referendum";
import Styles from "./styles";


const GameController: FC = () => {
  const [gameController, setGameController] = useState<IGameController>({
    currentPlayer: roomMock.players[0],
    player: playerMock,
    room: roomMock,
    timer: 0,
    turn: 1,
    phase: "Batalha"
  });

  return (
    <Box component="section" sx={Styles}>
      <Paper className="room-info" elevation={4}>
        <p>Room: {gameController.room.name}</p>
        <p>Turno: {gameController.turn}</p>
        <p>Tempo: {gameController.timer}</p>
        <p>Fase: {gameController.phase}</p>
      </Paper>
      <Epic />
      <Referendum />
    </Box>
  );
};

export default GameController;
