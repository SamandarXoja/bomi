// import { Link } from "@/i18n/routing";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
// import banner from "@/public/images/bomi-banner.jpg";
// import banner1 from "@/public/images/bomi-banner-1.jpg";
import banner2 from "@/public/images/bg.jpg";
import OurProject from "@/components/our-project";

// import card1 from "@/public/cards-1/card-1.jpg"
// import card2 from "@/public/cards-1/card2.jpg"
// import card3 from "@/public/cards-1/card.png"

// import imgResiton from "@/public/images/registon.jpg"

// import imgResiton3 from "@/public/images/vase2.jpg"
import Comfort from "@/components/comfort";


import persons from "@/public/images/Hakimov.jpg";
import safe from "@/public/images/safe.jpg"
import Designers from "@/components/designers";
import Location from "@/components/location";

import cards2 from "@/public/images/cards.jpg";

import cards3 from "@/public/images/cards/cards03.jpg"
import cards4 from "@/public/images/cards/img_9738-1.jpg"

import cards5 from "@/public/images/cards/project-02.jpg";
import cards6 from "@/public/images/cards/project-08-1-2.jpg";
import cards7 from "@/public/images/cards/project-05.jpg";
import cards8 from "@/public/images/cards/2-20.jpg";

import cards9 from "@/public/images/cards/project-07-1.jpg";

import registon4 from "@/public/images/reg.jpg";

import moonJar from "@/public/images/jar2.webp";

import bomi from "@/public/images/bomi03.jpg";

import buildns from "@/public/images/bomi007.jpg"

import banner3 from "@/public/images/bg-new.png";
import LocaleSwitcher from "@/components/LocaleSwitcher";


export default async function HomePage() {
  const t = await getTranslations("HomePage");
  console.log(t);

  return (
    <div className="relative">
      {/* <h1>{t("title")}</h1> */}
      {/* <Link href='/contact'>{t("contact")}</Link> */}
      <div className="absolute right-[30px] top-[30px]">
        <LocaleSwitcher />
      </div>

      <div className="z-[-10] banners">
        <Image
          className="w-[100vw] h-[100vh] object-cover"
          priority
          src={banner2}
          objectFit="cover"
          unoptimized
          alt="img"
        />
        <Image
          className="w-[600px] h-[90vh] min-w-[400px] min-h-[70vh] max-w-[600px] max-h-[90vh] absolute top-[56%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
          priority
          src={banner3}
          unoptimized
          alt="img"
        />
      </div>





    </div>
  );
}
