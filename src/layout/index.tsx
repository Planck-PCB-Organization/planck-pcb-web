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
        logo="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
        navLinks={[
          { id: "#section-1", title: "Section 1" },
          { id: "#section-2", title: "Section 2" },
          { id: "#section-3", title: "Section 3" },
        ]}
      />
      <Content>{children}</Content>
    </>
  );
};

export default Layout;
