import { PictoProximite } from '../shared/pictos/Proximite';
import { PictoReactivite } from '../shared/pictos/Reactivite';
import { PictoRespect } from '../shared/pictos/Respect';
import { PictoSecurite } from '../shared/pictos/Securite';

const featuresQuiSuisJe = [
  {
    name: 'Respect du végétal',
    description:
      'Spécialiste des soins aux arbres, je souhaite préserver au mieux les arbres dans leur environnement !',

    icon: PictoRespect,
  },
  {
    name: 'Travail en sécurité',
    description: 'Parce que sécurité est le maitre mot de l’élagueur !',

    icon: PictoSecurite,
  },
  {
    name: '	Réactivité ',
    description:
      'Du diagnostic à l’intervention, je veillerai à agir rapidement !',

    icon: PictoReactivite,
  },
  {
    name: 'Proximité ',
    description: 'Toujours plus proche de vous !',

    icon: PictoProximite,
  },
];

export default function HomeQuiSuisJe() {
  return (
    <div className="py-24 sm:py-32 bg-soft-cream">
      <div className="mx-auto container px-6 lg:px-8">
        <div className="mx-auto max-w-5xl lg:mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-vib-orange sm:text-4xl text-center">
            Qui suis-je ?
          </h2>
          <p className="mt-6 text-lg leading-8 text-deep-green text-center">
            Titulaire d’un Certificat de Spécialisation Taille et Soins des
            Arbres, j’ai désormais plus de 10 ans d’expérience dans le métier
            d’arboriste-grimpeur. Expérimenté dans les différentes techniques de
            grimpe et de déplacement, j’aurai à cœur de vous proposer la taille
            la plus adaptée à votre arbre et aux contraintes qui l’entourent.
            Intervenir sur un arbre nécessite une parfaite connaissance de ses
            caractéristiques : mode de croissance, hauteur maximale, maladies
            éventuelles, etc. Un diagnostic visuel préalable est donc
            nécessaire. Respectueux du monde végétal, je serai toujours force de
            proposition pour vous partager les différentes options possibles
            afin de préserver les plus beaux spécimens de votre jardin. J’ai
            décidé de créer Arb’Ouest afin de vous partager cette passion et
            participer à mon niveau à la préservation de la nature. J’interviens
            dans le Pays Fouesnantais, le Pays Bigouden, la région de Concarneau
            ainsi que Quimper et ses environs.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {featuresQuiSuisJe.map((feature, index) => (
              <div
                key={feature.name}
                className="flex flex-col items-center justify-center px-4"
              >
                <dt className="text-base font-semibold leading-7 text-deep-green text-center">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center">
                    <feature.icon
                      className="h-14 w-14 md:h-20 md:w-20 text-vib-orange hover:text-deep-green transition duration-1000 ease-in-out"
                      aria-hidden="true"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-1 text-base leading-7 text-gray-900 text-center">
                  <p>{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
