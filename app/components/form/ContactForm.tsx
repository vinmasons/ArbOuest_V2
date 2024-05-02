'use client';
import React, { useRef, useState, Fragment } from 'react';
import emailjs from '@emailjs/browser';
import { Transition } from '@headlessui/react';
import { CheckCircleIcon, XMarkIcon } from '@heroicons/react/24/outline';

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(true);

  const sendEmail = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (formRef.current) {
      // Prevent spam by checking if honeypot is filled
      const honeypot = formRef.current['honeypot'].value;
      if (honeypot) return;

      try {
        const result = await emailjs.sendForm(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
          formRef.current,
          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
        );
        console.log('Email sent successfully:', result.text);
        setNotificationMessage('Votre message a été envoyé avec succès.');
        setIsSuccess(true);
        setShowNotification(true);
      } catch (error: any) {
        console.error('Failed to send email:', error.text);
        setNotificationMessage(
          "Échec de l'envoi du message. Veuillez réessayer."
        );
        setIsSuccess(false);
        setShowNotification(true);
      }
    }
  };

  return (
    <>
      <form
        ref={formRef}
        onSubmit={sendEmail}
        className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48"
      >
        {/* Champ honeypot invisible pour les humains, doit rester vide */}
        <input type="text" name="honeypot" style={{ display: 'none' }} />

        {/* Champs du formulaire */}
        <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            {/* Prénom */}
            <div>
              <label
                htmlFor="first-name"
                className="block text-sm font-semibold leading-6 text-deep-green"
              >
                Prénom
              </label>
              <input
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-vib-orange shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-deep-green sm:text-sm sm:leading-6"
              />
            </div>
            {/* Nom */}
            <div>
              <label
                htmlFor="last-name"
                className="block text-sm font-semibold leading-6 text-deep-green"
              >
                Nom
              </label>
              <input
                type="text"
                name="last-name"
                id="last-name"
                autoComplete="family-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-vib-orange shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-deep-green sm:text-sm sm:leading-6"
              />
            </div>
            {/* Email */}
            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                className="block text-sm font-semibold leading-6 text-deep-green"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-vib-orange shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-deep-green sm:text-sm sm:leading-6"
              />
            </div>
            {/* Téléphone */}
            <div className="sm:col-span-2">
              <label
                htmlFor="phone-number"
                className="block text-sm font-semibold leading-6 text-deep-green"
              >
                Numéro de téléphone
              </label>
              <input
                type="tel"
                name="phone-number"
                id="phone-number"
                autoComplete="tel"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-vib-orange shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-deep-green sm:text-sm sm:leading-6"
              />
            </div>
            {/* Message */}
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block text-sm font-semibold leading-6 text-deep-green"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows={4}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-vib-orange shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-deep-green sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          {/* Bouton d'envoi */}
          <div className="mt-8 flex justify-end">
            <button
              type="submit"
              className="rounded-md bg-deep-green px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-prime focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-deep-green"
            >
              Envoyer le message
            </button>
          </div>{' '}
        </div>
      </form>
      <div
        aria-live="assertive"
        className="pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6"
      >
        <div className="flex w-full flex-col items-center space-y-4 sm:items-end">
          <Transition
            show={showNotification}
            as={Fragment}
            enter="transform ease-out duration-300 transition"
            enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
            enterTo="translate-y-0 opacity-100 sm:translate-x-0"
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="p-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <CheckCircleIcon
                      className={`h-6 w-6 ${
                        isSuccess ? 'text-green-400' : 'text-red-400'
                      }`}
                      aria-hidden="true"
                    />
                  </div>
                  <div className="ml-3 w-0 flex-1 pt-0.5">
                    <p className="text-sm font-medium text-gray-900">
                      {isSuccess ? 'Succès !' : 'Erreur'}
                    </p>
                    <p className="mt-1 text-sm text-gray-500">
                      {notificationMessage}
                    </p>
                  </div>
                  <div className="ml-4 flex flex-shrink-0">
                    <button
                      type="button"
                      className="inline-flex rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      onClick={() => setShowNotification(false)}
                    >
                      <span className="sr-only">Fermer</span>
                      <XMarkIcon className="h-5 w-5" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </>
  );
}
