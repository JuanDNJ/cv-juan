import { Fragment } from "react";
import { useTranslation } from "react-i18next";
import { firstCharAtToUpperCase, technologicalSkills } from "./utils";
import {
  Card,
  Container,
  Header,
  Content,
  Column,
  Text,
  UnOrderedList,
  ItemList,
  FlexCol,
} from "./components";
import Email from "./components/svg/Email";
import Phone from "./components/svg/Phone";
import Address from "./components/svg/Address";
import WebAddress from "./components/svg/WebAddress";

export default function App() {
  const { t } = useTranslation();
  return (
    <Fragment>
      <Header />
      <Container>
        <Content className="grid md:grid-cols-2 gap-4">
          <Column className="py-4">
            <FlexCol addclass="gap-4">
              <Card title="aboutMe.title">
                <Text>{t("aboutMe.item1")}</Text>
                <Text>{t("aboutMe.item2")}</Text>
              </Card>
              <Card title="personalInformation">
                <FlexCol>
                  <span>
                    <strong>{firstCharAtToUpperCase(t("name"))}</strong>:&nbsp;
                    {t("firstName")}&nbsp;
                    {t("surname")}
                  </span>
                  <span>
                    <strong>{firstCharAtToUpperCase(t("birthdate"))}</strong>
                    :&nbsp;
                    {t("dateOfBirth")}
                  </span>
                </FlexCol>
              </Card>
              <Card title="contact">
                <FlexCol>
                  <a
                    className=" hover:underline"
                    href={`mailto:${t("contacts.email")}`}
                    title={firstCharAtToUpperCase(t("email"))}
                  >
                    <div className="flex place-items-center gap-2">
                      <Email height="1.5em" width="1.5em" fill="#333" />
                      <span>{t("contacts.email")} </span>
                    </div>
                  </a>

                  <span
                    className="flex place-items-center gap-1"
                    title={firstCharAtToUpperCase(t("phone"))}
                  >
                    <Phone height="1.5em" width="1.5em" fill="green" />
                    {t("phones.phone1")}&nbsp;, &nbsp;
                    {t("phones.phone2")}
                  </span>
                  <span
                    className="flex place-items-center gap-1"
                    title={firstCharAtToUpperCase(t("address"))}
                  >
                    <Address height="1.5em" width="1.5em" fill="red" />
                    {t("contacts.address")}
                  </span>

                  <a
                    className="hover:underline"
                    title={firstCharAtToUpperCase(t("web"))}
                    href={t("contacts.web")}
                  >
                    <div className="flex place-items-center gap-2">
                      <WebAddress fill="skyblue" height="1.5em" width="1.5em" />
                      <span>{t("contacts.web")} </span>
                    </div>
                  </a>
                </FlexCol>
              </Card>
              <Card title="dataOfInterest.title">
                <UnOrderedList>
                  <ItemList text="dataOfInterest.item1" />
                  <ItemList text="dataOfInterest.item2" />
                  <ItemList text="dataOfInterest.item3" />
                </UnOrderedList>
              </Card>
              <Card title="skills">
                <UnOrderedList addclass="grid grid-cols-5 md:grid-cols-8 gap-4 py-4">
                  {technologicalSkills.map((tech) => (
                    <a
                      target="_blank"
                      href={tech.href}
                      title={tech.name}
                      key={tech.id}
                      className="hover:scale-110 active:scale-95 transition-transform duration-300"
                    >
                      {tech.Component({
                        fill:
                          (tech.fill && tech.fill) ||
                          (tech.stroke && tech.stroke) ||
                          "",
                        height: "100%",
                        width: "100%",
                      })}
                    </a>
                  ))}
                </UnOrderedList>
              </Card>
            </FlexCol>
          </Column>
          <Column className="py-4">
            <FlexCol addclass="gap-4">
              <Card title="professionalExperiencie.title">
                <UnOrderedList>
                  <ItemList text="professionalExperiencie.item1" />
                  <ItemList text="professionalExperiencie.item2" />
                  <ItemList text="professionalExperiencie.item3" />
                  <ItemList text="professionalExperiencie.item4" />
                  <ItemList text="professionalExperiencie.item5" />
                  <ItemList text="professionalExperiencie.item6" />
                  <ItemList text="professionalExperiencie.item7" />
                  <ItemList text="professionalExperiencie.item8" />
                </UnOrderedList>
              </Card>
              <Card title="training.title">
                <UnOrderedList>
                  <ItemList text="training.item1" />
                  <ItemList text="training.item2" />
                  <ItemList text="training.item3" />
                  <ItemList text="training.item4" />
                  <ItemList text="training.item5" />
                  <ItemList text="training.item6" />
                  <ItemList text="training.item7" />
                  <ItemList text="training.item8" />
                  <ItemList text="training.item9" />
                  <ItemList text="training.item10" />
                  <ItemList text="training.item11" />
                </UnOrderedList>
              </Card>
            </FlexCol>
          </Column>
        </Content>
      </Container>
    </Fragment>
  );
}
