import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
} from '@react-email/components';

interface NewsletterConfirmationEmailProps {
  email: string;
  confirmationUrl: string;
}

export const NewsletterConfirmationEmail = ({
  email,
  confirmationUrl,
}: NewsletterConfirmationEmailProps) => {
  return (
    <Html>
      <Head />
      <Body style={main}>
        <Preview>Confirmez votre inscription à la newsletter</Preview>
        <Container style={container}>
          <Section style={header}>
            <Text style={headerText}>William FORT • Web & Automatisation</Text>
          </Section>

          <Section style={content}>
            <Heading style={mainTitle}>Confirmez votre inscription 📧</Heading>
            <Text style={mainText}>Bonjour,</Text>
            <Text style={mainText}>
              Vous avez demandé à vous inscrire à ma newsletter avec
              l&apos;adresse email <strong>{email}</strong>.
            </Text>
            <Text style={mainText}>
              Pour confirmer votre inscription et commencer à recevoir mes
              articles, cliquez sur le bouton ci-dessous :
            </Text>
            <div style={buttonContainer}>
              <Button href={confirmationUrl} style={button}>
                Confirmer mon inscription
              </Button>
            </div>
          </Section>

          <Section style={featureSection}>
            <Heading style={featureTitle}>
              Une fois confirmée, vous recevrez mes derniers articles sur :
            </Heading>
            <Text style={featureText}>
              • Le développement web et les technologies modernes
              <br />
              • L&apos;automatisation des processus métier
              <br />
              • Les bonnes pratiques UX/UI
              <br />
              • Les conseils SEO et performance
              <br />• Les tendances du digital
            </Text>
          </Section>

          <Section style={featureSectionAlt}>
            <Text style={featureText}>
              Si vous n&apos;avez pas demandé cette inscription, vous pouvez
              ignorer cet email.
            </Text>
          </Section>

          <Section style={ctaSection}>
            <Text style={ctaText}>
              Cordialement,
              <br />
              <strong>William FORT</strong>
              <br />
              Développeur Web & Automatisation
            </Text>
          </Section>

          <Section style={footer}>
            <Text style={footerText}>
              Vous recevez ce mail car vous vous êtes inscrit·e à la newsletter
              de <strong>William FORT</strong>.
            </Text>
            <Text style={footerText}>
              <a href="#" style={unsubscribeLink}>
                Se désinscrire
              </a>
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default NewsletterConfirmationEmail;

const main = {
  backgroundColor: '#f6f6f6',
  padding: '20px 0',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  width: '650px',
  maxWidth: '650px',
  margin: '0 auto',
  backgroundColor: '#ffffff',
  borderRadius: '10px',
  overflow: 'hidden',
  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.05)',
};

const header = {
  padding: '22px 24px',
  backgroundColor: '#dd3e3e',
  textAlign: 'center' as const,
};

const headerText = {
  fontSize: '22px',
  fontWeight: '700',
  color: '#ffffff',
  textDecoration: 'none',
  margin: '0',
};

const content = {
  padding: '32px 24px 20px 24px',
  textAlign: 'center' as const,
};

const mainTitle = {
  margin: '0 0 12px',
  fontSize: '26px',
  color: '#333',
};

const mainText = {
  margin: '0 0 18px',
  fontSize: '16px',
  color: '#555',
  maxWidth: '520px',
  lineHeight: '1.6',
  marginLeft: 'auto',
  marginRight: 'auto',
};

const buttonContainer = {
  textAlign: 'center' as const,
  margin: '20px 0',
};

const button = {
  display: 'inline-block',
  background: '#dd3e3e',
  color: '#fff',
  fontWeight: '600',
  textDecoration: 'none',
  padding: '14px 26px',
  borderRadius: '6px',
  fontSize: '15px',
  border: 'none',
  cursor: 'pointer',
};

const featureSection = {
  padding: '28px 24px',
  backgroundColor: '#fafafa',
  borderTop: '1px solid #eee',
};

const featureSectionAlt = {
  padding: '28px 24px',
  backgroundColor: '#ffffff',
  borderTop: '1px solid #eee',
};

const featureTitle = {
  margin: '0 0 10px',
  fontSize: '20px',
  color: '#333',
};

const featureText = {
  margin: '0 0 14px',
  fontSize: '15px',
  color: '#555',
  lineHeight: '1.6',
};

const ctaSection = {
  padding: '36px 24px',
  textAlign: 'center' as const,
};

const ctaTitle = {
  margin: '0 0 12px',
  fontSize: '22px',
  color: '#333',
};

const ctaText = {
  margin: '0 0 20px',
  fontSize: '16px',
  color: '#555',
  lineHeight: '1.6',
  maxWidth: '520px',
  marginLeft: 'auto',
  marginRight: 'auto',
};

const footer = {
  padding: '20px 24px',
  fontSize: '13px',
  color: '#777',
  backgroundColor: '#f6f6f6',
  textAlign: 'center' as const,
};

const footerText = {
  margin: '0 0 6px',
};

const unsubscribeLink = {
  color: '#dd3e3e',
  textDecoration: 'none',
};
