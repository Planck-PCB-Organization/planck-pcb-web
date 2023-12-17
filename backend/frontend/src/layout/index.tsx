import Content from "./Content";
import Header from "./Header";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = (props: LayoutProps) => {
  const { children } = props;
  return (
    <>
      <Header
        id="header"
        logo="/PLANCK_LOGO.png"
        navLinks={[
          { id: "#section-1", title: "Anaddddsayfa" },
          { id: "#section-2", title: "Hakkımızda" },
          { id: "#section-3", title: "Hizmetlerimiz" },
          { id: "#section-4", title: "Sipariş Ver" },
          { id: "#section-5", title: "İletişim" },
        ]}
      />
      <Content>{children}</Content>
    </>
  );
};

export default Layout;
