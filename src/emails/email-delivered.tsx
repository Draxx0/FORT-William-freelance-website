import {
  Body,
  Column,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Preview,
  Row,
  Section,
  Text,
} from '@react-email/components';

const websiteUrl = 'https://williamfort.fr';

export const ConfirmationEmail = ({
  email,
  fullName,
}: {
  email: string;
  fullName: string;
}) => {
  return (
    <Html>
      <Head />
      <Body style={main}>
        <Preview>J&apos;ai bien reçu votre message !</Preview>
        <Container>
          <Section style={content}>
            <Row
              style={{
                backgroundColor: '#dd3e3e',
                padding: '30px',
                width: 'fit-content',
                float: 'left',
                marginTop: '20px',
                borderRadius: '50%',
              }}
            >
              <Img
                style={image}
                width={48}
                src={`${websiteUrl}/icons/logo-white.svg`}
              />
            </Row>
            <Row style={{ ...boxInfos, paddingBottom: '0', display: 'flex' }}>
              <Column>
                <Heading
                  style={{
                    fontSize: 32,
                    fontWeight: 'bold',
                    textAlign: 'center',
                  }}
                >
                  Bonjour {fullName},
                </Heading>
                <Heading
                  as="h2"
                  style={{
                    fontSize: 24,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    marginBottom: 20,
                  }}
                >
                  <Text style={{ fontSize: 24, color: '#dd3e3e' }}>
                    Votre message bien reçu 👨‍💻
                  </Text>
                </Heading>

                <Text style={{ ...paragraph, marginTop: -5 }}>
                  Merci pour votre message ! Je l&apos;ai bien reçu et je vais y
                  répondre dès que possible.
                </Text>
                <Text style={{ ...paragraph, marginTop: -5 }}>
                  <b>Email de contact : </b>
                  {email}
                </Text>
                <Text style={{ ...paragraph, marginTop: -5 }}>
                  En tant que freelance, je traite chaque demande
                  personnellement. Si c&apos;est urgent, n&apos;hésitez pas à me
                  relancer.
                </Text>
                <Text style={{ ...paragraph, marginTop: -5 }}>
                  À très vite,
                </Text>
                <Text
                  style={{ ...paragraph, marginTop: -5, fontWeight: 'bold' }}
                >
                  William FORT
                </Text>
              </Column>
            </Row>
          </Section>

          <Text
            style={{
              textAlign: 'center',
              fontSize: 12,
              color: 'rgb(0,0,0, 0.7)',
            }}
          >
            Ce message est automatique, mais promis, je vous réponds très vite
            😉. © {new Date().getFullYear()} | William FORT |
            freelance.williamfort.fr
          </Text>
        </Container>
      </Body>
    </Html>
  );
};

export default ConfirmationEmail;

const main = {
  backgroundColor: '#dd3e3e1a',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const paragraph = {
  fontSize: 16,
};

const content = {
  border: '1px solid rgb(0,0,0, 0.1)',
  borderRadius: '3px',
  overflow: 'hidden',
};

const image = {
  maxWidth: '100%',
};

const boxInfos = {
  padding: '20px',
};
