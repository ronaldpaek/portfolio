import { Container, Box } from '@mui/material';
import { Routes, Route } from 'react-router-dom';

import { Header } from './components';
import { Home, About, Resume } from './pages';

function App() {
  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'lightgray' }}>
      <Container>
        <Header />
        <Routes>
          <Route
            path='/'
            element={<Home name='Monalisa Ashley' title='Ui/Ux Designer' />}
          />
          <Route path='about' element={<About />} />
          <Route path='resume' element={<Resume />} />
        </Routes>
      </Container>
    </Box>
  );
}

export default App;
