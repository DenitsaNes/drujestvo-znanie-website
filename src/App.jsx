import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Board from './pages/Board';
import Activities from './pages/Activities';
import Contacts from './pages/Contacts';
import CourseRegistration from './pages/CourseRegistration';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="za-nas" element={<About />} />
          <Route path="upravitelen-savet" element={<Board />} />
          <Route path="deynost" element={<Activities />} />
          <Route path="kontakti" element={<Contacts />} />
          <Route path="zapisi" element={<CourseRegistration />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
