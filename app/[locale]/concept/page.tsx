import Image from "next/image";
import registon from "@/public/images/registonss.png";
import moons from "@/public/images/moons.webp";
import build from "@/public/images/bomi007.png";


function Concept() {
    return (
        <section className="mb-[200px]">
            <h2 className="concept-title mb-[60px]">concept</h2>
            <div className="container flex flex-wrap justify-center gap-[100px] items-center">
                <div className="flex flex-col gap-[50px]">
                    <Image className="w-[400px] h-[400px] object-cover" src={build} priority alt="" />
                    <h3 className="text-center">Lorem, ipsum.</h3>
                </div>
                <div className="flex flex-col gap-[50px]">
                    <Image className="w-[400px] h-[400px] object-cover" src={moons} alt="" />
                    <h3 className="text-center ">Lorem, ipsum.</h3>
                </div>


                <div className="flex flex-col gap-[50px]">
                    <Image className="w-[400px] h-[400px] object-cover" src={registon} priority alt="" />
                    <h3 className="text-center">Lorem, ipsum dolor.</h3>
                </div>

            </div>
        </section>
    )
}




export default Concept