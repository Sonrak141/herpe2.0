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
                    src="https://firebasestorage.googleapis.com/v0/b/herpe-10524.appspot.com/o/White%20pipes%20ceiling%20photo.jpg?alt=media&token=6c5370cb-991e-4767-b009-edb15935f7ed"
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
            <ImageSection />
            <AboutSection />
            <Footer />
        </div>
    );
}

export default page;
