import { Box, Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField, Typography } from "@mui/material";
import { Visibility, VisibilityOff } from '@mui/icons-material';

import { FC, useState } from "react";

const CreateRoom: FC = () => {

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
        data-testid="room-name"
        value={roomName}
        role="name-box"
        onChange={e => setRoomName(e.currentTarget.value)}
      />
      <FormControl
        variant="outlined"
        role="pass-box"
        >
        <InputLabel htmlFor="adornment-crt-pass">Senha</InputLabel>
        <OutlinedInput
          id="adornment-crt-pass"
          label="Senha"
          type={showPass ? 'text' : 'password'}
          size="small"
          data-testid="room-pass"
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
      <Button type="submit" size="small" role="create-btn" variant="contained">Criar</Button>
    </Box>
  );
}

export default CreateRoom;