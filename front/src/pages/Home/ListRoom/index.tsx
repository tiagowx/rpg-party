import { AutoMode, Groups3, LockReset, Preview, QrCodeScanner, Weekend } from "@mui/icons-material";
import { Table, TableBody, TableCell, TableHead, TableRow, Tooltip } from "@mui/material";
import IRoom from "interfaces/IRoom";
import { FC } from "react";

interface IProps {
  rooms: IRoom[];
}

const ListRoom: FC<IProps> = (props: IProps) => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>
            <Tooltip title="Código">
              <QrCodeScanner />
            </Tooltip>
          </TableCell>
          <TableCell>
            <Tooltip title="Nome da Sana">
              <Weekend />
            </Tooltip>
          </TableCell>
          <TableCell>
            <Tooltip title="Jogadores" >
              <Groups3 />
            </Tooltip>
          </TableCell>
          <TableCell>
            <Tooltip title="Status" >
              <AutoMode />
            </Tooltip>
          </TableCell>
          <TableCell>
            <Tooltip title="Permissão" >
              <LockReset />
            </Tooltip>
          </TableCell>
          <TableCell>
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {props.rooms &&
          props.rooms.map(room =>
          (
            <TableRow key={room.code}>
              <TableCell>{room.code}</TableCell>
              <TableCell>{room.name}</TableCell>
              <TableCell>{room.players.length}</TableCell>
              <TableCell>{room.status}</TableCell>
              <TableCell>{room.permission}</TableCell>
              <TableCell>
                {room.permission  === "public" &&
                  <Tooltip title="Assisitir">
                    <Preview />
                  </Tooltip>
                }
              </TableCell>
            </TableRow>
          ))
        }
      </TableBody>

    </Table >
  );
}

export default ListRoom;