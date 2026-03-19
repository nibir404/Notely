export default function MainLayout({ children }) {
  return (
    <div className="main-layout">
      <nav>Navbar Placeholder</nav>
      <main>{children}</main>
    </div>
  );
}
