import Image from "next/image";
import registon from "@/public/images/registon-12.png";
import moons from "@/public/images/moons.webp";
import build from "@/public/images/bomi007.png";
import Footer from "@/components/footer";


function Concept() {
    return (
        <>
            <div className="flex flex-col min-h-screen"> {/* Контейнер, который занимает 100vh */}
                <div className="flex-grow"> {/* Основной контент растягивается */}
                    <div className="">
                        <h2 className="concept-title mb-[60px] uppercase">
                            концепции</h2>
                        <div className="container flex flex-wrap justify-center gap-[150px] items-center">
                            <div className="flex flex-col gap-[50px]">
                                <Image className="w-[400px] h-[100vh] object-cover" src={build} priority alt="" />
                                {/* <h3 className="text-center">Lorem, ipsum.</h3> */}
                            </div>
                            <div>
                                <div className="flex flex-col gap-[50px]">
                                    <Image className="w-[400px] h-[400px] object-cover" src={moons} alt="" />
                                    {/* <h3 className="text-center ">Lorem, ipsum.</h3> */}
                                </div>
                                <div className="flex flex-col gap-[50px] mt-[40px]">
                                    <Image className="w-[400px] h-[400px] object-cover" src={registon} priority alt="" />
                                    {/* <h3 className="text-center">Lorem, ipsum dolor.</h3> */}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="max-w-[960px] w-full mx-auto">
                        <p className="text-lg text-[#333]">
                            Баланс белого – это создание чистого, естественного оттенка в архитектуре и дизайне.
                        </p>
                        <p className="text-lg mt-2 text-[#333]">
                            Через вертикаль мы передаём устремлённость в будущее и доверие, а через горизонталь — гармонию и сосуществование.
                        </p>
                        <p className="text-lg mt-2 text-[#333]">Мы строим пространство, где прозрачность и надёжность становятся основой, используя светопроницаемые материалы и минималистичный фасад для создания открытого и инновационного делового пространств</p>
                    </div>

                </div>

                <Footer /> {/* Футер всегда будет прижат к нижней части */}
            </div>
        </>
    )
}




export default Concept