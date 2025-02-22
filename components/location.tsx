"use client";




export default function Location() {




    return (
        <section id="location" className="mapSize 2xl:mt-0 xl:mt-24 lg:mt-24 md:mt-24 sm:mt-24 xs:mt-24">
            <div className="mx-auto flex flex-col justify-center items-center">
                <h2 className="mt-[60px] mb-[60px] text-[20px]">CONTACT US</h2>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.8160276599774!2d69.24457973874087!3d41.3128656695428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b0903649207%3A0x14a40c03c24ff696!2z0KPQt9Cx0LXQutC40YHRgtCw0L0g0L_RgNC-0YHQv9C10LrRgiA5Mywg0KLQsNGI0LrQtdC90YIsIFRhc2hrZW50LCDQo9C30LHQtdC60LjRgdGC0LDQvQ!5e0!3m2!1sru!2s!4v1740216607860!5m2!1sru!2s"
                    width="70%"
                    height="350"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />

            </div>
            <div className="text-center">
                <h3 className="mt-[55px] text-[24px] mb-[50px]">Lorem, ipsum.</h3>
                <p className="font-bold">Reservation Only</p>
                <p className="mt-[20px] mb-[20px]">Adress: Toshkent City Islom Karimov kochasi</p>
                <p>Customer Service Info:</p>
                <p className="mb-[160px]">Lorem, ipsum.</p>
            </div>



        </section>
    );
}
