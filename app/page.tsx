import HomeFaq from '@components/home/HomeFaq';
import HomeHeader from '@components/home/HomeHeader';
import HomeQui from '@components/home/HomeQui';
import HomeQuiSuisJe from '@components/home/HomeQuiSuisJe';
import HomeVilles from '@components/home/HomeVilles';
import SliderHome from '@components/home/SliderHome';

import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'ARB’OUEST - Expertise en Élagage et Abattage à Fouesnant',
  description:
    "Découvrez ARB’OUEST, votre spécialiste en élagage et abattage à Fouesnant. Services professionnels pour la gestion et l'entretien de vos espaces verts.",
  keywords:
    'élagage Fouesnant, abattage Fouesnant, haubanage, revalorisation bois, services arboricoles',
};

export default function Home() {
  return (
    <main>
      <HomeHeader />
      <HomeQui />
      <HomeQuiSuisJe />
      <SliderHome />
      <HomeVilles />
      <HomeFaq />
    </main>
  );
}
