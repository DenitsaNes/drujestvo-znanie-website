import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Board from './pages/Board';
import Activities from './pages/Activities';
import Contacts from './pages/Contacts';
import CourseRegistration from './pages/CourseRegistration';
import CourseDetail from './pages/CourseDetail';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="za-nas" element={<About />} />
          <Route path="upravitelen-savet" element={<Board />} />
          <Route path="deynost" element={<Activities />} />
          <Route path="deynost/:courseId" element={<CourseDetail />} />
          <Route path="kontakti" element={<Contacts />} />
          <Route path="zapisi" element={<CourseRegistration />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
