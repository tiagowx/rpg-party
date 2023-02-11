import { Box, Container } from '@mui/material';
import { useAppDispatch, useAppSelector } from 'global/hooks';
import { getRoomList } from 'global/reducers/roomReducer';
import { useEffect } from 'react';
import CreateRoom from './CreateRoom';
import EnterRoom from './EnterRoom';
import ListRoom from './ListRoom';

const Home: React.FC = () => {
  const roomList = useAppSelector(state => state.rooms.value);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (roomList.length === 0) {
      setTimeout(() => dispatch(getRoomList()), 1000)
    }
  });

  return (
    <Container
      component="main"
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyItems: 'center'
      }}>
      <Box
        sx={{
          width: '70%',
          mt: '32px',
          px: '32px',
          borderRight: '2px solid black'

        }}>
        <ListRoom rooms={roomList} />
      </Box>
      <Box
        component="section"
        sx={{
          display: 'flex',
          minHeight: '80vh',
          width: '30%',
          minWidth: '40wh',
          flexDirection: 'column',
          justifyContent: 'space-around',
          alignItems: 'center'
        }}>
        <CreateRoom />

        <EnterRoom />
      </Box>
    </Container>
  );
}

export default Home;