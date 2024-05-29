import AboutSection from '@/components/organisms/AboutSection';
import Footer from '@/components/organisms/Footer';
import ImageSection from '@/components/organisms/ImageSection';
import Image from "next/image";
import React from "react";

function page() {
    return (
        <div>
            <div className="relative h-full w-full">
                <Image
                    src="https://images.unsplash.com/photo-1501523460185-2aa5d2a0f981?q=80&w=3331&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    width={1000}
                    className="h-[40vh] w-full object-cover object-center"
                    alt="Hero Image"
                    height={2000}
                />
                <div
                    className="absolute inset-0 grid h-full w-full bg-black/40 text-white font-bold text-4xl">
                    <h2 className='relative top-[70%] ml-[5%] md:ml-8'>Empresa</h2>
                </div>
            </div>
            <ImageSection/>
            <AboutSection/>
            <Footer/>
        </div>
    );
}

export default page;
