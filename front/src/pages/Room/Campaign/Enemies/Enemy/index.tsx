import {
  Avatar,
  Typography,
  Paper,
  Box
} from "@mui/material";
import IEnemy from "interfaces/IEnemy";
import style from "./style";

interface IProps {
  enemy: IEnemy;
}

const Enemy: React.FC<IProps> = (props: IProps) => {
  const status = props.enemy.status;
  const enemy = props.enemy;

  return (
    <Paper sx={style} elevation={4}>
      <Box className="character-header">
        <Box className="character-bars" >
          <Box className="character-bar" width="75%" bgcolor="greenyellow">
            <Typography component="span">
              HP: {status.CON.currentHp} / {status.CON.maxHp}
            </Typography>
          </Box>
          <Box className="character-bar" width="50%" bgcolor="cyan">
            <Typography component="span">
              MP: {status.MEN.currentMp} / {status.MEN.maxMp}
            </Typography>
          </Box>
        </Box>
        <Box className="character-social">
          <Typography
            className="character-name"
            component="h6"
            variant="h6">
            {enemy.name}
          </Typography>
          <Typography
            component="span"
            className="character-span">
            {enemy.gameClass}
          </Typography>
        </Box>
        <Avatar className="character-avatar" src={enemy.avatar} />
      </Box>
    </Paper >

  );
}

export default Enemy;