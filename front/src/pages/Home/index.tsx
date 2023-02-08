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
          minWidth: '40wh', 
          flexDirection: 'column',
          justifyContent: 'center',
          justifyItems:'center'

        }}>
        <CreateRoom />
        <EnterRoom />
      </Box>
    </Container>
  );
}

export default Home;