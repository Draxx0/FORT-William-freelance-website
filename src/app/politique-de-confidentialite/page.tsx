import { siteConfig } from '@/lib/config';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title:
    'Politique de confidentialité - William FORT | Développeur web Freelance',
  description:
    'Politique de confidentialité et protection des données personnelles du site de William FORT, développeur web freelance.',
};

export default function PolitiqueDeConfidentialitePage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold mb-8 text-foreground">
            Politique de confidentialité
          </h1>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">
                1. Introduction
              </h2>
              <div className="space-y-4">
                <p className="text-foreground">
                  La présente politique de confidentialité décrit la manière
                  dont William FORT, micro-entrepreneur domicilié au 60 rue
                  François 1er, 75008 Paris (SIRET : 991 124 066 00010),
                  collecte, utilise et protège vos informations personnelles
                  lorsque vous visitez le site {siteConfig.url}.
                </p>
                <p className="text-foreground">
                  Nous nous engageons à protéger votre vie privée et à traiter
                  vos données personnelles de manière transparente et sécurisée,
                  conformément au Règlement Général sur la Protection des
                  Données (RGPD) et à la loi française &quot;Informatique et
                  Libertés&quot;.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">
                2. Responsable du traitement
              </h2>
              <div className="bg-muted/50 p-6 rounded-lg text-foreground">
                <p className="mb-2">
                  <strong className="text-foreground">Nom :</strong> William
                  FORT
                </p>
                <p className="mb-2">
                  <strong className="text-foreground">Statut :</strong>{' '}
                  Micro-entrepreneur
                </p>
                <p className="mb-2">
                  <strong className="text-foreground">Numéro SIRET :</strong>{' '}
                  991 124 066 00010
                </p>
                <p className="mb-2">
                  <strong className="text-foreground">Adresse :</strong> 60 rue
                  François 1er, 75008 Paris
                </p>
                <p className="mb-2">
                  <strong className="text-foreground">Email :</strong>{' '}
                  {siteConfig.links.email}
                </p>
                <p className="mb-2">
                  <strong className="text-foreground">Site web :</strong>{' '}
                  {siteConfig.url}
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">
                3. Données personnelles collectées
              </h2>
              <div className="space-y-4 text-foreground">
                <h3 className="text-xl font-medium text-foreground">
                  3.1 Données collectées automatiquement
                </h3>
                <ul className="list-disc pl-6 space-y-2 text-foreground">
                  <li>
                    <strong className="text-foreground">
                      Données de navigation :
                    </strong>{' '}
                    Adresse IP, type de navigateur, pages visitées, durée de
                    visite
                  </li>
                  <li>
                    <strong className="text-foreground">
                      Cookies techniques :
                    </strong>{' '}
                    Nécessaires au fonctionnement du site
                  </li>
                  <li>
                    <strong className="text-foreground">
                      Données d&apos;analytics :
                    </strong>{' '}
                    Statistiques de fréquentation (anonymisées)
                  </li>
                </ul>

                <h3 className="text-xl font-medium text-foreground">
                  3.2 Données collectées volontairement
                </h3>
                <ul className="list-disc pl-6 space-y-2 text-foreground  ">
                  <li>
                    <strong className="text-foreground">
                      Formulaire de contact :
                    </strong>{' '}
                    Nom, prénom, email, message
                  </li>
                  <li>
                    <strong className="text-foreground">Newsletter :</strong>{' '}
                    Adresse email (avec consentement explicite)
                  </li>
                  <li>
                    <strong className="text-foreground">
                      Demandes de devis :
                    </strong>{' '}
                    Informations de contact et détails du projet
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">
                4. Finalités du traitement
              </h2>
              <div className="space-y-4">
                <p className="text-foreground">
                  Vos données personnelles sont collectées et traitées pour les
                  finalités suivantes :
                </p>
                <ul className="list-disc pl-6 space-y-2 text-foreground">
                  <li>
                    <strong className="text-foreground">
                      Gestion des demandes de contact :
                    </strong>{' '}
                    Répondre à vos questions et demandes
                  </li>
                  <li>
                    <strong className="text-foreground">
                      Envoi de la newsletter :
                    </strong>{' '}
                    Vous tenir informé de nos actualités (avec votre
                    consentement)
                  </li>
                  <li>
                    <strong className="text-foreground">
                      Établissement de devis :
                    </strong>{' '}
                    Analyser vos besoins et proposer nos services
                  </li>
                  <li>
                    <strong className="text-foreground">
                      Amélioration du site :
                    </strong>{' '}
                    Analyser l&apos;utilisation du site pour l&apos;optimiser
                  </li>
                  <li>
                    <strong className="text-foreground">
                      Obligations légales :
                    </strong>{' '}
                    Respecter les obligations comptables et fiscales
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">
                5. Base légale du traitement
              </h2>
              <div className="space-y-4">
                <ul className="list-disc pl-6 space-y-2 text-foreground">
                  <li>
                    <strong className="text-foreground">Consentement :</strong>{' '}
                    Pour l&apos;envoi de la newsletter et les cookies non
                    essentiels
                  </li>
                  <li>
                    <strong className="text-foreground">
                      Intérêt légitime :
                    </strong>{' '}
                    Pour répondre aux demandes de contact et améliorer le site
                  </li>
                  <li>
                    <strong className="text-foreground">
                      Exécution contractuelle :
                    </strong>{' '}
                    Pour la réalisation des services demandés
                  </li>
                  <li>
                    <strong className="text-foreground">
                      Obligation légale :
                    </strong>{' '}
                    Pour les obligations comptables et fiscales
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">
                6. Durée de conservation
              </h2>
              <div className="space-y-4">
                <ul className="list-disc pl-6 space-y-2 text-foreground">
                  <li>
                    <strong className="text-foreground">
                      Données de contact :
                    </strong>{' '}
                    3 ans après le dernier contact
                  </li>
                  <li>
                    <strong className="text-foreground">Newsletter :</strong>{' '}
                    Jusqu&apos;au désabonnement
                  </li>
                  <li>
                    <strong className="text-foreground">
                      Données clients :
                    </strong>{' '}
                    10 ans (obligation comptable)
                  </li>
                  <li>
                    <strong className="text-foreground">
                      Données de navigation :
                    </strong>{' '}
                    13 mois maximum
                  </li>
                  <li>
                    <strong className="text-foreground">Cookies :</strong> Selon
                    leur type (session, 13 mois maximum)
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">
                7. Partage et transfert des données
              </h2>
              <div className="space-y-4">
                <p className="text-foreground">
                  Vos données personnelles ne sont pas vendues, louées ou
                  partagées avec des tiers, sauf dans les cas suivants :
                </p>
                <ul className="list-disc pl-6 space-y-2 text-foreground">
                  <li>
                    <strong className="text-foreground">
                      Prestataires techniques :
                    </strong>{' '}
                    Vercel (hébergement), services d&apos;email (avec garanties
                    RGPD)
                  </li>
                  <li>
                    <strong className="text-foreground">
                      Obligations légales :
                    </strong>{' '}
                    Autorités compétentes si requis par la loi
                  </li>
                  <li>
                    <strong className="text-foreground">
                      Protection des droits :
                    </strong>{' '}
                    Pour protéger nos droits légaux ou ceux de tiers
                  </li>
                </ul>
                <p className="text-foreground">
                  <strong className="text-foreground">
                    Transferts internationaux :
                  </strong>{' '}
                  Certains de nos prestataires peuvent être situés hors de
                  l&apos;UE. Dans ce cas, nous nous assurons qu&apos;ils offrent
                  un niveau de protection adéquat (clauses contractuelles types,
                  décision d&apos;adéquation de la Commission européenne).
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">
                8. Sécurité des données
              </h2>
              <div className="space-y-4">
                <p className="text-foreground">
                  Nous mettons en œuvre des mesures techniques et
                  organisationnelles appropriées pour protéger vos données :
                </p>
                <ul className="list-disc pl-6 space-y-2 text-foreground">
                  <li>
                    <strong className="text-foreground">Chiffrement :</strong>{' '}
                    Connexions HTTPS sécurisées
                  </li>
                  <li>
                    <strong className="text-foreground">
                      Accès restreint :
                    </strong>{' '}
                    Seules les personnes autorisées accèdent aux données
                  </li>
                  <li>
                    <strong className="text-foreground">Sauvegardes :</strong>{' '}
                    Données sauvegardées régulièrement
                  </li>
                  <li>
                    <strong className="text-foreground">Mise à jour :</strong>{' '}
                    Systèmes et logiciels maintenus à jour
                  </li>
                  <li>
                    <strong className="text-foreground">Formation :</strong>{' '}
                    Sensibilisation aux bonnes pratiques de sécurité
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">
                9. Vos droits
              </h2>
              <div className="space-y-4">
                <p className="text-foreground">
                  Conformément au RGPD, vous disposez des droits suivants :
                </p>
                <ul className="list-disc pl-6 space-y-2 text-foreground">
                  <li>
                    <strong className="text-foreground">
                      Droit d&apos;accès :
                    </strong>{' '}
                    Connaître les données que nous détenons sur vous
                  </li>
                  <li>
                    <strong className="text-foreground">
                      Droit de rectification :
                    </strong>{' '}
                    Corriger des données inexactes
                  </li>
                  <li>
                    <strong className="text-foreground">
                      Droit d&apos;effacement :
                    </strong>{' '}
                    Demander la suppression de vos données
                  </li>
                  <li>
                    <strong className="text-foreground">
                      Droit à la limitation :
                    </strong>{' '}
                    Limiter le traitement de vos données
                  </li>
                  <li>
                    <strong className="text-foreground">
                      Droit à la portabilité :
                    </strong>{' '}
                    Récupérer vos données dans un format structuré
                  </li>
                  <li>
                    <strong className="text-foreground">
                      Droit d&apos;opposition :
                    </strong>{' '}
                    Vous opposer au traitement de vos données
                  </li>
                  <li className="text-foreground">
                    <strong className="text-foreground">
                      Droit de retrait du consentement :
                    </strong>{' '}
                    Retirer votre consentement à tout moment
                  </li>
                </ul>
                <p className="text-foreground">
                  Pour exercer ces droits, contactez-nous à l&apos;adresse{' '}
                  {siteConfig.links.email}. Nous vous répondrons dans un délai
                  d&apos;un mois.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">
                10. Cookies et technologies similaires
              </h2>
              <div className="space-y-4">
                <h3 className="text-xl font-medium text-foreground">
                  10.1 Types de cookies utilisés
                </h3>
                <ul className="list-disc pl-6 space-y-2 text-foreground">
                  <li className="text-foreground">
                    <strong className="text-foreground">
                      Cookies techniques :
                    </strong>{' '}
                    Nécessaires au fonctionnement du site (pas de consentement
                    requis)
                  </li>
                  <li className="text-foreground">
                    <strong className="text-foreground">
                      Cookies d&apos;analytics :
                    </strong>{' '}
                    Mesure d&apos;audience (avec votre consentement)
                  </li>
                  <li className="text-foreground">
                    <strong className="text-foreground">
                      Cookies de préférences :
                    </strong>{' '}
                    Mémorisation de vos choix (avec votre consentement)
                  </li>
                </ul>

                <h3 className="text-xl font-medium text-foreground">
                  10.2 Gestion des cookies
                </h3>
                <p className="text-foreground">
                  Vous pouvez gérer vos préférences de cookies via les
                  paramètres de votre navigateur ou notre bannière de
                  consentement. Le refus des cookies non essentiels
                  n&apos;affecte pas le fonctionnement du site.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">
                11. Modifications de la politique
              </h2>
              <div className="space-y-4">
                <p className="text-foreground">
                  Cette politique de confidentialité peut être modifiée pour
                  refléter les changements dans nos pratiques ou pour
                  d&apos;autres raisons opérationnelles, légales ou
                  réglementaires.
                </p>
                <p className="text-foreground">
                  Toute modification substantielle vous sera notifiée par email
                  ou via un avis sur le site. La date de dernière mise à jour
                  est indiquée en bas de cette page.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">
                12. Contact et réclamations
              </h2>
              <div className="space-y-4">
                <p className="text-foreground">
                  Pour toute question concernant cette politique de
                  confidentialité ou le traitement de vos données, vous pouvez
                  nous contacter :
                </p>
                <div className="bg-muted/50 p-6 rounded-lg">
                  <p className="mb-2 text-foreground">
                    <strong className="text-foreground">Email :</strong>{' '}
                    {siteConfig.links.email}
                  </p>
                  <p className="mb-2 text-foreground">
                    <strong className="text-foreground">Adresse :</strong> 60
                    rue François 1er, 75008 Paris
                  </p>
                </div>
                <p className="text-foreground">
                  Vous avez également le droit d&apos;introduire une réclamation
                  auprès de la CNIL (Commission Nationale de l&apos;Informatique
                  et des Libertés) si vous estimez que vos droits ne sont pas
                  respectés.
                </p>
                <p className="text-foreground">
                  <strong className="text-foreground">CNIL :</strong> 3 Place de
                  Fontenoy - TSA 80715 - 75334 PARIS CEDEX 07
                </p>
              </div>
            </section>

            <section className="border-t pt-8">
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">
                  Dernière mise à jour :
                </strong>{' '}
                16 septembre 2025
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
