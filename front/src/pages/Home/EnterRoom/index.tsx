import { Box, Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField, Typography } from "@mui/material";
import { Visibility, VisibilityOff } from '@mui/icons-material';

import { useState } from "react";

const EnterRoom = () => {

  const [showPass, setShowPass] = useState(false)

  const [roomCode, setRoomCode] = useState("");
  const [roomPass, setRoomPass] = useState("");

  const handleShowPass = () => setShowPass(!showPass);

  return (
    <Box component="form" sx={{
      display: "flex",
      flexDirection: "column",
      gap: "16px"
    }}>
      <Typography component="h2" variant="h4" fontWeight="bold">
        Entrar na Sala
      </Typography>
      <TextField
        size="small"
        label="Código da Sala:"
        role="code-box"
        value={roomCode}
        onChange={e => setRoomCode(e.currentTarget.value)}
      />

      <FormControl variant="outlined">
        <InputLabel htmlFor="adornment-pass">Senha</InputLabel>
        <OutlinedInput
          id="adornment-pass"
          label="Senha"
          role="pass-box"
          type={showPass ? 'text' : 'password'}
          size="small"
          value={roomPass}
          onChange={e => setRoomPass(e.currentTarget.value)}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                role="show-pass-btn"
                onClick={handleShowPass}
                edge="end"
              >
                {showPass ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
      <Button type="submit" role="enter-btn" size="small" variant="contained">Entrar</Button>
    </Box>
  );
}

export default EnterRoom;