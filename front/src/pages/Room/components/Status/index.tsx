import { Feedback } from "@mui/icons-material";
import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from "@mui/material";
import IBaseStatus from "interfaces/IBaseStatus";
import style from "./style";

interface IProps {
  status: IBaseStatus
}

const Status: React.FC<IProps> = (props: IProps) => {
  const status = props.status;

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<Feedback />}>
        <Typography>
          Status
        </Typography>
      </AccordionSummary>
      <AccordionDetails sx={style}>
        <Box component="ul">
          <Box component="li">
            <Typography component="p"> STR: {status.STR.value}</Typography>
            <Box component="ul">
              <Box component="li">
                <Typography component="span">
                  D. Físico: {status.STR.pAttack}
                </Typography>
              </Box>
              <Box component="li">
                <Typography component="span">
                  D. Crt. Físico: {status.STR.pDCritical}
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box component="li">
            <Typography component="p"> CON: {status.CON.value}</Typography>
            <Box component="ul">
              <Box component="li">
                <Typography component="span">
                  Def. Física: {status.CON.pDefense}
                </Typography>
              </Box>
              <Box component="li">
                <Typography component="span">
                  Determinação: {status.CON.determination}
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box component="li">
            <Typography component="p"> DEX: {status.DEX.value}</Typography>
            <Box component="ul">
              <Box component="li">
                <Typography component="span">
                  Def. Física: {status.DEX.agility}
                </Typography>
              </Box>
              <Box component="li">
                <Typography component="span">
                  Determinação: {status.DEX.malice}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box component="ul">
          <Box component="li">
            <Typography component="p"> INT: {status.INT.value}</Typography>
            <Box component="ul">
              <Box component="li">
                <Typography component="span">
                  D. Mágico: {status.INT.mAttack}
                </Typography>
              </Box>
              <Box component="li">
                <Typography component="span">
                  D. Crt. Mágico: {status.INT.mDCritical}
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box component="li">
            <Typography component="p"> MEN: {status.MEN.value}</Typography>
            <Box component="ul">
              <Box component="li">
                <Typography component="span">
                  Def. Física: {status.MEN.mDefense}
                </Typography>
              </Box>
              <Box component="li">
                <Typography component="span">
                  Resiliência: {status.MEN.resilience}
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box component="li">
            <Typography component="p"> WIT: {status.WIT.value}</Typography>
            <Box component="ul">
              <Box component="li">
                <Typography component="span">
                  Concentração: {status.WIT.concentration}
                </Typography>
              </Box>
              <Box component="li">
                <Typography component="span">
                  Visão: {status.WIT.vision}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </AccordionDetails>
    </Accordion>
  );
}

export default Status;