import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';
import Footer from './Footer';
import NewsletterModal from './NewsletterModal';

function Layout() {
  return (
    <>
      <Navigation />
      <main id="main-content">
        <Outlet />
      </main>
      <Footer />
      <NewsletterModal />
    </>
  );
}

export default Layout;
