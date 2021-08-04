import Meta from './Meta';

function Layout({ children }) {
  return (
    <>
      <Meta />
      <main>{children}</main>
    </>
  );
}

export default Layout;
