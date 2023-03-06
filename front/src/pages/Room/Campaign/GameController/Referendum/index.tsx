import { Box, Button, FormControl, FormControlLabel, FormLabel, Paper, Radio, RadioGroup, Typography } from "@mui/material";
import style from "./style";

const Referendum = () => {
  return (
    <Box sx={style}>
      <Paper className="paper" elevation={4}>
        <FormControl>
          <FormLabel id="referendum-form-group-label">Referendo:</FormLabel>
          <Typography fontWeight="bold">O grupo avistou um grupo de Slime próximo do lago. O que desejam fazer?</Typography>
          <RadioGroup
            row
            aria-aria-labelledby="referedum-form-group-label"
            name="referendum-radios"
            className="radio-group"
          >
            <FormControlLabel value="attack" control={<Radio />} label="Atacar" />
            <FormControlLabel value="run" control={<Radio />} label="Fugir" />
            <FormControlLabel value="ignore" control={<Radio />} label="Ignorar" />
            <Button variant="contained">Votar</Button>
          </RadioGroup>
        </FormControl>
      </Paper>
    </Box>
  );
}

export default Referendum;