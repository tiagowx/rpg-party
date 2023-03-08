import { Box, Paper, Typography } from "@mui/material";
import playerMock from "mocks/playerMock";
import style from "./style";


const Epic = () => {
  const player = playerMock;
  return (
    <Box sx={style}>
      <Paper className="paper" elevation={4}>
      <Typography component="h4" variant="h6">Épico:</Typography>
        <Typography className="action">
          O grupo avistou 2 Slimes inimigos.
        </Typography>
        <Typography className="action">
          {player.name} atacou Slime e causou 15 de dano.
        </Typography>
        <Typography className="action">
           O Slime conjurou a hábilidade "Envolver" em {player.name} e errou.
        </Typography>
        <Typography className="action">
           O Slime conjurou a hábilidade "Envolver" em {player.name} e errou.
        </Typography>
      </Paper>
    </Box>
  );

}
export default Epic;