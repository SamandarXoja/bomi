// import { Link } from "@/i18n/routing";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
// import banner from "@/public/images/bomi-banner.jpg";
// import banner1 from "@/public/images/bomi-banner-1.jpg";
import banner2 from "@/public/images/bomi-banner-2.jpg";
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

import moonJar from "@/public/images/jar2.webp"




export default async function HomePage() {
  const t = await getTranslations("HomePage");
  console.log(t);

  return (
    <div>
      {/* <h1>{t("title")}</h1> */}
      {/* <Link href='/contact'>{t("contact")}</Link> */}

      <div className="">
        <Image className="w-full" src={banner2} width={1000} height={500} alt="img" />
      </div>
      <OurProject />
      <section className="pt-[100px]" id="aboutProject">
        <div className="container mx-auto px-4">
          <h2 className="font-bold text-center text-[28px] text-black mb-6">BOMI FINANCE CENTER </h2>
          {/* <div className="w-[70px] h-[10px] bg-red-700 mb-6"></div> */}
          <div className="max-w-[1085px] mx-auto w-full">
            <p className="text-[#6F7278] mb-6 text-lg text-center">Bomi Finance Center</p>
            {/* <p className="text-[#6F7278] text-lg">Здание расположено прямо на главной улице и имеет преимущество в том, что к нему легко добраться, поскольку оно находится рядом с транспортными средствами (метро, автобус). Кроме того, это место имеет множество географических преимуществ, поскольку поблизости расположены правительственные учреждения и объекты общего обслуживания. </p> */}
          </div>

        </div>
        <div className="overflow-hidden mt-14">
          <div className="container mx-auto px-4 flex flex-wrap gap-[1px]">
            <div className="relative group">
              <Image
                src={cards2}
                alt=""
                className="w-[374px] min-h-[440px] object-cover transition-transform "
              />
              <div className="absolute inset-0 bg-white/0 hover:bg-white/40 transition duration-300 rounded-lg"></div>
            </div>

            <div className="relative group">
              <Image
                src={cards3}
                alt=""
                className="w-[374px] min-h-[440px] object-cover transition-transform "
              />
              <div className="absolute inset-0 bg-white/0 hover:bg-white/40 transition duration-300 rounded-lg"></div>
            </div>

            <div className="relative group">
              <Image
                src={cards4}
                alt=""
                className="w-[374px] min-h-[440px] object-cover transition-transform "
              />
              <div className="absolute inset-0 bg-white/0 hover:bg-white/40 transition duration-300 rounded-lg"></div>
            </div>
            <div className="relative group">
              <Image
                src={cards5}
                alt=""
                className="w-[374px] min-h-[440px] object-cover transition-transform "
              />
              <div className="absolute inset-0 bg-white/0 hover:bg-white/40 transition duration-300 rounded-lg"></div>
            </div>
            <div className="relative group">
              <Image
                src={cards6}
                alt=""
                className="w-[374px] min-h-[440px] object-cover transition-transform "
              />
              <div className="absolute inset-0 bg-white/0 hover:bg-white/40 transition duration-300 rounded-lg"></div>
            </div>
            <div className="relative group">
              <Image
                src={cards7}
                alt=""
                className="w-[374px] min-h-[440px] object-cover transition-transform "
              />
              <div className="absolute inset-0 bg-white/0 hover:bg-white/40 transition duration-300 rounded-lg"></div>
            </div>
            <div className="relative group">
              <Image
                src={cards8}
                alt=""
                className="w-[374px] h-[440px] object-cover transition-transform "
              />
              <div className="absolute inset-0 bg-white/0 hover:bg-white/40 transition duration-300 rounded-lg"></div>
            </div>
            <div className="relative group">
              <Image
                src={cards9}
                alt=""
                className="w-[374px] min-h-[440px] object-cover transition-transform "
              />
              <div className="absolute inset-0 bg-white/0 hover:bg-white/40 transition duration-300 rounded-lg"></div>
            </div>
            <div className="relative group">
              <Image
                src={cards2}
                alt=""
                className="w-[374px] min-h-[440px] object-cover transition-transform "
              />
              <div className="absolute inset-0 bg-white/0 hover:bg-white/40 transition duration-300 rounded-lg"></div>
            </div>
            <div className="relative group">
              <Image
                src={cards2}
                alt=""
                className="w-[374px] min-h-[440px] object-cover transition-transform "
              />
              <div className="absolute inset-0 bg-white/0 hover:bg-white/40 transition duration-300 rounded-lg"></div>
            </div>

            {/* Повторите для остальных картин */}
          </div>

        </div>

      </section>

      <section className="" id="concept">

        <div className="mt-[120px] mb-[40px]">
          <div className="container mx-auto px-4">
            <h2 className="text-[35px] font-bold">Концепция</h2>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 items-start container mx-auto px-4">
          {/* Первый блок (Картинка + Текст) */}
          <div className="flex flex-col items-center text-center relative group">
            <Image
              className="rounded-[30px] w-full object-cover h-[500px]"
              src={registon4}
              priority
              alt="Registon 4"
            />
            <div className="absolute inset-0 bg-white bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="max-w-[900px] w-full mt-6 group-hover:translate-y-0 translate-y-12 transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100">
              <h3 className="text-[25px] font-medium text-black">Registan</h3>
              <p className="mt-4 text-lg text-[#272727]">
                Культурный фестиваль в Самарканде имеет золотую художественную площадь, которая источает ослепительную красоту.
              </p>
            </div>
          </div>

          {/* Второй блок (Картинка + Текст) */}
          <div className="flex flex-col items-center text-center relative group">
            <Image
              className="rounded-[30px] w-full h-[500px] object-cover"
              src={moonJar}
              priority
              alt="Moon Jar"
            />
            <div className="absolute inset-0 bg-white bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="max-w-[900px] w-full mt-6 group-hover:translate-y-0 translate-y-12 transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100">
              <h3 className="text-[25px] font-medium">Moon Jar</h3>
              <p className="mt-4 text-lg text-[#272727]">
                Лунная банка — это фарфор мягкого и элегантного чистого белого цвета, который создает красивые формы, меняя тени в зависимости от освещения.
              </p>
              <p className="mt-6 text-lg text-[#272727]">
                Высотная часть Bomi Finance Center использует чистый и ясный белый цвет внешней части лунного кувшина и современное серебристое стекло.
              </p>
            </div>
          </div>
        </div>






      </section>
      <Comfort />
      <section className="mt-[140px]" id="safety">
        <div className="container mx-auto px-4">
          {/* Первый блок: картинка сверху, текст снизу */}
          <div className="mb-[80px] flex flex-col items-center gap-4">
            <div className="w-full max-w-[500px] transform transition duration-500 hover:scale-105">
              <Image
                className="rounded-xl shadow-md"
                src={persons}
                width={500}
                height={400}
                alt="persons"
              />
            </div>
            <div className="w-full text-center">
              <h3 className="text-3xl font-semibold text-[#000]">Проектирование структуры</h3>
              <b className="block mt-5 text-lg text-[#272727]">Хакимов Шамил Абдуллаевич</b>
              <p className="text-[#4A5568]">(В настоящее время)</p>
              <p className="mt-5  leading-relaxed text-[#272727] text-lg">
                Доктор, академик Международной инженерной академии, международный эксперт по защите строительных конструкций от землетрясений и горных опасностей
              </p>
              <p className="text-[#272727] text-lg mt-2">(сертификат специалиста № 104) Вице-президент.</p>
            </div>
          </div>

          {/* Второй блок: текст сверху, картинка снизу */}
          <div className="mb-[80px] flex flex-col items-center gap-4">
          <div className="w-full max-w-[500px] transform transition duration-500 hover:scale-105">
              <Image
                className="rounded-xl shadow-md"
                src={safe}
                width={500}
                height={400}
                alt="safe"
              />
            </div>
            <div className="w-full text-center">
              <h3 className="text-3xl font-semibold text-[#000]">СИСТЕМА СЕЙСМОСТОЙКОСТИ</h3>
              <p className="mt-5 text-[#272727] leading-relaxed text-lg">
                Сейсмическая конструкция имеет рейтинг 9, что обеспечивает высокий уровень устойчивости к стихийным бедствиям.
              </p>
              <p className="text-[#272727] leading-relaxed text-lg mt-2">
                Это гарантия безопасности людей и сохранности имущества в случае землетрясения.
              </p>
              {/* <p className="text-[#272727] mt-5 leading-relaxed text-lg">
                Сейсмостойкость — это не только требование безопасности, но и залог вашего комфорта и уверенности в защите вашего бизнеса.
              </p> */}
            </div>
            
          </div>
        </div>



      </section>
      <Designers />
      <Location />

    </div>
  );
}
