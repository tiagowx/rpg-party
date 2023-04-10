import { Box } from "@mui/material";
import style from "./style";

interface IProps {
  maxValue: number;
  name: string;
  value: number;
}

const Bar: React.FC<IProps> = (props: IProps) => {
  return (
    <Box sx={style}>
      <svg viewBox="0 0 128 22" xmlns="http://www.w3.org/2000/svg">
        <rect width="128px" height="100%" fill="#f22">
          <text x="64" y="11" fill="#fff" className="bar">
            {props.name}: {props.value} / {props.maxValue}
          </text>
        </rect>
      </svg>
    </Box>
  );
}

export default Bar;