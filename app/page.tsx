"use client";


import Image from "next/image";
import back from "@/public/back.jpg"
import card from "@/public/cards/card1.jpg"
import card1 from "@/public/cards-1/card-1.jpg"
import card2 from "@/public/cards-1/card2.jpg"


export default function Home() {


  return (
    // <nav className="bg-white text-black py-4 shadow-md">

    //   <div className="container mx-auto flex justify-between items-center px-4">
    //     {/* Логотип */}
    //     <Link href="/">
    //       <Image src={logo} width={200} height={200} alt="logo" />
    //     </Link>

    //     {/* Меню для больших экранов */}
    //     <ul className="hidden md:flex space-x-8 items-center">
    //       <li><Link href="/" className="hover:text-gray-400 text-xl">Главная</Link></li>
    //       <li><Link href="/projects" className="hover:text-gray-400 text-xl">Проекты</Link></li>
    //       <li><Link href="/about" className="hover:text-gray-400 text-xl">О нас</Link></li>
    //       <li><Link href="/contact" className="hover:text-gray-400 text-xl">Контакты</Link></li>

    //       {/* Dropdown меню */}

    //     </ul>
    //     ddd
    //     {/* Бургер-меню для мобильных */}
    //     <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
    //       {isOpen ? <X size={30} /> : <Menu size={30} />}
    //     </button>
    //   </div>

    //   {/* Выпадающее меню для мобильных устройств */}
    //   {isOpen && (
    //     <div className="md:hidden bg-white shadow-md py-4 px-4 mt-4">
    //       <ul className="flex flex-col space-y-4">
    //         <li><Link href="/" className="text-black" onClick={() => setIsOpen(false)}>Главная</Link></li>
    //         <li><Link href="/projects" className="text-black" onClick={() => setIsOpen(false)}>Проекты</Link></li>
    //         <li><Link href="/about" className="text-black" onClick={() => setIsOpen(false)}>О нас</Link></li>
    //         <li><Link href="/contact" className="text-black" onClick={() => setIsOpen(false)}>Контакты</Link></li>

    //         {/* Dropdown для мобильного меню */}
    //         <li className="relative">
    //           <button
    //             onClick={() => setIsDropdownOpen(!isDropdownOpen)}
    //             className="flex justify-between w-full text-xl"
    //           >
    //             Dropwodn <ChevronDown size={20} />
    //           </button>

    //           {isDropdownOpen && (
    //             <ul className="mt-2 space-y-2">
    //               <li><Link href="/services/design" className="block hover:bg-gray-100 px-4 py-2">Дизайн</Link></li>
    //               <li><Link href="/services/construction" className="block hover:bg-gray-100 px-4 py-2">Строительство</Link></li>
    //               <li><Link href="/services/consulting" className="block hover:bg-gray-100 px-4 py-2">Консалтинг</Link></li>
    //             </ul>
    //           )}
    //         </li>
    //       </ul>
    //     </div>
    //   )}
    // </nav>
    <div >
      <Image className="w-full " src={back} width={1000} height={500} alt="img" />

      <div className="py-[100px] bg-[#FAFAFC]">
        <div className="container mx-auto px-4">
          <div className="flex justify-between flex-wrap">
            <div>
              <h2 className="text-black font-bold text-[40px] mb-3">Bomi E&C</h2>
              <h3 className="max-w-[491px] w-full text-[48px] leading-[120%] text-[#45525B]">We are dedicated to finding a house that you ll love.</h3>
            </div>
            <div className="max-w-[561px]  w-full">
              <p className="text-lg text-[#333333]">Bomi E&C is a leading construction company with over 30 years of industry experience. We provide a full range of services, including turnkey design, construction and commissioning, ensuring strict quality control at all stages.</p>

              <p className="text-lg text-[#333333]">Our team is focused on high standards, innovative approaches and durability of facilities.
                Our values:
              </p>

              <ul className="mt-[50px] flex flex-col gap-3">
                <li>• Professionalism: The use of advanced technologies and methods.</li>
                <li>• Quality and reliability: Strict adherence to standards and durability of facilities.</li>
                <li>• Innovation: The introduction of modern solutions to optimize each project.</li>
                <li>• Experience: More than 30 years of successful practice in the construction industry.</li>
              </ul>


            </div>
          </div>
        </div>
      </div>


      <section className="bg-[#fff] pt-[100px]">
        <div className="container px-4 mx-auto">
          <div>
            <span className="text-[#FF8A63] uppercase text-[14px] leading-[0%] block">Current listings</span>
            <h2 className="text-[#45525B] text-[36px]">Examples of completed projects</h2>
            <p className="text-[#6F7278] text-lg mb-2">We have a variety of facilities on our account, from residential complexes to commercial buildings.</p>
            <p className="text-[#6F7278] text-lg">We pay attention not only to aesthetics, but also to durability, reliability and functionality.</p>
          </div>

          <div className="flex gap-4 flex-wrap mt-[30px]">
            <div className="max-w-[450px] rounded-2xl w-full min-h-[430px] pb-2 bg-white shadow-md">
              <Image src={card} className="rounded-2xl max-w-[450px] w-full" width={450} height={300} alt="card" />
              <div className="pl-3">
                <h3 className="text-2xl mt-4">APT Factory, Dynchondon</h3>
                <p className="text-[#45525B] text-xl mb-1 mt-3">Location</p>
                <p className="text-[#45525B] text-xl mb-1">628-7 Dynchongdong, Kangsogu, Seoul</p>
                <p className="text-[#45525B] text-xl mb-1">Total floor area</p>
                <p className="text-[#45525B] text-xl mb-1">29,927.49㎡</p>
                <p className="text-[#45525B] text-xl mb-1">Height and size</p>
                <p className="text-[#45525B] text-xl mb-1">15 above-ground floors and 3</p>
                <p className="text-[#45525B]  text-xl mb-1">underground levels</p>
              </div>
            </div>
            <div className="max-w-[450px] rounded-2xl w-full min-h-[430px] pb-2 bg-white shadow-md">
              <Image src={card} className="rounded-2xl max-w-[450px] w-full" width={450} height={300} alt="card" />
              <div className="pl-3">
                <h3 className="text-2xl mt-4">APT Factory, Dynchondon</h3>
                <p className="text-[#45525B] text-xl mb-1 mt-3">Location</p>
                <p className="text-[#45525B] text-xl mb-1">628-7 Dynchongdong, Kangsogu, Seoul</p>
                <p className="text-[#45525B] text-xl mb-1">Total floor area</p>
                <p className="text-[#45525B] text-xl mb-1">29,927.49㎡</p>
                <p className="text-[#45525B] text-xl mb-1">Height and size</p>
                <p className="text-[#45525B] text-xl mb-1">15 above-ground floors and 3</p>
                <p className="text-[#45525B]  text-xl mb-1">underground levels</p>
              </div>
            </div>
            <div className="max-w-[450px] rounded-2xl w-full min-h-[430px] pb-2 bg-white shadow-md">
              <Image src={card} className="rounded-2xl max-w-[450px] w-full" width={450} height={300} alt="card" />
              <div className="pl-3">
                <h3 className="text-2xl mt-4">APT Factory, Dynchondon</h3>
                <p className="text-[#45525B] text-xl mb-1 mt-3">Location</p>
                <p className="text-[#45525B] text-xl mb-1">628-7 Dynchongdong, Kangsogu, Seoul</p>
                <p className="text-[#45525B] text-xl mb-1">Total floor area</p>
                <p className="text-[#45525B] text-xl mb-1">29,927.49㎡</p>
                <p className="text-[#45525B] text-xl mb-1">Height and size</p>
                <p className="text-[#45525B] text-xl mb-1">15 above-ground floors and 3</p>
                <p className="text-[#45525B]  text-xl mb-1">underground levels</p>
              </div>
            </div>
            <div className="max-w-[450px] rounded-2xl w-full min-h-[430px] pb-2 bg-white shadow-md">
              <Image src={card} className="rounded-2xl max-w-[450px] w-full" width={450} height={300} alt="card" />
              <div className="pl-3">
                <h3 className="text-2xl mt-4">APT Factory, Dynchondon</h3>
                <p className="text-[#45525B] text-xl mb-1 mt-3">Location</p>
                <p className="text-[#45525B] text-xl mb-1">628-7 Dynchongdong, Kangsogu, Seoul</p>
                <p className="text-[#45525B] text-xl mb-1">Total floor area</p>
                <p className="text-[#45525B] text-xl mb-1">29,927.49㎡</p>
                <p className="text-[#45525B] text-xl mb-1">Height and size</p>
                <p className="text-[#45525B] text-xl mb-1">15 above-ground floors and 3</p>
                <p className="text-[#45525B]  text-xl mb-1">underground levels</p>
              </div>
            </div>
            <div className="max-w-[450px] rounded-2xl w-full min-h-[430px] pb-2 bg-white shadow-md">
              <Image src={card} className="rounded-2xl max-w-[450px] w-full" width={450} height={300} alt="card" />
              <div className="pl-3">
                <h3 className="text-2xl mt-4">APT Factory, Dynchondon</h3>
                <p className="text-[#45525B] text-xl mb-1 mt-3">Location</p>
                <p className="text-[#45525B] text-xl mb-1">628-7 Dynchongdong, Kangsogu, Seoul</p>
                <p className="text-[#45525B] text-xl mb-1">Total floor area</p>
                <p className="text-[#45525B] text-xl mb-1">29,927.49㎡</p>
                <p className="text-[#45525B] text-xl mb-1">Height and size</p>
                <p className="text-[#45525B] text-xl mb-1">15 above-ground floors and 3</p>
                <p className="text-[#45525B]  text-xl mb-1">underground levels</p>
              </div>
            </div>
            <div className="max-w-[450px] rounded-2xl w-full min-h-[430px] pb-2 bg-white shadow-md">
              <Image src={card} className="rounded-2xl max-w-[450px] w-full" width={450} height={300} alt="card" />
              <div className="pl-3">
                <h3 className="text-2xl mt-4">APT Factory, Dynchondon</h3>
                <p className="text-[#45525B] text-xl mb-1 mt-3">Location</p>
                <p className="text-[#45525B] text-xl mb-1">628-7 Dynchongdong, Kangsogu, Seoul</p>
                <p className="text-[#45525B] text-xl mb-1">Total floor area</p>
                <p className="text-[#45525B] text-xl mb-1">29,927.49㎡</p>
                <p className="text-[#45525B] text-xl mb-1">Height and size</p>
                <p className="text-[#45525B] text-xl mb-1">15 above-ground floors and 3</p>
                <p className="text-[#45525B]  text-xl mb-1">underground levels</p>
              </div>
            </div>
            <div className="max-w-[450px] rounded-2xl w-full min-h-[430px] pb-2 bg-white shadow-md">
              <Image src={card} className="rounded-2xl max-w-[450px] w-full" width={450} height={300} alt="card" />
              <div className="pl-3">
                <h3 className="text-2xl mt-4">APT Factory, Dynchondon</h3>
                <p className="text-[#45525B] text-xl mb-1 mt-3">Location</p>
                <p className="text-[#45525B] text-xl mb-1">628-7 Dynchongdong, Kangsogu, Seoul</p>
                <p className="text-[#45525B] text-xl mb-1">Total floor area</p>
                <p className="text-[#45525B] text-xl mb-1">29,927.49㎡</p>
                <p className="text-[#45525B] text-xl mb-1">Height and size</p>
                <p className="text-[#45525B] text-xl mb-1">15 above-ground floors and 3</p>
                <p className="text-[#45525B]  text-xl mb-1">underground levels</p>
              </div>
            </div>



          </div>
        </div>






      </section>

      <section>
        <div className="container mx-auto px-4 mt-[100px]">
          <h2 className="text-black text-3xl font-bold">
            BOMI FINANCE CENTER
          </h2>
          <div className="max-w-[100px] w-full h-4 bg-blue-900 mt-5 mb-5"></div>

          <p className="mb-3">Bomi Finance Center (бизнес-центр) расположен в МДЦ «Tashkent City», который является успешным проектом на национальном уровне.</p>
          <p>Здание расположено прямо на главной улице и имеет преимущество в том, что к нему легко добраться, поскольку оно находится рядом с транспортными средствами (метро, автобус). Кроме того, это место имеет множество географических преимуществ, поскольку поблизости расположены правительственные учреждения и объекты общего обслуживания. </p>
        </div>

        <div className="grid grid-cols-3  w-full h-screen mt-5 overflow-hidden">
          <Image src={card1} alt="cards" className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" />
          <Image src={card2} alt="cards" className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" />
          <Image src={card1} alt="cards" className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" />
          <Image src={card1} alt="cards" className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" />
          <Image src={card1} alt="cards" className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" />
          <Image src={card1} alt="cards" className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" />
        </div>





      </section>





    </div>
  );
}
