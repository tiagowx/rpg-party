import { Box, Typography } from "@mui/material"
import Player from "./Player"

const Heroes: React.FC = () => {
  return (
    <Box sx={{
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: '4px'
    }}>
      <Typography>Jogadores:</Typography>
      <Player />
    </Box>
  )
}

export default Heroes;