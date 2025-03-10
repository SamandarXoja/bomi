import Image from "next/image";

import foto from "@/public/project-foto/project.png";
import foto1 from "@/public/project-foto/p.jpg";
import foto2 from "@/public/project-foto/project-02.png";
import foto3 from "@/public/project-foto/project-03.jpg";

import foto5 from "@/public/card-buildings/photo-10.jpg";
import foto6 from "@/public/project-foto/project-04.jpg";
import foto7 from "@/public/project-foto/project-06.jpg";
import foto8 from "@/public/images/bomi-main-2.jpg";
import foto9 from "@/public/card-buildings/photo-13.jpg";
import foto10 from "@/public/card-buildings/photo-14.jpg";
import foto11 from "@/public/card-buildings/photo-16.jpg";
import foto12 from "@/public/card-buildings/photo-17.jpg";
import foto13 from "@/public/project-foto/project-08.png";
import foto14 from "@/public/project-foto/project-07.jpg";
import foto15 from "@/public/project-foto/project-09.jpg";
import foto16 from "@/public/project-foto/project-05.jpg";
import Footer from "@/components/footer";




function Project() {


    const images = [
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
        foto16,
    ]



    return (
        <section>
            <div className="container">
                <div className="text-center mt-[80px] mb-[50px]">
                    <h2 className="mb-2 project-title uppercase">проекты</h2>
                    <p className="text-[#b8b8b8] text-[18px]">Наши проекты: воплощение качества и инноваций. </p>
                </div>



            </div>
            <div className="flex flex-wrap gap-[1px]  container">
                {images.map((item, i) => (
                    <div className="relative  w-[24.8%] group" key={i}>
                        <Image className="w-full h-[400px] object-cover" src={item} width={800}
                            height={400} quality={100} alt="" />
                        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
                    </div>
                ))}
            </div>
            <Footer />
        </section>
    )
}


export default Project