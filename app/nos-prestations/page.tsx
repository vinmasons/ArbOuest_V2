import { Metadata } from 'next';

import Abattage from '@components/services/Abattage';
import Elagage from '@components/services/Elagage';
import HeaderElagage from '@components/services/HeaderElagage';
import RevalorisationBois from '@components/services/Revalorisation';

import Haubanage from '../components/services/Haubanage';

export const metadata: Metadata = {
  title: 'Services d’Élagage, Abattage et Revalorisation du Bois - ARB’OUEST',
  description:
    'Explorez nos services d’élagage, abattage, et revalorisation du bois à Fouesnant. ARB’OUEST offre des solutions professionnelles pour tous vos besoins arboricoles.',
  keywords:
    'services d’élagage Fouesnant, abattage d’arbres, revalorisation du bois, gestion d’espaces verts, ARB’OUEST services',
};

export default function ServicesElagage() {
  return (
    <main>
      <HeaderElagage />
      <Elagage />
      <Haubanage />
      <Abattage />
      <RevalorisationBois />
    </main>
  );
}
