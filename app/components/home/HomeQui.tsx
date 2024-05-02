import Link from 'next/link';
import { ArbreSvg } from '../shared/Arbre';

export default function HomeQui() {
  return (
    <div className="bg-deep-green  relative isolate overflow-hidden">
      <div className="container mx-auto ">
        <div className="flex flex-wrap  section px-4">
          <div className="section">
            <div className="w-full  sm:w-full  md:w-full  lg:w-full  xl:w-full ">
              <div className="inline-flex">
                <h2 className="h2-arb md:mr-12 mr-8">
                  Sculpteurs{' '}
                  <span className="block pl-2 md:pl-24">d&lsquo;arbres,</span>{' '}
                </h2>
                <h2 className="h2-vib">
                  artisans{' '}
                  <span className="block pl-2 md:pl-16">de nature:</span>
                </h2>
              </div>
              <p className="text-white md:max-w-[26vw] text-2xl md:pt-[3vh] md:pb-[4vh] pt-[4vh] pb-[5vh]">
                Que vous ayez besoin d&lsquo;une taille régulière pour maintenir
                la forme et la santé de vos arbres, d&lsquo;une élimination
                sécurisée de branches mortes ou dangereuses, ou encore de
                conseils d&lsquo;experts pour la gestion à long terme de votre
                patrimoine arboricole, Arb&lsquo;Ouest est là pour vous
                accompagner à chaque étape.
              </p>
              <Link
                href="/contact"
                className=" bg-vib-orange px-3.5 py-2.5 text-3xl font-bold text-white shadow-sm hover:bg-vib-orange/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                nous contacter
              </Link>
            </div>
          </div>

          <ArbreSvg className="overflow-hidden absolute inset-y-10 md:inset-y-0 md:-right-60 top-12 md:w-[37vw] -right-32 w-[120%]  -z-10 opacity-50 md:opacity-100" />
        </div>
      </div>{' '}
    </div>
  );
}
