import React from 'react';
import Image from "next/image";
import Footer from "@/components/organisms/Footer";

const page = () => {
    return (
        <div>
            <div className="relative h-full w-full">
                <Image
                    src="https://firebasestorage.googleapis.com/v0/b/herpe-10524.appspot.com/o/Industries.jpg?alt=media&token=f6aa88a2-2514-4a1c-8012-e537bd67d141"
                    width={1000}
                    className="h-[40vh] w-full object-cover object-center"
                    alt="Hero Image"
                    height={2000}
                />
                <div
                    className="absolute inset-0 grid h-full w-full bg-black/40 text-white font-bold text-4xl">
                    <h2 className='relative top-[70%] ml-[5%] md:ml-8'>Industrias</h2>
                </div>
            </div>
            <div className='bg-yellow-50/70 p-28'>
                <h3 className='font-bold text-3xl mb-4 text-gray-700'>Industrias con las cuales trabajamos</h3>
                <p className='text-justify'>
                    Industrias Herpe S.A.S. es una empresa versátil y dinámica que abastece a diversas industrias con
                    productos de alta calidad. Desde la fabricación de repuestos para vehículos, asegurando la
                    eficiencia y seguridad en el transporte, hasta la producción de cables y conectores para
                    electrodomésticos, garantizando conexiones fiables y duraderas en el hogar. Además, su experiencia
                    se extiende incluso al sector de defensa, donde contribuyen con la fabricación de piezas para
                    armamento, cumpliendo con los más altos estándares de precisión y fiabilidad para satisfacer las
                    demandas de seguridad nacional. Con un compromiso constante con la excelencia y la innovación,
                    Industrias Herpe S.A.S. continúa siendo un socio confiable y líder en múltiples industrias.
                </p>

            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto p-20 gap-3'>
                <div>
                    <h2 className='font-bold text-lg border-b-4 w-1/2 border-yellow-400 mb-2'>Automotriz</h2>
                    <p>Industrias Herpe S.A.S. es una empresa versátil y dinámica que abastece a diversas industrias con
                        productos de alta calidad. Desde la fabricación de repuestos para vehículos, asegurando la
                        eficiencia y seguridad en el transporte, hasta la producción de cables y conectores para
                        electrodomésticos,</p>
                </div>
                <div>
                    <h2 className='font-bold text-lg border-b-4 w-1/2 border-yellow-400 mb-2'>Electro hogar</h2>
                    <p>Industrias Herpe S.A.S. es una empresa versátil y dinámica que abastece a diversas industrias con
                        productos de alta calidad. Desde la fabricación de repuestos para vehículos, asegurando la
                        eficiencia y seguridad en el transporte, hasta la producción de cables y conectores para
                        electrodomésticos,</p>
                </div>
                <div>
                    <h2 className='font-bold text-lg border-b-4 w-1/2 border-yellow-400 mb-2'>Armamento</h2>
                    <p>Industrias Herpe S.A.S. es una empresa versátil y dinámica que abastece a diversas industrias con
                        productos de alta calidad. Desde la fabricación de repuestos para vehículos, asegurando la
                        eficiencia y seguridad en el transporte, hasta la producción de cables y conectores para
                        electrodomésticos,</p>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default page;