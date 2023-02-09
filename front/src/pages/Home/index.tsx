import { Box, Container } from '@mui/material';
import CreateRoom from './CreateRoom';
import EnterRoom from './EnterRoom';

const Home: React.FC = () => {
  return (
    <Container
      component="main"
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyItems: 'center'
      }}>
      <Box width="50%"></Box>
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