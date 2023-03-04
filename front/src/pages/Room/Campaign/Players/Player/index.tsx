import { Avatar, Box, Button, Card, CardActions, CardContent, CardHeader, Typography } from "@mui/material"
import IPlayer from "interfaces/IPlayer";
import playerMock from "mocks/playerMock";

const Player: React.FC = () => {
  const actionsDisable = false;
  const player: IPlayer = playerMock;

  return (
    <Card>
      <Box>
        <CardHeader
          avatar={
            <Avatar src={player.avatar} />
          }
          title={player.name}
          subheader={player.gameClass}
        />
        <CardContent>
          <Typography>HP: 100 / 100</Typography>
          <Typography>MP: 100 / 100</Typography>
        </CardContent>
      </Box>
      <CardActions sx={{ borderTop: 1 }}>
        <Button disabled={actionsDisable}>Ataque</Button>
        <Button disabled={actionsDisable}>Skill 1</Button>
        <Button disabled={actionsDisable}>Skill 2</Button>
        <Button disabled={actionsDisable}>Ultimate</Button>
      </CardActions>
    </Card>
  );
}

export default Player;