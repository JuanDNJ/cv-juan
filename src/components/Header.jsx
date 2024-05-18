import Container from "./Container";
import Content from "./Content";
import Languages from "./Languages";
import UserBadget from "./UserBadget";
import SocialNetWork from "./SocialNetWork";

export default function Header() {
  return (
    <header className="relative  z-10">
      <section className="absolute top-0 w-full h-12 ">
        <Container addclass="h-full">
          <Content className="flex justify-end h-full">
            <Languages />
          </Content>
        </Container>
      </section>
      <Container addclass="decoration">
        <Content className="grid grid-cols-12 pt-8 pb-2">
          <UserBadget />
          <SocialNetWork />
        </Content>
      </Container>
    </header>
  );
}
