import { Suspense } from 'react';

export default async function ConfirmationPage({
  searchParams,
}: {
  searchParams: {
    email?: string;
  };
}) {
  const email = searchParams.email;

  return (
    <Suspense fallback={<div>Chargement...</div>}>
      <ConfirmationContent email={email} />
    </Suspense>
  );
}

function ConfirmationContent({ email }: { email?: string }) {
  return (
    <div className="min-h-[calc(100vh-100px)] bg-background flex items-center justify-center py-4 px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Inscription confirmée ! 🎉
          </h1>
          <p className="text-muted-foreground">
            Merci d&apos;avoir confirmé votre inscription à ma newsletter.
          </p>
        </div>

        <div className="bg-card border rounded-lg p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">
            Que se passe-t-il maintenant ?
          </h2>
          <ul className="text-left space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start">
              <span className="text-green-600 mr-2">✓</span>
              Vous recevrez mes derniers articles sur le développement web
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2">✓</span>
              Conseils sur l&apos;automatisation et les bonnes pratiques
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2">✓</span>
              Tendances du digital et actualités tech
            </li>
          </ul>
        </div>

        {email && (
          <div className="bg-muted rounded-lg p-4 mb-6">
            <p className="text-sm text-muted-foreground">
              Inscription confirmée pour : <strong>{email}</strong>
            </p>
          </div>
        )}

        <div className="space-y-4">
          <a
            href="/"
            className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            Retour à l&apos;accueil
          </a>
          <p className="text-xs text-muted-foreground">
            Vous pouvez vous désabonner à tout moment en cliquant sur le lien
            dans nos emails.
          </p>
        </div>
      </div>
    </div>
  );
}
