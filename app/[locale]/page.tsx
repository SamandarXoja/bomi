// import { Link } from "@/i18n/routing";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
// import banner from "@/public/images/bomi-banner.jpg";
// import banner1 from "@/public/images/bomi-banner-1.jpg";
import banner2 from "@/public/images/bg.jpg";


// import card1 from "@/public/cards-1/card-1.jpg"
// import card2 from "@/public/cards-1/card2.jpg"
// import card3 from "@/public/cards-1/card.png"

// import imgResiton from "@/public/images/registon.jpg"



import banner3 from "@/public/images/bg-new.png";
import LocaleSwitcher from "@/components/LocaleSwitcher";
// import LocaleSwitcher from "@/components/LocaleSwitcher";


export default async function HomePage() {
  const t = await getTranslations("HomePage");
  console.log(t);

  return (
    <div className="relative w-full h-screen flex justify-center items-center">
      <Image
        className="fixed bottom-[-7px] max-w-[600px] w-[50vw] min-w-[400px] h-auto z-10"
        priority
        src={banner3}
        unoptimized
        alt="img"
      />

      <div className="absolute right-[30px] top-[30px]">
        <LocaleSwitcher />
      </div>

      <div className="absolute inset-0 -z-10">
        <Image
          className="w-full h-full object-cover"
          priority
          src={banner2}
          unoptimized
          alt="img"
        />
      </div>
    </div>

  );
}
