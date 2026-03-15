import Container from "./Container";
import Content from "./Content";
import Languages from "./Languages";
import UserBadget from "./UserBadget";
import SocialNetWork from "./SocialNetWork";
import CardDownload from "./CardDownload";
import ThemeToggle from "./ThemeToggle";
export default function Header() {
  return (
    <header className="relative z-10 pt-4 md:pt-6">
      <section className="absolute top-4 w-full h-20">
        <Container addclass="h-full">
          <Content className="top-toolbar flex h-full items-center justify-between gap-3">
            <Languages />
            <div className="toolbar-actions flex items-center gap-1 md:gap-2">
              <ThemeToggle />
              <CardDownload />
            </div>
          </Content>
        </Container>
      </section>
      <Container addclass="decoration">
        <Content className="header-panel grid grid-cols-12 items-end gap-4 pt-24 pb-4 md:pt-24 md:pb-6">
          <UserBadget />
          <SocialNetWork />
        </Content>
      </Container>
    </header>
  );
}
