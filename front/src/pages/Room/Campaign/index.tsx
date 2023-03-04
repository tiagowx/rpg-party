import { Box } from "@mui/material";
import Enemies from "./Enemies";
import GameController from "./GameController";
import Heroes from "./Players";

const Campaign: React.FC = () => {
  return (
    <Box sx={{
      display: 'flex',
      justifyContent:'space-around',
      width: '100vw',
      gap: '8px',
      overflowX: 'hidden'
    }}>
      <Heroes />
      <GameController />
      <Enemies />
    </Box>
  );
}
export default Campaign;

