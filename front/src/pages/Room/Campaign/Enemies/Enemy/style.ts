import { SxProps } from "@mui/material";
import theme from "theme";

const style: SxProps = {
  display: "flex",
  minHeight: "80px",
  padding: "8px",
  flexDirection: "column",
  ".character-header": {
    flex: 1,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "8px",
  },
  ".character-social": {
    flex: 1,
    display: "flex",
    flexDirection: "column",
  },
  ".character-avatar": {
    flex: 1,
    height: "100%",
    justifySelf: "center",
  },
  ".character-name": {
    justifySelf: "center",
    color: `${theme.palette.grey[600]}`,
    fontWeight: "bold",
    fontSize: "16px",
  },
  ".character-span": {
    color: `${theme.palette.grey[400]}`,
    fontWeight: "bold",
    fontSize: "12px",
  },
  ".character-bars": {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    color: `${theme.palette.text.secondary}`,
    gap: "4px",
  },
  ".character-bar": {
    display: "flex",
    height: "22px",
    borderRadius: "32px",
    span: {
      fontWeight: "bold",
      fontSize: 14,
      border: "1px solid black",
      borderRadius: "32px",
      textAlign: "center",
      flexWrap: "nowrap",
      minWidth: "128px",
    },
  },
  ".character-level": {
    flex: 1,
    display: "flex",
    gap: "32px",
    padding: "4px",
    alignItems: "center",
    h6: {
      flex: .32,
      textAlign: "center"
    },
    ".character-experience": {
      display: "flex",
      color: `${theme.palette.text.secondary}`,
      borderRadius: "32px",
      height: "22px",
      span: {
        fontWeight: "bold",
        fontSize: 14,
        border: "1px solid black",
        borderRadius: "32px",
        textAlign: "center",
        flexWrap: "nowrap",
        minWidth: "196px",
      },
    },
  },
};

export default style;
