'use client';
import { Disclosure } from '@headlessui/react';
import { MinusIcon, PlusIcon } from '@heroicons/react/24/outline';

const faqs = [
  {
    question: "Quels services spécifiques proposez-vous en matière d'élagage ?",
    answer:
      "Nous offrons une gamme complète de services liés au coeur de l'arbre incluant le diagnostic et conseil arboricole, la taille raisonnée des arbres, l'abattage d'arbres dépérissants ou difficiles d'accès. L'entretien de parcs et jardins, le broyage de végétaux et la vente de copeaux ainsi que la plantation et la remise en état de terrains sont également des services proposés. Nous sommes aussi disponibles pour des interventions d'urgence, garantissant une réponse rapide de nos services. ",
  },
  {
    question: 'Pouvez-vous détailler les qualifications de vos élagueurs ?',
    answer:
      "Nos élagueurs sont des professionnels certifiés ayant reçu une formation spécialisée et possèdent plusieurs années d'expérience. Ils respectent scrupuleusement les normes de sécurité et notre entreprise est assurée en responsabilité civile et professionnelle pour une tranquillité d'esprit totale.",
  },
  {
    question: 'Comment sont calculés vos tarifs ?',
    answer:
      'Nos tarifs sont établis en fonction du volume de travail et de la complexité des tâches à réaliser. Nous proposons des devis gratuits et personnalisés pour répondre précisément à vos besoins et assurer une transparence totale des coûts. Les modes de paiement acceptés incluent, le chèque et le virement.',
  },
  {
    question: 'Votre société intervient-elle partout en France ?',
    answer: 'Finistère Sud - Rayon de 30 kilomètres autour de Fouesnant.',
  },
  {
    question: "Quels sont les délais d'intervention habituels ?",
    answer:
      "Nos délais varient selon la période de l'année et notre planning. Toutefois, nous nous efforçons d'intervenir rapidement après la signature du devis. Pour les situations urgentes, nous proposons des interventions accélérées.",
  },
  {
    question: "Quels conseils offrez-vous pour l'entretien des arbres ?",
    answer:
      "Nous fournissons des conseils professionnels pour l'entretien régulier de vos arbres, adaptés à chaque espèce et à la saison. Pour plus d'informations, nous vous encourageons à nous contacter ou à consulter notre blog pour des conseils détaillés.",
  },
  {
    question:
      "Quelles démarches administratives sont nécessaires pour l'abattage d'un arbre ?",
    answer:
      "Les démarches varient selon le contexte local et le type d'arbre. Nous pouvons vous accompagner dans ces procédures, qu'il s'agisse d'obtenir les autorisations nécessaires ou de vous conseiller sur la législation en vigueur.",
  },
  {
    question:
      "Quels sont les risques associés à l'élagage et comment les minimisez-vous ?",
    answer:
      "L'élagage comporte des risques, notamment de chute ou de blessure. Nos équipes sont formées aux meilleures pratiques de sécurité et utilisent un équipement de protection individuelle pour minimiser ces risques et assurer la sécurité de tous.",
  },
];

export default function HomeFaq() {
  return (
    <div className="bg-soft-cream">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-5xl divide-y divide-deep-green/10">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-vib-orange h2-arb capitalize">
            Questions frequentes
          </h2>
          <dl className="mt-10 space-y-6 divide-y divide-deep-green/10">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                        <span className="text-base font-semibold leading-7 text-deep-green ">
                          {faq.question}
                        </span>
                        <span className="ml-6 flex h-7 items-center">
                          {open ? (
                            <MinusIcon className="h-6 w-6" aria-hidden="true" />
                          ) : (
                            <PlusIcon className="h-6 w-6" aria-hidden="true" />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base leading-7 text-deep-green ">
                        {faq.answer}
                      </p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
