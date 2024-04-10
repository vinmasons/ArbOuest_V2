import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Politique de Cookies - ARB’OUEST',
  description:
    'Découvrez comment ARB’OUEST utilise les cookies pour améliorer votre expérience sur notre site. Apprenez à gérer vos préférences de cookies.',
  keywords:
    'politique de cookies, gestion des cookies, cookies ARB’OUEST, cookies de session, cookies persistants, cookies publicitaires',
};
export default function PolitiqueCookies() {
  return (
    <div className="bg-soft-cream px-6 py-32 lg:px-8">
      <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Politique de Cookies
        </h1>
        <p className="mt-4">
          Cette politique de cookies explique comment ARB'OUEST utilise les
          cookies et autres technologies similaires sur son site web.
        </p>

        <h2 className="mt-8 text-xl font-bold text-gray-900">
          1. Qu'est-ce qu'un cookie ?
        </h2>
        <p>
          Un cookie est un petit fichier texte placé sur votre appareil lorsque
          vous visitez un site web. Les cookies ont de nombreuses fonctions
          différentes, telles que vous permettre de naviguer efficacement entre
          les pages, se souvenir de vos préférences et améliorer généralement
          votre expérience utilisateur.
        </p>

        <h2 className="mt-8 text-xl font-bold text-gray-900">
          2. Comment utilisons-nous les cookies ?
        </h2>
        <p>
          Nous utilisons des cookies pour diverses raisons, notamment pour
          assurer le bon fonctionnement de notre site web, pour comprendre
          comment les visiteurs interagissent avec notre site, pour
          personnaliser le contenu et les publicités, et pour mesurer
          l'efficacité de nos campagnes marketing.
        </p>

        <h2 className="mt-8 text-xl font-bold text-gray-900">
          3. Quels types de cookies utilisons-nous ?
        </h2>
        <ul>
          <li>
            Cookies de session : expirent lorsque vous fermez votre navigateur.
          </li>
          <li>
            Cookies persistants : restent sur votre appareil pour se souvenir de
            vos préférences.
          </li>
          <li>
            Cookies analytiques : collectent des informations sur votre
            interaction avec notre site.
          </li>
          <li>
            Cookies publicitaires : ciblent les publicités en fonction de vos
            intérêts.
          </li>
        </ul>

        <h2 className="mt-8 text-xl font-bold text-gray-900">
          4. Gestion des cookies
        </h2>
        <p>
          Vous pouvez gérer et supprimer les cookies via les paramètres de votre
          navigateur. La désactivation des cookies peut affecter la
          fonctionnalité de notre site.
        </p>

        <h2 className="mt-8 text-xl font-bold text-gray-900">
          5. Consentement
        </h2>
        <p>
          En utilisant notre site web, vous consentez à l'utilisation de cookies
          conformément à cette politique.
        </p>

        <h2 className="mt-8 text-xl font-bold text-gray-900">
          6. Mises à jour de la politique de cookies
        </h2>
        <p>
          Nous pouvons mettre à jour cette politique de cookies pour refléter
          les changements dans nos pratiques. Nous vous encourageons à consulter
          cette page régulièrement.
        </p>
      </div>
    </div>
  );
}
