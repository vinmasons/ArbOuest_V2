import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'À propos d’Arb’Ouest - Engagement et Expertise en Arboriculture',
  description:
    'Découvrez Arb’Ouest, votre spécialiste en élagage et soins des arbres. Nous valorisons un engagement environnemental fort avec une expertise certifiée en arboriculture. En savoir plus sur notre approche personnalisée et notre passion pour la nature.',
  keywords:
    'Arb’Ouest, élagage Fouesnant, expertise arboriculture, soins arbres, engagement environnemental, service arboricole local',
};

const valueNous = [
  {
    name: 'Engagement environnemental',
    description:
      "Chez Arb'Ouest, nous plaçons la préservation de l'environnement au cœur de nos activités. Notre expertise en élagage et entretien d'arbres dans la région ouest nous permet d'offrir des services respectueux de la nature et de contribuer à la santé de votre espace vert.",
  },
  {
    name: 'Expertise certifiée',
    description:
      "Notre fondateur, fort de plus de 10 ans d'expérience en tant qu'arboriste-grimpeur, détient un Certificat de Spécialisation Taille et Soins des Arbres. Cette expertise garantit des interventions de qualité, respectueuses des dernières pratiques et normes en arboriculture.",
  },
  {
    name: 'Approche personnalisée',
    description:
      "Chaque arbre est unique, et chez Arb'Ouest, nous comprenons l'importance d'une approche sur mesure. Nous prenons le temps de réaliser un diagnostic visuel approfondi pour proposer des solutions adaptées à chaque situation, en tenant compte des caractéristiques spécifiques et de l'environnement de vos arbres.",
  },
  {
    name: 'Passion pour la nature',
    description:
      "La passion pour les arbres et la nature est au cœur de notre mission. En choisissant Arb'Ouest, vous optez pour un partenaire qui s'engage non seulement à soigner vos arbres mais aussi à partager avec vous des conseils et pratiques pour favoriser un environnement végétal équilibré et durable.",
  },
  {
    name: 'Service de proximité',
    description:
      "Intervenant dans le Pays Fouesnantais, le Pays Bigouden, la région de Concarneau, Quimper et ses environs, Arb'Ouest s'engage à offrir un service de proximité, réactif et adapté aux spécificités locales, favorisant ainsi des relations de confiance et de longue durée avec nos clients.",
  },
  {
    name: 'Respect des normes',
    description:
      "Nous nous engageons à respecter les normes de sécurité et les bonnes pratiques en matière d'élagage et de soins aux arbres. La satisfaction de nos clients et la santé des arbres sont nos priorités absolues, assurant ainsi des services de qualité dans le respect de l'environnement.",
  },
];

export default function AproposDeNous() {
  return (
    <div className="bg-soft-cream">
      <main className="isolate">
        <div className="relative isolate -z-10">
          <svg
            className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
                width={200}
                height={200}
                x="50%"
                y={-1}
                patternUnits="userSpaceOnUse"
              >
                <path d="M.5 200V.5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
              <path
                d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect
              width="100%"
              height="100%"
              strokeWidth={0}
              fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)"
            />
          </svg>
          <div
            className="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
            aria-hidden="true"
          >
            <div
              className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
              style={{
                clipPath:
                  'polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)',
              }}
            />
          </div>
          <div className="overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
              <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                <div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
                  <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                    À propos d&lsquo;Arb&lsquo;Ouest
                  </h1>
                  <p className="relative mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">
                    À propos d&lsquo;Arb&lsquo;Ouest Arb&lsquo;Ouest est votre
                    expert dédié pour tous vos besoins en élagage et entretien
                    d&lsquo;arbres. Nous combinons passion, expertise et
                    engagement environnemental pour offrir des services sur
                    mesure qui respectent et valorisent votre patrimoine arboré.
                  </p>{' '}
                  <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl pt-6">
                    Notre mission
                  </h2>
                  <p className="text-xl leading-8 text-gray-600">
                    Inspirer et implémenter des solutions d&lsquo;arboriculture
                    qui favorisent un équilibre harmonieux entre l&lsquo;homme
                    et la nature. Nous aspirons à être les gardiens de vos
                    espaces verts, en assurant la santé et la beauté de vos
                    arbres, tout en contribuant à un environnement durable.
                  </p>
                </div>
                <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                  <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                    <div className="relative">
                      <img
                        src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                  <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                    <div className="relative">
                      <img
                        src="https://images.unsplash.com/photo-1485217988980-11786ced9454?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div className="relative">
                      <img
                        src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-x=.4&w=396&h=528&q=80"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                  <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                    <div className="relative">
                      <img
                        src="https://images.unsplash.com/photo-1670272504528-790c24957dda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=left&w=400&h=528&q=80"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div className="relative">
                      <img
                        src="https://images.unsplash.com/photo-1670272505284-8faba1c31f7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content section */}
        <div className="mx-auto -mt-12 max-w-7xl px-6 sm:mt-0 lg:px-8 xl:-mt-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Qui suis-je ?
            </h2>
            <div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
              <div className="lg:w-full lg:max-w-2xl lg:flex-auto">
                <p className="text-xl leading-8 text-gray-600">
                  Avec un Certificat de Spécialisation Taille et Soins des
                  Arbres et plus de 10 ans d&lsquo;expérience, je mets mon
                  expertise à votre service pour offrir des soins adaptés et
                  respectueux à vos arbres. Mon approche tient compte de la
                  singularité de chaque arbre, en considérant ses besoins
                  spécifiques, sa santé globale et l&lsquo;environnement qui
                  l&lsquo;entoure. La création d&lsquo;Arb&lsquo;Ouest est le
                  fruit de cette passion pour la nature et le désir de partager
                  un savoir-faire respectueux de l&lsquo;environnement et
                  efficace, assurant la beauté et la longévité de vos arbres.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-32 sm:mt-40 xl:mx-auto xl:max-w-7xl xl:px-8">
          <img
            src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
            alt=""
            className="aspect-[5/2] w-full object-cover xl:rounded-3xl"
          />
        </div>

        <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8 lg:pb-24 pb-6">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Nos valeurs
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Notre engagement envers l&lsquo;excellence, la formation continue,
              le partage de connaissances, le soutien mutuel et la
              responsabilité individuelle définit notre culture
              d&lsquo;entreprise. Nous croyons au bien-être, tant pour nos
              employés que pour nos clients, et nous nous engageons à offrir des
              services respectueux et de haute qualité.
            </p>
          </div>
          <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-lg leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {valueNous.map((value) => (
              <div key={value.name}>
                <dt className="font-semibold capitalize text-xl text-gray-900">
                  {value.name}
                </dt>
                <dd className="mt-1 text-gray-600">{value.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </main>
    </div>
  );
}
