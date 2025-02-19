"use client";

import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import telegram from "@/public/images/telegram3.svg"
import Image from "next/image";


function Footer() {


    return (
        <footer className="mt-[100px]" id="contacts">
            <div className="container mx-auto px-4">


                <div className="flex justify-center footer-socials">
                    <div className="footer-social">
                        <Instagram color="#fff" />
                    </div>
                    <div className="footer-social">
                        <Facebook color="#fff" />
                    </div>
                    <div className="footer-social">
                        <Image src={telegram} width={35} height={35} alt="ff" />
                    </div>
                    <div className="footer-social">
                        <Linkedin color="#fff" />
                    </div>
                    <div className="footer-social">
                        <Instagram color="#fff" />
                    </div>
                    <div className="footer-social">
                        <Youtube color="#fff" />
                    </div>
                </div>
            </div>

            <div className="bg-[#1E90FF] footer-line">

            </div>


        </footer>
    );
}

export default Footer;
