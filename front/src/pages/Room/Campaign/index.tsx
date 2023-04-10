import { Box } from "@mui/material";
import Enemies from "./Enemies";
import GameController from "./GameController";
import Heroes from "./Heroes";
import Map from "./Map";

const Campaign: React.FC = () => {
  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'space-around',
      width: '100vw',
      padding: '16px',
      gap: '8px',
      overflowX: 'hidden'
    }}>
      <Heroes />
      <GameController />
      <Box>
        <Map />
        <Enemies />
      </Box>
    </Box>
  );
}
export default Campaign;

