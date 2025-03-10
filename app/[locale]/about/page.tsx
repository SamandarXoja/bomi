import React from 'react';

import aboutImg from "@/public/images/comfort-10.jpg"
import Image from 'next/image';
import LocaleSwitcher from '@/components/LocaleSwitcher';
import logo from "@/public/images/logo-04.jpg"
import Footer from '@/components/footer';


import logoBm from "@/public/images/logo-engineering-2.png";

import logoBomi from "@/public/logos/logo.png";


const About = () => {
  return (
    <div className='relative'>
      <div className="absolute right-[30px] top-[-100px]">
        <LocaleSwitcher />
      </div>


      <section className="mt-[150px] ml-[90px]">
        <div className="mx-auto  container bg-black  min-h-[1300px] relative">

          {/* Заголовок BOMI, теперь с z-индексом выше фона */}
          <h2 className="text-[#fff] text-6xl absolute about-title top-[150px] left-[37%] z-10 uppercase">LIKE BOMI</h2>

          <div className="flex justify-between">
            <div className='ml-36  flex flex-col justify-center mt-[300px]'>
              <h3 className="about__title-sub uppercase text-[60px] text-[#c0c0c0] relative z-20 font-semibold text-right max-w-[500px] w-full ">У нас свой <span className='text-white'>взгляд</span>  </h3>
              {/* <p className="uppercase text-[60px]  text-[#c0c0c0] relative z-20 "><span className='text-white about__title-sub1 uppercase'>на создание </span> </p> */}
              <div className='max-w-[500px] mt-[58px]'>
                <p className='text-white text-2xl text-right'>Бренд BoMI – это надёжность и олицетворение качества.</p>

              </div>



            </div>

            {/* <Image className="w-[700px] h-[1000px] object-cover" src={shadow} priority alt="" /> */}

            {/* Картинка, помещаем ее в относительный контейнер */}
            <div className="right-0 top-0 z-0">
              <Image className="w-[700px] h-[1000px] object-cover" src={aboutImg} priority alt="" />
            </div>
          </div>

          <div className='flex justify-center mt-[80px] '>
            <Image src={logo} className='w-[60px] h-[60px]' width={100} height={100} alt="" />
          </div>


        </div>

        <div className='mx-auto container  bg-[#131313] min-h-[1700px] pt-[180px] pb-[70px]'>
          {/* <div className='text-center'>
            <h3 className='text-[#fff] text-[60px] text-center'>Lorem, dolor.</h3>
            <p className='text-[#fff] text-[40px] text-center mb-[24px] mt-[24px]'>Lorem ipsum dolor sit amet adipisicing.</p>
            <p className='text-[#fff] text-[30px] text-center'>Lorem ipsum dolor sit amet.</p>
          </div> */}




          <div className="flex justify-center gap-[100px] relative mr-[65px]">
            {/* Первый блок */}
            <div className="flex  flex-col items-center justify-around ">
              <Image src={logo} className="w-[80px] h-[80px] " width={100} height={100} alt="" />
              <div className="text-center max-w-[400px] w-full">
                <p className="text-[#c0c0c0] text-[30px] ">Всемирный логотип.</p>
                <p className="text-[#c0c0c0] text-[30px]  text-center mt-2">
                  <span className="text-white">представляющий Бренд  </span>в Южной Кореи.
                </p>
              </div>
            </div>


            <div className="relative w-[1px] bg-white h-[800px] mx-10"></div>


            <div className="flex flex-col items-center justify-around ">
              <Image src={logoBomi} className="w-[200px] mt-[10px]" width={100} height={100} alt="" />
              {/* <h3 className='text-[#fff] text-[60px] textbomi'>BOMI</h3> */}
              <div className='max-w-[400px]'>
                <p className="text-white text-center text-[30px]">Это высший стандарт качества.</p>
              </div>
            </div>
          </div>


          <div className='flex justify-evenly mt-[200px] '>
            <div className='w-[460px] h-[700px] border border-white rounded-[30px] gap-[50px] flex flex-col items-center justify-center'>
              <div className='flex justify-center items-center flex-col'>
                {/* <div className='w-[100px] h-[100px] border border-white rounded-sm'>
                </div> */}
                <Image className='w-[80px]' width={100} height={100} src={logoBm} priority alt='' />
                <div className='mt-10 mb-10'>
                  <p className='text-white text-3xl'>Мы создаём красоту и уют.</p>
                  <p className='text-white text-3xl'>в каждом своём творении.</p>
                </div>
              </div>

              <div className='flex justify-center items-center flex-col mt-4'>
                <Image className='w-[100px] h-[100px] block mb-10' src={logo} alt='' priority />
                <p className='text-white text-3xl'>Превращая недвижимость.</p>
                <p className='text-white text-3xl text-center'>в пространство для жизни и комфорта.</p>
              </div>

            </div>



            <div className='w-[460px] h-[700px] border border-white rounded-[30px] flex flex-col items-center justify-center gap-[120px]'>
              <div className='mt-[70px]'>
                {/* <h3 className='uppercase text-white text-[70px] titlees'>bomi</h3> */}
                <Image src={logoBomi} className="w-[200px] mt-[10px]" width={100} height={100} alt="" />

              </div>

              <div className='flex flex-col items-center justify-center'>
                <p className='text-white text-[30px] leading-[120%] text-center'>Создаём пространства</p>
                <p className='text-white  text-[30px] leading-[120%] text-center'>где природа и комфорт </p>
                <p className='text-white  text-[30px] leading-[120%] text-center'>становятся единым целым.</p>
              </div>




            </div>


          </div>


          <div className=' mx-auto max-w-[1300px] h-[2px] bg-[#c0c0c0] mt-[350px]'></div>
          <p className='text-[#ebebeb] text-center mt-9'>О нас</p>




        </div>
      </section>
      <Footer />
    </div>
  )

}
export default About;