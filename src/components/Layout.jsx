import { Outlet } from 'react-router-dom';
import AnnouncementBar from './AnnouncementBar';
import Header from './Header';
import Footer from './Footer';
import CookieBanner from './CookieBanner';

function Layout() {
  return (
    <>
      <a className="skip" href="#main">Към съдържанието</a>
      <AnnouncementBar />
      <Header />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
      <CookieBanner />
    </>
  );
}

export default Layout;
