import Image from 'next/image';
import Elageur from '../../../public/HomeBg.webp';
import Link from 'next/link';
export default function HomeHeader() {
  return (
    <>
      <div className="container mx-auto pb-[4vh] md:pb-[7vh]">
        <div className="grid grid-cols-1 gap-6 ">
          <div className="">
            <h2 className="text-deep-green font-black text-3xl md:text-5xl pt-[4vh] md:pt-[7vh]  text-center">
              Le Spécialiste de vos arbres
            </h2>
            <h3 className="text-deep-green font-black text-3xl md:text-xl py-2 text-center capitalize pt-1 pb-[3.6vh]  md:pb-[6vh]">
              entretien arboricole des parcs et jardins
            </h3>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="lg:col-span-1">
            <div className="flex">
              <div className="flex-1 w-auto">
                <Image
                  alt="Élagage"
                  src={Elageur}
                  quality={75}
                  sizes="(max-width: 808px) 50vw, 100vw"
                  priority={true}
                />
              </div>{' '}
              <div className="flex-none md:pl-4 px-2">
                <ul>
                  <li className="text-deep-green font-black md:text-2xl">
                    Élagage
                  </li>
                  <li className="text-deep-green font-black md:text-2xl">
                    Abattage
                  </li>
                  <li className="text-deep-green font-black md:text-2xl">
                    Broyage
                  </li>
                  <li className="text-deep-green font-black md:text-2xl">
                    Taille
                  </li>
                </ul>
              </div>
            </div>{' '}
          </div>

          <div className="lg:col-span-1 md:px-[6vw] px-4">
            <p className="justify-center items-center text-left md:text-2xl text-deep-green pb-4">
              <span className="font-bold">Arb&lsquo;Ouest</span> est votre
              partenaire d&lsquo;excellence pour tous vos besoins en élagage et
              en entretien d&lsquo;arbres dans la région ouest. Forts de notre
              expertise et de notre engagement envers la préservation de
              d&lsquo;environnement, nous sommes fiers de proposer des services
              professionnels et personnalisés pour répondre à toutes vos
              exigences en matière d&lsquo;arbres.
            </p>
            <Link
              href="/contact"
              className=" bg-vib-orange px-3.5 py-2.5 text-3xl font-bold text-white shadow-sm hover:bg-vib-orange/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              OBTENIR UN DEVIS
            </Link>
            <p className="justify-center items-center text-left md:text-2xl text-deep-green py-4 font-bold">
              <a href="tel:+33658191932">06 58 19 19 32</a>
            </p>
            <p className="justify-center items-center text-left md:text-2xl text-deep-green pb-4 font-bold">
              <a href="mailto:contact@arbouest.com">contact@arbouest.com</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
