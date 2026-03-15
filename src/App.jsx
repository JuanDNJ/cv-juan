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
import SetInnerHTML from "./components/SetInnerHTML";

export default function App() {
  const { t } = useTranslation();
  return (
    <Fragment>
      <Header />
      <Container>
        <Content className="page-grid grid gap-6 md:grid-cols-2">
          <Column className="py-2 md:py-4">
            <FlexCol addclass="gap-6">
              <Card title="aboutMe.title">
                <Text>{t("aboutMe.item1")}</Text>
                <Text>{t("aboutMe.item2")}</Text>
                <Text>{t("aboutMe.item3")}</Text>
                <Text>{t("aboutMe.item4")}</Text>
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

              <Card title="skills" addclass="print-room-card">
                <UnOrderedList addclass="grid grid-cols-2 gap-2">
                  {technologicalSkills.map((tech) => (
                    <LinkSkill key={tech.id} data={tech} />
                  ))}
                </UnOrderedList>
              </Card>

              <Card title="contact" addclass="print-room-card">
                <FlexCol addclass="gap-3">
                  <a
                    className="contact-item"
                    href={`mailto:${t("contacts.email")}`}
                    title={firstCharAtToUpperCase(t("email"))}
                  >
                    <Email className="contact-icon" height="1.25em" width="1.25em" fill="currentColor" />
                    <small>{t("contacts.email")}</small>
                  </a>

                  <span
                    className="contact-item flex-wrap"
                    title={firstCharAtToUpperCase(t("phone"))}
                  >
                    <Phone className="contact-icon" height="1.25em" width="1.25em" fill="currentColor" />
                    <a href={`tel:${t("phones.phone1")}`} title={`${t("phones.phone1")}`} className="inline-contact-link">
                      <small>{t("phones.phone1")}</small>
                    </a>
                    <span className="contact-separator">/</span>
                    <a href={`tel:${t("phones.phone2")}`} title={`${t("phones.phone2")}`} className="inline-contact-link">
                      <small>{t("phones.phone2")}</small>
                    </a>
                  </span>
                  <span className="contact-item" title={`${t("contacts.whatsapp")}`}>
                    <Whatsapp className="contact-icon" height="1.25em" width="1.25em" fill="currentColor" />
                    <a target="_blank" href={`https://wa.me/34640282614`} title={`${t("contacts.whatsapp")}`} className="inline-contact-link"><small>{t("contacts.whatsapp")}</small></a>
                  </span>
                  <a
                    className="contact-item"
                    title={firstCharAtToUpperCase(t("web"))}
                    href={t("contacts.web")}
                  >
                    <WebAddress className="contact-icon" fill="currentColor" height="1.25em" width="1.25em" />
                    <small>{t("contacts.web")}</small>
                  </a>
                  <span
                    className="contact-item"
                    title={firstCharAtToUpperCase(t("address"))}
                  >
                    <Address className="contact-icon" height="1.25em" width="1.25em" fill="currentColor" />
                    <SetInnerHTML text="contacts.address" />
                  </span>
                </FlexCol>
              </Card>
            </FlexCol>
          </Column>
          <Column className="py-2 md:py-4">
            <FlexCol addclass="gap-6">
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
                </UnOrderedList>
              </Card>
              <Card title="professionalExperiencie.title">
                <UnOrderedList>
                  <ItemList text="professionalExperiencie.item9" />
                  <ItemList text="professionalExperiencie.item1" />
                  <ItemList text="professionalExperiencie.item2" />
                  <ItemList text="professionalExperiencie.item3" />
                </UnOrderedList>
              </Card>
              {/* <Card title="dataOfInterest.title">
                <UnOrderedList>
                  <ItemList text="dataOfInterest.item1" />
                  <ItemList text="dataOfInterest.item2" />
                  <ItemList text="dataOfInterest.item3" />
                </UnOrderedList>
              </Card> */}
            </FlexCol>
          </Column>
        </Content>
      </Container>
    </Fragment>
  );
}
