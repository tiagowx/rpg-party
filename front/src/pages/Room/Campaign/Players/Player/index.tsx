import { Avatar, Box, Button, Paper, Typography } from "@mui/material"
import IPlayer from "interfaces/IPlayer";
import playerMock from "mocks/playerMock";
import style, { characterSkills } from "./style";

const Player: React.FC = () => {
  const actionsDisable = false;
  const player: IPlayer = playerMock;
  const status = player.status;

  return (
    <Paper sx={style} elevation={4}>
      <Box className="character-header">
        <Avatar className="character-avatar" src={player.avatar} />
        <Box className="character-social">
          <Typography
            className="character-name"
            component="h6"
            variant="h6">
            {player.name}
          </Typography>
          <Typography
            component="span"
            className="character-span">
            {player.gameClass}
          </Typography>
        </Box>
        <Box className="character-bars" >
          <Box className="character-bar" bgcolor="greenyellow">
            <Typography component="span">
              HP: {status.CON.currentHp} / {status.CON.maxHp}
            </Typography>
          </Box>
          <Box className="character-bar" bgcolor="cyan">
            <Typography component="span">
              MP: {status.MEN.currentMp} / {status.MEN.maxMp}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box className="character-level">
        <Typography component="h6" variant="h6">Lvl.: {player.level}</Typography>
        <Box className="character-experience" width="10%" bgcolor="gray">
          <Typography component="span">
            Exp.: {player.experience} / {1000}
          </Typography>
        </Box>
      </Box>
      {
        !actionsDisable && (
          <Box sx={characterSkills}>
            <Button className="skill" variant="contained" size="small">Ataque</Button>
            <Button className="skill" variant="contained" size="small">Skill 1</Button>
            <Button className="skill" variant="contained" size="small">Skill 2</Button>
            <Button className="skill" variant="contained" size="small">Ultimate</Button>
          </Box>
        )
      }
    </Paper >
  );
}

export default Player;