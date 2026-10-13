import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import { useEarlyPrice } from './hooks/useEarlyPrice';
import { ROUTES } from './content/site';
import Home from './pages/Home';
import SeminarOct28 from './pages/SeminarOct28';
import CourseRegistration from './pages/CourseRegistration';
import ThankYou from './pages/ThankYou';
import About from './pages/About';
import Contacts from './pages/Contacts';
import Privacy from './pages/Privacy';
import Cookies from './pages/Cookies';
import SeminarDetail from './pages/SeminarDetail';
import NotFound from './pages/NotFound';

function AppContent() {
  useEarlyPrice();
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.SEMINAR_28_OKT} element={<SeminarOct28 />} />
        <Route path={ROUTES.ZAPISI} element={<CourseRegistration />} />
        <Route path={ROUTES.BLAGODARIM} element={<ThankYou />} />
        <Route path={ROUTES.ZA_NAS} element={<About />} />
        <Route path={ROUTES.KONTAKTI} element={<Contacts />} />
        <Route path={ROUTES.PRIVACY} element={<Privacy />} />
        <Route path={ROUTES.COOKIES} element={<Cookies />} />
        <Route path="/deynost/:slug" element={<SeminarDetail />} />

        {/* Redirects */}
        <Route
          path="/seminar-trudovo-zakonodatelstvo-28-oktomvri"
          element={<Navigate to={ROUTES.SEMINAR_28_OKT} replace />}
        />
        <Route
          path="/deynost/trudov-kodeks"
          element={<Navigate to={ROUTES.SEMINAR_28_OKT} replace />}
        />
        <Route
          path="/upravitelen-savet"
          element={<Navigate to={`${ROUTES.ZA_NAS}#upravitelen-savet`} replace />}
        />
        <Route path="/biskvitki" element={<Navigate to={ROUTES.COOKIES} replace />} />

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
