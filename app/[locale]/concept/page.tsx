import Image from "next/image";
import registon from "@/public/images/registonss.png";
import moons from "@/public/images/moons.webp";
import build from "@/public/images/bomi007.png";
import Footer from "@/components/footer";


function Concept() {
    return (
        <>
            <div className="flex flex-col min-h-screen"> {/* Контейнер, который занимает 100vh */}
                <div className="flex-grow"> {/* Основной контент растягивается */}
                    <div className="">
                        <h2 className="concept-title mb-[60px]">concept</h2>
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
                                <div className="flex flex-col gap-[50px]">
                                    <Image className="w-[400px] h-[400px] object-cover" src={registon} priority alt="" />
                                    {/* <h3 className="text-center">Lorem, ipsum dolor.</h3> */}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="">
                        <p className="max-w-[700px] w-full text-center mx-auto text-lg">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam quae placeat libero velit est maxime tempora ex unde iure, alias sunt vel expedita itaque nostrum quasi sequi porro facere nisi?</p>
                    </div>

                </div>

                <Footer /> {/* Футер всегда будет прижат к нижней части */}
            </div>
        </>
    )
}




export default Concept