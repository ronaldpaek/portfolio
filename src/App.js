import { Container, Box } from '@mui/material';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Resume from './pages/Resume';

function App() {
  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'lightgray' }}>
      <Container>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='resume' element={<Resume />} />
        </Routes>
      </Container>
    </Box>
  );
}

export default App;
