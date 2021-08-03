import Meta from './Meta';
import Header from './Header';
function Layout({ children }) {
  return (
    <>
      <Meta />
      <Header />
      <main>{children}</main>
    </>
  );
}

export default Layout;
