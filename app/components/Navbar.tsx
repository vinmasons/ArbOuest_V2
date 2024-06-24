'use client';
import Link from 'next/link';
import { useState } from 'react';

import { Dialog, Popover } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

import { Logo } from './shared/Logo';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const closeMobileMenu = () => setMobileMenuOpen(false);
  return (
    <header className="bg-soft-cream">
      <nav
        className="mx-auto flex md:max-w-[75vw] items-center justify-between py-2 px-4 lg:px-8 capitalize"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 px-1.5">
            <span className="sr-only">Arb&lsquo;Ouest</span>
            <Logo className="h-10 md:h-14 w-auto " />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="mt-4 h-8 w-8" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12 md:pt-6">
          {' '}
          <Link
            href="/nos-prestations"
            className="text-2xl font-medium leading-6 text-deep-green hover:text-vib-orange"
          >
            Nos Prestations
          </Link>{' '}
          <Link
            href="/#villes"
            className="text-2xl font-medium leading-6 text-deep-green hover:text-vib-orange"
          >
            villes
          </Link>
          <Link
            href="/a-propos"
            className="text-2xl font-medium leading-6 text-deep-green hover:text-vib-orange"
          >
            À Propos
          </Link>
          <Link
            href="/blog"
            className="text-2xl font-medium leading-6 text-deep-green hover:text-vib-orange"
          >
            Blog
          </Link>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            href="/contact"
            className="md:pt-6 text-2xl font-bold leading-6 text-vib-orange hover:text-deep-green"
          >
            OBTENIR UN DEVIS
          </Link>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5" onClick={closeMobileMenu}>
              <span className="sr-only">Arb&lsquo;Ouest</span>
              <Logo className="h-7 w-1/2" />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-10 w-10" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link
                  href="/#villes"
                  onClick={closeMobileMenu}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-deep-green hover:text-vib-orange"
                >
                  villes
                </Link>
                <Link
                  href="a-propos"
                  onClick={closeMobileMenu}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-deep-green hover:text-vib-orange"
                >
                  À Propos
                </Link>
                <Link
                  href="/nos-prestations"
                  onClick={closeMobileMenu}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-deep-green hover:text-vib-orange "
                >
                  Nos Prestations
                </Link>{' '}
                <Link
                  href="/blog"
                  onClick={closeMobileMenu}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-deep-green hover:text-vib-orange "
                >
                  Blog
                </Link>
              </div>
              <div className="py-6">
                <Link
                  href="/contact"
                  onClick={closeMobileMenu}
                  className="text-2xl font-bold leading-6 text-vib-orange hover:text-deep-green"
                >
                  OBTENIR UN DEVIS
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
