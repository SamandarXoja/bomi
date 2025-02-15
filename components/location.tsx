"use client";

import { Globe, Headset, Mail } from "lucide-react";
import { useEffect } from "react";
declare global {
    interface Window {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ymaps?: any;
    }
}

export default function Location() {

    useEffect(() => {
        const loadMap = () => {
            if (typeof window !== "undefined" && window.ymaps) {
                window.ymaps.ready(() => {
                    const map = new window.ymaps.Map("map", {
                        center: [41.312531, 69.244106], // Локация
                        zoom: 15, // Уровень увеличения
                    });

                    // Создаем метку
                    const placemark = new window.ymaps.Placemark(
                        [41.312531, 69.244106], // Координаты метки
                        {
                            hintContent: "Моя локация", // Подсказка при наведении
                            balloonContent: "Здесь находится нужное место", // Балун при клике
                        },
                        {
                            preset: "islands#redDotIcon", // Стиль метки (можно изменить)
                        }
                    );

                    map.geoObjects.add(placemark); // Добавляем метку на карту
                });
            }
        };

        if (typeof window !== "undefined" && !window.ymaps) {
            const script = document.createElement("script");
            script.src = "https://api-maps.yandex.ru/2.1/?lang=ru_RU";
            script.async = true;
            script.onload = loadMap;
            document.body.appendChild(script);
        } else {
            loadMap();
        }
    }, []);



    return (
        <section id="location" className="mapSize ">

            <div className="container flex mx-auto px-4 justify-between">
                <div className="" style={{ overflow: "hidden", borderRadius: "20px", width: "600px", height: "600px" }}>
                    <div id="map" style={{ width: "600px", height: "600px", borderRadius: "20px" }} />
                </div>
                <div className="footer-cards">
                    <div className="flex flex-col justify-center items-center ">
                        <Headset size={50} color="#000" />
                        <p className="mt-2 mb-2">Телефон</p>
                        <a href="tel:+998772996000">+998 77 299 60 00</a>
                    </div>

                    <div className="flex flex-col justify-center items-center">
                        <Globe size={50} color="#000" />
                        <p className="mt-2 mb-2">АДРЕС</p>
                        <p>Г.Ташкент.Шайхантахурский район</p>
                    </div>


                    <div className="flex flex-col justify-center items-center">
                        <Mail size={50} color="#000" />
                        <p className="mt-2 mb-2">EMAIL</p>
                        <a href="mailto:info@Bomi.uz">info@Bomi.uz</a>

                    </div>
                </div>
            </div>

        </section>
    )
}