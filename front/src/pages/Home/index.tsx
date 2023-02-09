import { Box, Container } from '@mui/material';
import CreateRoom from './CreateRoom';
import EnterRoom from './EnterRoom';
import ListRoom from './ListRoom';

const Home: React.FC = () => {
  return (
    <Container
      component="main"
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyItems: 'center'
      }}>
      <Box width="50%" pt="32px">
        <ListRoom rooms={[
          {
            code:"JRXYQH",
            name:"Caçadores de Aventuras",
            permission: 'private',
            players:[],
            status: 'playing'
          },
          {
            code:"CPQKDL",
            name:"Guerreiros da baguncinha",
            permission: 'public',
            players:[],
            status: 'playing'
          },
        ]}/>
      </Box>
      <Box
        component="section"
        sx={{
          display: 'flex',
          minHeight: '80vh',
          width:'50%',
          minWidth: '40wh', 
          flexDirection: 'column',
          justifyContent: 'space-around',
          alignItems:'center'
        }}>
        <CreateRoom />
        
        <EnterRoom />
      </Box>
    </Container>
  );
}

export default Home;