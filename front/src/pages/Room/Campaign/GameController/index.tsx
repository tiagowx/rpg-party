import { Box, Paper, Typography } from "@mui/material";
import IGameController from "interfaces/IGameController";
import playerMock from "mocks/playerMock";
import roomMock from "mocks/roomMock";
import { FC, useState } from "react";
import Epic from "./Epic";
import Styles from "./styles";


const GameController: FC = () => {
  const [gameController, setGameController] = useState<IGameController>({
    currentPlayer: roomMock.players[0],
    player: playerMock,
    room: roomMock,
    timer: 0,
    turn: 1
  });

  return (
    <Box component="section" sx={Styles}>
      <Paper className="room-info" elevation={4}>
        <p>Room: {gameController.room.name}</p>
        <p>Turno: {gameController.turn}</p>
        <p>Tempo: {gameController.timer}</p>
        <p>{gameController.currentPlayer.name} está jogando!</p>
      </Paper>
      <Epic />
    </Box>
  );
};

export default GameController;
