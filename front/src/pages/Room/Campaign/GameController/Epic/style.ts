import { SxProps } from "@mui/material";

const style: SxProps = {
  display: "flex",
  flexDirection: "column",
  p:"16px",
  ".paper": {
    display: "flex",
    flexDirection: "column",
    minHeight: "280px",
    padding: "8px",
    gap: "4px",
    ".action":{
      borderBlock: "1px solid #aaa",
      padding: "4px 8px"
    }
  },
};

export default style;
