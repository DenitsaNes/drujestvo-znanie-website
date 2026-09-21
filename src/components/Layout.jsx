import { Outlet } from 'react-router-dom';
import TopBar from './TopBar';
import Navigation from './Navigation';
import Footer from './Footer';

function Layout() {
  return (
    <>
      <TopBar />
      <Navigation />
      <main id="main-content">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
