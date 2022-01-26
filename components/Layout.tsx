import TopNav from "./TopNav";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="container-fluid content">
      <TopNav />
      {children}
    </div>
  );
};

export default Layout;
