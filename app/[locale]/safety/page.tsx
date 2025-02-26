import Image from "next/image";
import foto from "@/public/images/safe.webp";
import disegner from "@/public/images/Hakimov.jpg"
import Footer from "@/components/footer";


function Safety() {
    return (
        <div className="flex flex-col min-h-screen"> {/* Контейнер, который занимает 100vh */}
            <div className="flex-grow"> {/* Основной контент растягивается */}
                <div className="">
                    <h2 className="text-[#333] uppercase text-safety mb-[50px]">Safety</h2>
                    <div className="container flex justify-center gap-[50px]">
                        <div>
                            <Image className="w-[300px] h-[300px]" src={foto} alt="" />
                            <h3 className="text-center mt-[40px]">EARTHQUAKE RESISTANCE SYSTEM</h3>
                        </div>
                        <div>
                            <Image className="w-[300px] h-[300px]" src={disegner} alt="" />
                            <h3 className="text-center mt-[40px]">EARTHQUAKE RESISTANCE SYSTEM</h3>
                        </div>
                    </div>
                </div>
            </div>

            <Footer /> {/* Футер всегда будет прижат к нижней части */}
        </div>
    )

}

export default Safety