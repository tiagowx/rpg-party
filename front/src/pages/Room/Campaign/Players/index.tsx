import { Box } from "@mui/material"
import Player from "./Player"

const Heroes: React.FC = () => {
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',      
      gap: '4px'
    }}>
      <Player />
      <Player />
    </Box>
  )
}

export default Heroes;