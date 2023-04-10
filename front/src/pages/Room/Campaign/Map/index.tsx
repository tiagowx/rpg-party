import { Paper, Typography } from "@mui/material";
import IMap from "interfaces/IMap";
import mapMock from "mocks/mapMock";

const Map = () => {
  const map: IMap = mapMock;

  return (
    <Paper elevation={4}>
      <Typography component="h6" variant="h6">
        Mapa: {map.name} | Local: {map.places[0]}
      </Typography>
      <Typography component="p">
        {map.description}
      </Typography>

    </Paper>
  );
}

export default Map;