import { CssBaseline } from '@mui/material';
import { store } from 'global/store';
import { Provider } from 'react-redux';
import './App.css';
import Pages from './pages';

function App() {
  return (
    <Provider store={store}>
      <CssBaseline />
      <Pages />
    </Provider>
  );
}

export default App;
