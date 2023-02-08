import { Box, Button, IconButton, TextField, Typography } from "@mui/material";
import {Visibility, VisibilityOff} from '@mui/icons-material';

import { useState } from "react";

const CreateRoom = () => {

  const [showPass, setShowPass] = useState(false)

  const [roomName, setRoomName] = useState("");
  const [roomPass, setRoomPass] = useState("");



  const handleShowPass = () => setShowPass(!showPass);

  return (
    <Box component="form" sx={{
      display: "flex",
      flexDirection: "column",
      gap: "16px"
    }}>
      <Typography component="h2" variant="h4" fontWeight="bold">
        Criar uma Sala
      </Typography>
      <TextField
        size="small"
        label="Nome da Sala:"
        onChange={e => setRoomName(e.currentTarget.value)}
      />
      <TextField
        size="small"
        label="Senha de acesso:"
        type="password"
        onChange={e => setRoomPass(e.currentTarget.value)}
      >
          {showPass? <VisibilityOff/> : <Visibility/>}

      </TextField>
      <Button type="submit" variant="contained">Criar</Button>
    </Box>
  );
}

export default CreateRoom;