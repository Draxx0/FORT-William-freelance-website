import { siteConfig } from '@/lib/config';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Mentions légales - William FORT | Développeur web Freelance',
  description:
    'Mentions légales et informations légales du site de William FORT, développeur web freelance spécialisé en web et automatisations.',
};

export default function MentionsLegalesPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold mb-8 text-foreground">
            Mentions légales
          </h1>

          <div className="space-y-8 ">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">
                1. Éditeur du site
              </h2>
              <div className="bg-muted/50 text-foreground p-6 rounded-lg">
                <p className="mb-2">
                  <strong className="text-foreground">Nom :</strong> William
                  FORT
                </p>
                <p className="mb-2">
                  <strong className="text-foreground">Statut :</strong>{' '}
                  Micro-entrepreneur
                </p>
                <p className="mb-2">
                  <strong className="text-foreground">Activité :</strong>{' '}
                  Développement de sites web et automatisations
                </p>
                <p className="mb-2">
                  <strong className="text-foreground">Email :</strong>{' '}
                  {siteConfig.links.email}
                </p>
                <p className="mb-2">
                  <strong className="text-foreground">Site web :</strong>{' '}
                  {siteConfig.url}
                </p>

                <p>
                  <strong className="text-foreground">Numéro SIRET :</strong>{' '}
                  991 124 066 00010
                </p>
                <p>
                  <strong className="text-foreground">Code APE/NAF :</strong>{' '}
                  6201Z - Programmation informatique
                </p>
                <p>
                  <strong className="text-foreground">
                    Adresse de domiciliation :
                  </strong>{' '}
                  60 rue François 1er, 75008 Paris
                </p>
                <p>
                  <strong className="text-foreground">Régime fiscal :</strong>{' '}
                  Micro-entreprise
                </p>
                <p>
                  <strong className="text-foreground">Régime social :</strong>{' '}
                  Micro-social simplifié
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">
                2. Hébergement
              </h2>
              <div className="bg-muted/50 text-foreground p-6 rounded-lg">
                <p className="mb-2">
                  <strong className="text-foreground">Hébergeur :</strong>{' '}
                  Vercel Inc.
                </p>
                <p className="mb-2">
                  <strong className="text-foreground">Adresse :</strong> 340 S
                  Lemon Ave #4133, Walnut, CA 91789, États-Unis
                </p>
                <p className="mb-2">
                  <strong className="text-foreground">Site web :</strong>{' '}
                  <a
                    href="https://vercel.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    vercel.com
                  </a>
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">
                3. Propriété intellectuelle
              </h2>
              <div className="space-y-4">
                <p className="text-foreground">
                  L&apos;ensemble de ce site relève de la législation française
                  et internationale sur le droit d&apos;auteur et la propriété
                  intellectuelle. Tous les droits de reproduction sont réservés,
                  y compris pour les documents téléchargeables et les
                  représentations iconographiques et photographiques.
                </p>
                <p className="text-foreground">
                  La reproduction de tout ou partie de ce site sur un support
                  électronique quel qu&apos;il soit est formellement interdite
                  sauf autorisation expresse du directeur de la publication.
                </p>
                <p className="text-foreground">
                  Le logo et les éléments graphiques présents sur ce site sont
                  protégés par le droit d&apos;auteur. Toute reproduction,
                  distribution, modification ou utilisation non autorisée de ces
                  éléments sans l&apos;accord exprès de l&apos;auteur est
                  interdite et peut faire l&apos;objet de poursuites.
                </p>
              </div>
            </section>

            {/* Responsabilité */}
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">
                4. Responsabilité
              </h2>
              <div className="space-y-4 text-foreground">
                <p className="text-foreground">
                  Les informations contenues sur ce site sont aussi précises que
                  possible et le site remis à jour à différentes périodes de
                  l&apos;année, mais peut toutefois contenir des inexactitudes
                  ou des omissions.
                </p>
                <p className="text-foreground">
                  Si vous constatez une lacune, erreur ou ce qui parait être un
                  dysfonctionnement, merci de bien vouloir le signaler par
                  email, à l&apos;adresse {siteConfig.links.email}, en décrivant
                  le problème de la manière la plus précise possible.
                </p>
                <p className="text-foreground">
                  Tout contenu téléchargé se fait aux risques et périls de
                  l&apos;utilisateur et sous sa seule responsabilité. En
                  conséquence, ne saurait être tenu responsable d&apos;un
                  quelconque dommage subi par l&apos;ordinateur de
                  l&apos;utilisateur ou d&apos;une quelconque perte de données
                  consécutives au téléchargement.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">
                5. Liens hypertextes
              </h2>
              <div className="space-y-4 text-foreground text-foreground">
                <p>
                  Des liens hypertextes peuvent être présents sur le site.
                  L&apos;utilisateur est informé qu&apos;en cliquant sur ces
                  liens, il sortira du site {siteConfig.url}. Ce dernier
                  n&apos;a pas de contrôle sur les pages web sur lesquelles
                  aboutissent ces liens et ne saurait, en aucun cas, être
                  responsable de leur contenu.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">
                6. Cookies
              </h2>
              <div className="space-y-4 text-foreground">
                <p>
                  Le site {siteConfig.url} peut être amené à vous demander
                  l&apos;acceptation des cookies pour des besoins de
                  statistiques et d&apos;affichage. Un cookie est une
                  information déposée sur votre disque dur par le serveur du
                  site que vous visitez.
                </p>
                <p>
                  Il contient plusieurs données qui sont stockées sur votre
                  ordinateur dans un simple fichier texte auquel un serveur
                  accède pour lire et enregistrer des informations. Certaines
                  parties de ce site ne peuvent être fonctionnelles sans
                  l&apos;acceptation de cookies.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">
                7. Droit applicable
              </h2>
              <div className="space-y-4 text-foreground">
                <p className="text-foreground">
                  Tout litige en relation avec l&apos;utilisation du site{' '}
                  {siteConfig.url} est soumis au droit français. Il est fait
                  attribution exclusive de juridiction aux tribunaux compétents
                  de Paris.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">
                8. Contact
              </h2>
              <div className="bg-muted/50 p-6 rounded-lg text-foreground">
                <p className="mb-4">
                  Pour toute question concernant ces mentions légales, vous
                  pouvez me contacter :
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
                9. Politique de confidentialité
              </h2>
              <div className="space-y-4 text-foreground  ">
                <p className="text-foreground">
                  Pour plus d&apos;informations sur la collecte et le traitement
                  de vos données personnelles, consultez notre{' '}
                  <Link
                    href="/politique-de-confidentialite"
                    className="text-primary hover:underline"
                  >
                    politique de confidentialité
                  </Link>
                  .
                </p>
              </div>
            </section>

            <section className="border-t pt-8">
              <p className="text-sm text-muted-foreground text-foreground">
                <strong>Dernière mise à jour :</strong> 16 septembre 2025
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
