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
import LinkSkill from "./components/LinkSkill";
import Whatsapp from "./components/svg/Whatsapp";

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
              {/* <Card title="personalInformation">
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
              </Card> */}
              <Card title="contact">
                <FlexCol>
                  <a
                    className=" hover:underline"
                    href={`mailto:${t("contacts.email")}`}
                    title={firstCharAtToUpperCase(t("email"))}
                  >
                    <div className="flex place-items-center gap-2">
                      <Email height="1.5em" width="1.5em" fill="#333" />
                      <small>{t("contacts.email")} </small>
                    </div>
                  </a>

                  <span
                    className="flex place-items-center gap-1"
                    title={firstCharAtToUpperCase(t("phone"))}
                  >
                    <Phone height="1.5em" width="1.5em" fill="green" />
                    <a href={`tel:${t("phones.phone1")}`} title={`${t("phones.phone1")}`} className=" hover:underline">
                      <small>{t("phones.phone1")}</small></a>,
                    <a href={`tel:${t("phones.phone2")}`} title={`${t("phones.phone2")}`} className=" hover:underline">
                      <small>{t("phones.phone2")}</small>
                    </a>
                  </span>
                  <span className="flex place-items-center gap-1" title={`${t("contacts.whatsapp")}`}>
                    <Whatsapp height="1.5em" width="1.5em" fill="green" />
                    <a target="_blank" href={`https://wa.me/34640282614`} title={`${t("contacts.whatsapp")}`} className=" hover:underline"><small>{t("contacts.whatsapp")}</small></a>
                  </span>
                  <a
                    className="hover:underline"
                    title={firstCharAtToUpperCase(t("web"))}
                    href={t("contacts.web")}
                  >
                    <div className="flex place-items-center gap-1">
                      <WebAddress fill="skyblue" height="1.5em" width="1.5em" />
                      <small>{t("contacts.web")} </small>
                    </div>
                  </a>
                  <span
                    className="flex place-items-center gap-1"
                    title={firstCharAtToUpperCase(t("address"))}
                  >
                    <Address height="1.5em" width="1.5em" fill="red" />
                    <small> {t("contacts.address")}</small>
                  </span>
                </FlexCol>
              </Card>

              <Card title="skills">
                <UnOrderedList addclass="flex flex-col gap-2">
                  {technologicalSkills.map((tech) => (
                    <LinkSkill key={tech.id} data={tech} />
                  ))}
                </UnOrderedList>
              </Card>
              <Card title="dataOfInterest.title">
                <UnOrderedList>
                  <ItemList text="dataOfInterest.item1" />
                  <ItemList text="dataOfInterest.item2" />
                  <ItemList text="dataOfInterest.item3" />
                </UnOrderedList>
              </Card>
            </FlexCol>
          </Column>
          <Column className="py-4">
            <FlexCol addclass="gap-4">
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
            </FlexCol>
          </Column>
        </Content>
      </Container>
    </Fragment>
  );
}
