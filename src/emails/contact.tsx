import { Prospect } from '@/app/api/contact/route';
import {
  Body,
  Column,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Row,
  Section,
  Text,
} from '@react-email/components';

export const ContactEmail = ({
  email,
  fullName,
  message,
  phone,
  services,
}: Prospect) => {
  return (
    <Html>
      <Head />
      <Body style={main}>
        <Preview>Nouvelle prise de contact - {fullName}</Preview>
        <Container>
          <Section style={content}>
            <Row style={{ ...boxInfos, paddingBottom: '0', display: 'flex' }}>
              <Column>
                <Heading
                  style={{
                    fontSize: 32,
                    fontWeight: 'bold',
                    textAlign: 'center',
                  }}
                >
                  Bonjour William,
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
                    Nouvelle demande - Freelance 👨‍💻
                  </Text>
                </Heading>

                <Text style={{ ...paragraph, marginTop: -5 }}>
                  <b>Nom complet : </b>
                  {fullName}
                </Text>
                <Text style={{ ...paragraph, marginTop: -5 }}>
                  <b>Adresse email : </b>
                  {email}
                </Text>
                <Text style={{ ...paragraph, marginTop: -5 }}>
                  <b>Numéro de téléphone : </b>
                  {phone}
                </Text>
                <Text style={{ ...paragraph, marginTop: -5 }}>
                  <b>Services : </b>
                  {services.map((service, i) => (
                    <span key={i}>
                      {service}
                      {i < services.length - 1 && ', '}
                    </span>
                  ))}
                </Text>
                <Text style={{ ...paragraph, marginTop: -5 }}>
                  <b>Message : </b>
                  {message}
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
            © {new Date().getFullYear()} | William FORT, France |
            freelance.williamfort.fr
          </Text>
        </Container>
      </Body>
    </Html>
  );
};

export default ContactEmail;

const main = {
  backgroundColor: '#dd3e3e1a',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const paragraph = {
  color: 'black',
  fontSize: 16,
};

const content = {
  border: '1px solid rgb(0,0,0, 0.1)',
  borderRadius: '3px',
  overflow: 'hidden',
};

const boxInfos = {
  padding: '20px',
};
