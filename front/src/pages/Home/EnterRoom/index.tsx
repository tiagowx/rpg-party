import { Box, Button, IconButton, TextField, Typography } from "@mui/material";
import {Visibility, VisibilityOff} from '@mui/icons-material';

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
        label="Nome da Sala:"
        value={roomCode}
        onChange={e => setRoomCode(e.currentTarget.value)}
      />
      <TextField
        size="small"
        label="Senha de acesso:"
        value={roomPass}
        type="password"
        onChange={e => setRoomPass(e.currentTarget.value)}
      >
          {showPass? <VisibilityOff/> : <Visibility/>}

      </TextField>
      <Button type="submit" variant="contained">Entrar</Button>
    </Box>
  );
}

export default EnterRoom;