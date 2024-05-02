import Link from 'next/link';

export default function RevalorisationBois() {
  return (
    <div className="bg-deep-green  py-24 sm:py-32" id="revalorisation">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-vib-orange sm:text-4xl">
            Revalorisation du Bois : Écologie et Innovation
          </h2>
          <div className="mt-10 grid max-w-xl grid-cols-1 gap-8 text-lg leading-7 text-white lg:max-w-none lg:grid-cols-2">
            <div>
              <p>
                Arb&lsquo;Ouest embrasse une multitude d&lsquo;approches pour la
                revalorisation du bois, chacune inscrite dans un cadre
                écologique. Au-delà du recyclage en biomasse ou en matériaux
                pour l&lsquo;industrie, nous transformons le bois en mobilier
                urbain, en éléments de construction pour des habitats
                écologiques, ou en objets d&lsquo;art et décoratifs, encouragant
                ainsi la créativité tout en réduisant les déchets.
              </p>
              <p className="mt-8">
                En partenariat avec des artisans locaux, nous donnons une
                seconde vie au bois coupé, le façonnant en bancs, en
                jardinières, ou en clôtures, soutenant l&lsquo;artisanat local
                tout en promouvant la durabilité. Ces initiatives illustrent
                comment la revalorisation peut enrichir nos communautés et nos
                environnements.
              </p>
            </div>
            <div>
              <p>
                Notre engagement pour l&lsquo;écologie se manifeste aussi dans
                l&lsquo;utilisation du bois pour la création de refuges pour la
                faune, favorisant la biodiversité et offrant un habitat aux
                espèces locales. De même, la transformation du bois en paillis
                pour les parcs et jardins contribue à la santé des sols, à la
                rétention d&lsquo;eau et à la suppression des mauvaises herbes,
                démontrant l&lsquo;interconnexion entre la revalorisation du
                bois et le bien-être de notre planète.
              </p>
              <p className="mt-8">
                En choisissant des voies de revalorisation innovantes et
                écologiques, Arb&lsquo;Ouest témoigne de son respect profond
                pour la nature et sa détermination à minimiser son empreinte
                environnementale, tout en offrant des solutions durables et
                esthétiques à la société.
              </p>
            </div>
          </div>
          <div className="mt-10 flex">
            <Link
              href="/contact"
              className="rounded-md bg-deep-green px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-arb-green focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-deep-green"
            >
              Contactez nous
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
