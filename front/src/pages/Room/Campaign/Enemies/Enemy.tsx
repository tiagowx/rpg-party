import { Feedback } from "@mui/icons-material";
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Typography,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  SxProps
} from "@mui/material";
import IEnemy from "interfaces/IEnemy";

interface IProps {
  enemy: IEnemy;
}

const statusSummary: SxProps = {
  height: '48px',
  textAlign: 'center',
  m: 0,
  p: 0
}

const statusDetails: SxProps = {
  display: 'flex',
  ul: {
    margin: 0,
    padding: '8px 16px'
  },
  li: {
    p: {
      fontWeight: 'bold'
    },
    span: {
      fontSize: '12px'
    }
  }
};

const Enemy: React.FC<IProps> = (props: IProps) => {
  const status = props.enemy.status;

  return (
    <Card>
      <CardHeader
        title={props.enemy.name}
        subheader={`Classe: ${props.enemy.gameClass} | Level: ${props.enemy.level}`}
        avatar={
          <Avatar src={props.enemy.avatar} />
        }
      />
      <CardContent
        sx={{
          display: 'flex',
          borderTop: '1px solid',
          justifyContent: 'space-between'
        }}>
        <Typography>HP: {props.enemy.status.CON.currentHp} / {props.enemy.status.CON.maxHp}</Typography>
        <Typography>MP: {props.enemy.status.MEN.currentMp} / {props.enemy.status.MEN.maxMp}</Typography>
      </CardContent>
      <Accordion>
        <AccordionSummary
          expandIcon={<Feedback />}>
          <Typography>
            Status
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={statusDetails}>
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
    </Card>

  );
}

export default Enemy;