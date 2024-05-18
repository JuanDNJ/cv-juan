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
                    {firstCharAtToUpperCase(t("name"))}: {t("firstName")}
                    {t("surname")}
                  </span>
                  <span>
                    {firstCharAtToUpperCase(t("birthdate"))}: {t("dateOfBirth")}
                  </span>
                </FlexCol>
              </Card>
              <Card title="contact">
                <FlexCol>
                  <span>
                    Email:&nbsp;
                    <a href={`mailto:${t("contacts.email")}`}>
                      {t("contacts.email")}
                    </a>
                  </span>
                  <span>
                    Phones: {t("phones.phone1")} &nbsp; - &nbsp;{" "}
                    {t("phones.phone2")}
                  </span>
                  <span>Address: {t("contacts.address")}</span>
                  <span>
                    Web: <a href={t("contacts.web")}>{t("contacts.web")}</a>
                  </span>
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
                </UnOrderedList>
              </Card>
            </FlexCol>
          </Column>
        </Content>
      </Container>
    </Fragment>
  );
}
