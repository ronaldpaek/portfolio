import { Container, Box } from '@mui/material';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/About'

function App() {
  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'lightgray' }}>
      <Container>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='about' element={<About />} />
        </Routes>
      </Container>
    </Box>
  );
}

export default App;
