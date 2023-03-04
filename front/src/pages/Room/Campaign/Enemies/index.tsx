import { Box, Typography } from "@mui/material"
import enemyMock from "mocks/enemyMock";
import Enemy from "./Enemy";

const Enemies: React.FC = () => {
  const enemies = enemyMock;
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: '4px'
      }}
    >
      <Typography>
        Inimigos:
      </Typography>
      <Enemy key={`enemy-${0}`} enemy={enemyMock} />
      <Enemy key={`enemy-${0}`} enemy={enemyMock} />


    </Box>
  );
}

export default Enemies;