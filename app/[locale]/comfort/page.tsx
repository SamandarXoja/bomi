import Footer from "@/components/footer";
import img from "@/public/images/comfort-10.jpg";
import img1 from "@/public/images/comfort-11.jpg";
import img2 from "@/public/images/comfort-12.jpg";
import Image from "next/image"


function Comfort() {
    return (
        <div className="flex flex-col min-h-screen"> {/* Оборачиваем в flex-контейнер */}
            <div className="flex-grow"> {/* Основной контент будет занимать всю доступную высоту */}
                <div>
                    <h2 className="text-center uppercase comfort-title mt-[70px] font-semibold mb-[100px]">
                        COMFORT
                    </h2>

                    <div className="container grid grid-cols-3 gap-4">
                        <div>
                            <Image className="w-full object-cover h-[432px]" src={img} alt="" priority />
                        </div>
                        <div>
                            <Image className="w-full object-cover h-[432px]" src={img1} alt="" priority />
                        </div>
                        <div>
                            <Image className="w-full object-cover h-[432px]" src={img2} alt="" priority />
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <p className="mt-[80px] max-w-[1000px] w-full text-[#333] text-lg">Современная архитектура сочетает прозрачность, ритм и гармонию, создавая среду доверия и продуктивности. Вертикальные линии отражают устремлённость в будущее, а открытые пространства обеспечивают баланс между работой и отдыхом. Здесь комфорт — это не опция, а фундамент уверенного развития</p>
            </div>
            <Footer /> {/* Теперь футер будет всегда внизу */}
        </div>
    )
}

export default Comfort