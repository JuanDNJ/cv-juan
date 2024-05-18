import { Fragment } from "react";
import Card from "./components/Card";
import Container from "./components/Container";
import Header from "./components/Header";
import Content from "./components/Content";
import Column from "./components/Column";
import Text from "./components/Text";
import UnOrderedList from "./components/UnOrderedList";
import ItemList from "./components/ItemList";
import FlexCol from "./components/FlexCol";
import { useTranslation } from "react-i18next";
import { firstCharAtToUpperCase } from "./utils";

export default function App() {
  const { t } = useTranslation();
  return (
    <Fragment>
      <Header />
      <Container>
        <Content className="grid md:grid-cols-2 py-4 gap-4">
          <Column className="py-4">
            <FlexCol addclass="gap-4">
              <Card title="aboutMe.title">
                <Text>{t("aboutMe.item1")}</Text>
                <Text>{t("aboutMe.item2")}</Text>
              </Card>
              <Card title="personalInformation">
                <FlexCol>
                  <span>
                    {firstCharAtToUpperCase(t("name"))}: {t("firstName")}{" "}
                    {t("surname")}
                  </span>
                  <span>
                    {firstCharAtToUpperCase(t("birthdate"))}: {t("dateOfBirth")}
                  </span>
                </FlexCol>
              </Card>
              <Card title="contact">
                <FlexCol>
                  <span>{t("contacts.email")}</span>
                  <span>
                    {t("phones.phone1")} &nbsp; - &nbsp; {t("phones.phone2")}
                  </span>
                  <span>{t("contacts.address")}</span>
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
                <Text>
                  Excepteur aute deserunt aliqua qui ex commodo laboris amet. Ad
                  ipsum ex deserunt consectetur nisi laboris exercitation. Do
                  velit officia excepteur do ex nostrud quis fugiat. Incididunt
                  eu tempor incididunt commodo mollit non mollit non culpa dolor
                  amet. Nostrud enim et nulla est dolor labore cupidatat irure
                  Lorem. Quis incididunt ad ea incididunt ea veniam qui eu irure
                  aliqua. Id nostrud mollit tempor id nulla fugiat eu.
                </Text>
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
