import { SxProps } from "@mui/material";

const style: SxProps = {
  display: "flex",
  flexDirection: "column",
  ".paper": {
    display: "flex",
    flexDirection: "column",
    padding: "8px",
    gap: "4px",
    ".action":{
      borderBlock: "1px solid #aaa",
      padding: "4px 8px"
    },
    ".radio-group":{
      justifyContent: "space-between",
      p: "8px"
    }
  },
}

export default style;