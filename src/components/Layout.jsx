import { Outlet } from 'react-router-dom';
import TopBar from './TopBar';
import Navigation from './Navigation';
import Footer from './Footer';
import NewsletterModal from './NewsletterModal';

function Layout() {
  return (
    <>
      <TopBar />
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
