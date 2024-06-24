'use client';
import React, { useEffect, useState } from 'react';

import { PictoBenodet } from '../shared/pictos/PictoBenodet';
import { PictoConcarneau } from '../shared/pictos/PictoConcarneau';
import { PictoDouarnenez } from '../shared/pictos/PictoDouarnenez';
import { PictoFouesnant } from '../shared/pictos/PictoFouesnant';
import { PictoPontAven } from '../shared/pictos/PictoPontAven';
import { PictoQuimper } from '../shared/pictos/PictoQuimper';

const villesDestinations = [
  {
    name: 'Quimper',
    description:
      "Expert en élagage et abattage, Arb'Ouest offre des services écologiques et sûrs à Quimper, en valorisant votre bois et en préservant la santé de vos jardins.",
    href: '#',
    icon: PictoQuimper,
  },
  {
    name: 'Concarneau',
    description:
      "À Concarneau, Arb'Ouest se spécialise dans le rognage de souche et l'haubanage, garantissant la longévité et la sécurité de vos arbres et espaces verts.",
    href: '#',
    icon: PictoConcarneau,
  },
  {
    name: 'Bénodet',
    description:
      "Profitez d'un service professionnel d'entretien et de création de jardins à Bénodet avec Arb'Ouest, où nous associons savoir-faire et respect de l'environnement.",
    href: '#',
    icon: PictoBenodet,
  },
  {
    name: 'Fouesnant',
    description:
      "Arb'Ouest intervient à Fouesnant pour tous vos besoins en élagage et revalorisation du bois, employant des techniques respectueuses de vos arbres et de la nature.",
    href: '#',
    icon: PictoFouesnant,
  },
  {
    name: 'Pont-Aven',
    description:
      "Découvrez nos services d'abattage et de haubanage à Pont-Aven, où Arb'Ouest allie précision et écologie pour le soin et la sécurité de vos espaces extérieurs.",
    href: '#',
    icon: PictoPontAven,
  },
  {
    name: 'Douarnenez',
    description:
      "À Douarnenez, faites confiance à Arb'Ouest pour le rognage de souche et l'entretien de jardins, avec une approche personnalisée qui valorise votre patrimoine vert.",
    href: '#',
    icon: PictoDouarnenez,
  },
  {
    name: 'Loctudy',
    description:
      "Arb'Ouest propose à Loctudy des services d'entretien de jardins et d'élagage, mettant en avant des techniques écologiques pour le bien-être de votre espace vert.",
    href: '#',
    icon: PictoDouarnenez,
  },
  {
    name: 'Lesconil',
    description:
      "À Lesconil, bénéficiez de l'expertise d'Arb'Ouest pour tous vos besoins en rognage de souche et en aménagement paysager, avec un engagement pour la durabilité et la beauté naturelle.",
    href: '#',
    icon: PictoDouarnenez,
  },
  {
    name: "Pont-l'abbé",
    description:
      "Arb'Ouest à Pont-l'abbé offre des solutions professionnelles pour l'abattage et la gestion des espaces verts, assurant sécurité et respect de l'environnement.",
    href: '#',
    icon: PictoDouarnenez,
  },
  {
    name: 'Combrit-île-tudy',
    description:
      "Explorez les services d'entretien de jardins à Combrit-île-tudy avec Arb'Ouest, où nous privilégions des méthodes respectueuses de l'environnement et de votre espace de vie.",
    href: '#',
    icon: PictoDouarnenez,
  },
  {
    name: "Gouesnarc'h",
    description:
      "À Gouesnarc'h, Arb'Ouest est votre partenaire de confiance pour l'élagage, l'abattage et la création de jardins écologiques.",
    href: '#',
    icon: PictoDouarnenez,
  },
  {
    name: 'Pleuven',
    description:
      "Arb'Ouest offre à Pleuven des solutions complètes pour l'élagage et l'entretien de jardins, intégrant des pratiques durables et efficaces.",
    href: '#',
    icon: PictoDouarnenez,
  },
  {
    name: 'Saint-Evarzec',
    description:
      "Découvrez les services d'Arb'Ouest à Saint-Evarzec, où nous proposons élagage, abattage et entretien de jardins avec une attention particulière à l'écologie.",
    href: '#',
    icon: PictoDouarnenez,
  },
  {
    name: 'Tregunc',
    description:
      "À Tregunc, Arb'Ouest excelle dans l'haubanage et le rognage de souche, garantissant des espaces verts sûrs et esthétiques.",
    href: '#',
    icon: PictoDouarnenez,
  },
  {
    name: 'Nevez',
    description:
      "Profitez des compétences d'Arb'Ouest à Nevez pour tous vos projets de jardinage et d'entretien d'espaces verts, avec une approche respectueuse de l'environnement.",
    href: '#',
    icon: PictoDouarnenez,
  },
  {
    name: 'Moellan-sur-mer',
    description:
      "Arb'Ouest à Moellan-sur-mer se spécialise dans l'entretien et la création de jardins durables, offrant beauté et fonctionnalité à votre espace extérieur.",
    href: '#',
    icon: PictoDouarnenez,
  },
  {
    name: 'Rosporden',
    description:
      "À Rosporden, Arb'Ouest fournit des services professionnels de jardinage et d'élagage, adaptés à vos besoins et respectueux de l'environnement.",
    href: '#',
    icon: PictoDouarnenez,
  },
  {
    name: 'Plogonnec',
    description:
      "Arb'Ouest intervient à Plogonnec pour l'élagage et l'abattage, utilisant des techniques qui préservent la santé de vos arbres et de votre jardin.",
    href: '#',
    icon: PictoDouarnenez,
  },
  {
    name: 'Locronan',
    description:
      "Explorez les services d'Arb'Ouest à Locronan, où nous combinons expertise et respect de l'environnement pour l'entretien et la création de vos jardins.",
    href: '#',
    icon: PictoDouarnenez,
  },
];

export default function HomeVilles() {
  const [visibleCount, setVisibleCount] = useState(6); // Default to 6 for desktop
  const handleResize = () => {
    // Adjust based on screen width
    const newCount = window.innerWidth <= 768 ? 3 : 6;
    setVisibleCount(newCount);
  };

  useEffect(() => {
    handleResize(); // Call on mount to set initial state based on current window size
    window.addEventListener('resize', handleResize); // Adjust on window resize
    return () => {
      window.removeEventListener('resize', handleResize); // Clean up listener
    };
  }, []);

  const loadMore = () => {
    // Increase the count by the initial state based on screen size
    setVisibleCount((prev) => prev + (window.innerWidth <= 768 ? 3 : 6));
  };
  return (
    <div className="bg-deep-green py-24 sm:py-32" id="villes">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-vib-orange">
            Votre partenaire local
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl">
            Arb&lsquo;Ouest, à votre service dans l&lsquo;Ouest
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-200">
            Découvrez la gamme de services que nous proposons dans votre ville.
            Spécialistes de l&lsquo;arboriculture, nous sommes là pour répondre
            à tous vos besoins.
            <br /> 30km autour de Fouesnant
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {villesDestinations.slice(0, visibleCount).map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-100">
                  <feature.icon
                    className="h-6 w-6 flex-none text-vib-orange"
                    aria-hidden="true"
                  />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
          <div className="mx-auto text-center py-4">
            {visibleCount < villesDestinations.length && (
              <button
                onClick={loadMore}
                className="mt-4 px-4 py-2 bg-vib-orange text-white font-semibold rounded hover:bg-orange-700 uppercase"
              >
                Plus de villes
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
