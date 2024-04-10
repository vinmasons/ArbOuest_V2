import {
  CheckCircleIcon,
  InformationCircleIcon,
} from '@heroicons/react/20/solid';

export default function PolitiqueConfidentialite() {
  return (
    <div className="bg-soft-cream px-6 py-32 lg:px-8">
      <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
        <p className="text-base font-semibold leading-7 text-vib-orange">
          Introduction
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Politique de Confidentialité
        </h1>
      </div>

      {/* Mentions Légales */}
      <div className="mx-auto mt-16 max-w-3xl text-base leading-7 text-gray-700">
        <h2 className="text-xl font-bold tracking-tight text-gray-900">
          Mentions Légales
        </h2>
        <h3 className="mt-4 text-lg font-semibold text-gray-900">
          1. Identification du Site et du Propriétaire :
        </h3>
        <p>Nom de l'entreprise: ARB'OUEST</p>
        <p>Adresse: 65 Hent du 29170 Fouesnant, France</p>
        <p>Email: contact@arbouest.com</p>
        <p>Téléphone: 06.58.19.19.32</p>
        <p>Numéro RCS: 984964759</p>
        <p>Numéro SIRET: 98496475900018</p>
        <p>Numéro TVA intra communautaire: FR70984964759</p>

        <h3 className="mt-4 text-lg font-semibold text-gray-900">
          2. Finalité du Site :
        </h3>
        <p>
          Le site a pour objectif principal d'attirer de nouveaux clients et de
          présenter nos services d'élagage, d'abattage, de haubanage, et de
          revalorisation du bois.
        </p>

        <h3 className="mt-4 text-lg font-semibold text-gray-900">
          3. Collecte de Données Personnelles :
        </h3>
        <p>
          Les informations personnelles collectées incluent : nom, prénom,
          adresse e-mail, numéro de téléphone, destinées à la publicité ciblée
          et à l'envoi de newsletters.
        </p>

        <h3 className="mt-4 text-lg font-semibold text-gray-900">
          4. Consentement et Droits des Utilisateurs :
        </h3>
        <p>
          Les utilisateurs donnent leur consentement au traitement de leurs
          données personnelles. Ils peuvent exercer leurs droits d'accès, de
          rectification et de suppression des données selon la loi française en
          vigueur.
        </p>

        <h3 className="mt-4 text-lg font-semibold text-gray-900">
          5. Cookies et Suivi en Ligne :
        </h3>
        <p>
          Le site utilise des cookies via Google Analytics pour améliorer
          l'expérience utilisateur et analyser le trafic. Les utilisateurs
          peuvent refuser l'utilisation des cookies à travers les paramètres de
          leur navigateur.
        </p>

        <h3 className="mt-4 text-lg font-semibold text-gray-900">
          6. Publicité et Marketing :
        </h3>
        <p>
          Les données sont également utilisées pour la publicité ciblée sur
          diverses plateformes en ligne et pour des analyses via Google
          Analytics et autres outils.
        </p>

        <h3 className="mt-4 text-lg font-semibold text-gray-900">
          7. Responsabilités et Limitations :
        </h3>
        <p>
          L'entreprise décline toute responsabilité en cas de problème lié à
          l'utilisation du site, conformément aux normes légales françaises.
        </p>

        <h3 className="mt-4 text-lg font-semibold text-gray-900">
          8. Loi Applicable et Juridiction Compétente :
        </h3>
        <p>
          En cas de litige, la loi française est applicable et les tribunaux de
          Quimper ou de Fouesnant sont compétents.
        </p>
      </div>
    </div>
  );
}
