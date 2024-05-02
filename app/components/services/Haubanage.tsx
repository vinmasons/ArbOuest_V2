import Link from 'next/link';

export default function Haubanage() {
  return (
    <div className="bg-deep-green py-24 sm:py-32" id="haubanage">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-vib-orange sm:text-4xl">
            Haubanage
          </h2>
          <div className="mt-10 grid max-w-xl grid-cols-1 gap-8 text-lg leading-7 text-white lg:max-w-none lg:grid-cols-2">
            <div>
              <p>
                Une méthode pour renforcer des arbres fragiles, en utilisant des
                cordes ou câbles en acier inoxydable pour soutenir le tronc et
                les branches.
                <br />
                Découvrez l'évolution de l'élagage à travers l'histoire,
                racontée ici à la troisième personne, mettant en lumière sa
                transformation en une discipline qui allie esthétique et respect
                de l'environnement. Les techniques d'élagage, de la taille douce
                à l'abattage raisonné, ont été affinées pour respecter au mieux
                l'intégrité et la beauté des arbres.
              </p>
              <p className="mt-8">
                Arb'Ouest, experts en élagage, abattage, dessouchage, et plus,
                adopte des méthodes écologiquement responsables pour soigner et
                valoriser les espaces verts. Leur expertise en techniques
                d'élagage et leur connaissance approfondie de la biologie des
                arbres garantissent des interventions de haute qualité.
              </p>
            </div>
            <div>
              <p>
                Outre l'haubanage, la société propose aussi la valorisation du
                bois et l'entretien de jardins, adaptés à chaque besoin
                spécifique. Leur engagement envers l'excellence et le respect de
                l'environnement se traduit par des résultats qui équilibrent
                esthétique, sécurité et biodiversité.
              </p>
              <p className="mt-8">
                Avec une gamme étendue de services couvrant tous les aspects de
                l'arboriculture et du paysagisme, Arb'Ouest se présente comme le
                partenaire idéal pour tous vos projets d'élagage, abattage et
                création paysagère, en déployant un savoir-faire unique pour
                répondre à vos demandes avec professionnalisme et passion.
              </p>
            </div>
          </div>
          <div className="mt-10 flex">
            <Link
              href="/contact"
              className="rounded-md bg-vib-orange px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-arb-green focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-deep-green"
            >
              Contactez Nous
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
