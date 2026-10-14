import { Outlet } from 'react-router-dom';
import AnnouncementBar from './AnnouncementBar';
import Header from './Header';
import Footer from './Footer';
import CookieBanner from './CookieBanner';
import { useScrollToHash } from '../hooks/useScrollToHash';

function Layout() {
  useScrollToHash();
  return (
    <>
      <a className="skip" href="#main">Към съдържанието</a>
      <div className="site-top">
        <AnnouncementBar />
        <Header />
      </div>
      <main id="main">
        <Outlet />
      </main>
      <Footer />
      <CookieBanner />
    </>
  );
}

export default Layout;
