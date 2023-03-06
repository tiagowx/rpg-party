import { Box, Paper, Typography } from "@mui/material";
import style from "./style";


const Epic = () => {
  return (
    <Box sx={style}>
      <Paper className="paper" elevation={4}>
      <Typography component="h4" variant="h6">Épico:</Typography>
        <Typography className="action">
          O grupo encontrou.
        </Typography>
        <Typography className="action">
          Jogador atacou monstro e causou 10 de dano.
        </Typography>
      </Paper>
    </Box>
  );

}
export default Epic;