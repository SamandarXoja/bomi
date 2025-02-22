import Image from "next/image";

import foto from "@/public/card-buildings/project-02-thumbnail.jpg";
import foto1 from "@/public/card-buildings/photo_2025-02-21_14-55-52.jpg";
import foto2 from "@/public/card-buildings/photo_2025-02-21_14-55-52 (2).jpg";
import foto3 from "@/public/card-buildings/project-08-1-thumbnail-1.jpg";

import foto5 from "@/public/card-buildings/photo-10.jpg";
import foto6 from "@/public/card-buildings/photo-11.jpg";
import foto7 from "@/public/card-buildings/photo-12.jpg";
import foto8 from "@/public/images/bomi-main-2.jpg";
import foto9 from "@/public/card-buildings/photo-13.jpg";
import foto10 from "@/public/card-buildings/photo-14.jpg";
import foto11 from "@/public/card-buildings/photo-16.jpg";
import foto12 from "@/public/card-buildings/photo-17.jpg";
import foto13 from "@/public/card-buildings/photo-18.jpg";
import foto14 from "@/public/card-buildings/photo-19.jpg";
import foto15 from "@/public/card-buildings/photo-20.jpeg";
import foto16 from "@/public/card-buildings/project-04-1-thumbnail.jpg";




function Project() {


    let images = [
        foto8,
        foto1,
        foto,
        foto2,
        foto3,
        foto6,
        foto5,
        foto7,
        foto,
        foto9,
        foto10,
        foto11,
        foto12,
        foto13,
        foto14,
        foto15,
        foto15,
        foto16,
    ]



    return (
        <section>
            <div className="container">
                <div className="text-center mt-[80px] mb-[50px]">
                    <h2 className="mb-2 project-title">PROJECT</h2>
                    <p className="text-[#b8b8b8] text-[12px]">Everybody loves BOMI</p>
                </div>



            </div>
            <div className="flex flex-wrap gap-[1px]  container">
                {images.map((item, i) => (
                    <div className="relative  w-[24.8%] group" key={i}>
                        <Image className="w-full h-[400px] object-cover" src={item} alt="" priority />
                        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
                    </div>
                ))}










            </div>




        </section>
    )
}


export default Project