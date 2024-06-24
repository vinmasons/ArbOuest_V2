'use client';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

// import required modules
import Image from 'next/image';
import Link from 'next/link';
import { Autoplay, EffectFade } from 'swiper/modules';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

const slides = [
  {
    src: 'https://plus.unsplash.com/premium_photo-1663133883095-831fc9773d78?q=80&w=1280&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Elagage - Taille raisonnée',
    tittle: 'Elagage - Taille raisonnée',
    cta: 'Decouvrir',
    url: '/nos-prestations#élagage',
  },
  {
    src: 'https://images.unsplash.com/photo-1680264524689-a0b5e3da0a50?q=80&w=3987&1280=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Abattage',
    tittle: 'L‘Art de l‘Abattage',

    cta: 'voir',
    url: '/nos-prestations#abattage',
  },
  {
    src: 'https://plus.unsplash.com/premium_photo-1678121491049-45de2123399a?q=80&w=1280&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Arbre',
    tittle: 'Haubanage',

    cta: 'Voir Plus',
    url: '/nos-prestations#haubanage',
  },
  {
    src: 'https://plus.unsplash.com/premium_photo-1663133883095-831fc9773d78?q=80&w=1280&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Revalorisation du bois',
    tittle: 'Revalorisation du bois',

    cta: 'En savoir Plus',
    url: '/nos-prestations#revalorisation',
  },
];

export default function SliderHome() {
  return (
    <>
      <Swiper
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        speed={2500}
        effect={'fade'}
        modules={[Autoplay, EffectFade]}
        className="h-[70vh]"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <Image
              src={slide.src}
              alt={slide.alt}
              quality={100}
              fill
              sizes="100vw"
              style={{
                objectFit: 'cover',
              }}
            />
            <div className="absolute inset-0 bg-black bg-opacity-30"></div>
            <div className="absolute inset-0 flex flex-col justify-center items-center text-cente">
              <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl pb-3">
                {slide.tittle}
              </h2>

              <Link
                className=" bg-vib-orange px-3.5 py-2.5 text-3xl font-bold text-white shadow-sm capitalize hover:bg-vib-orange/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                href={slide.url}
              >
                {slide.cta}
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
