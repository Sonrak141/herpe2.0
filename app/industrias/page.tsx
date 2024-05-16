import React from 'react';
import Image from "next/image";

const page = () => {
    return (
        <div>
            <div className="relative h-full w-full">
                <Image
                    src="https://firebasestorage.googleapis.com/v0/b/herpe-10524.appspot.com/o/Conectores.PNG?alt=media&token=6db5aa2e-cee4-400a-8e19-dc9b7eeca952"
                    width={1000}
                    className="h-[40vh] w-full object-cover object-center"
                    alt="Hero Image"
                    height={2000}
                />
                <div
                    className="absolute inset-0 grid h-full w-full bg-black/40 text-white font-bold text-4xl">
                    <h2 className='mt-[75%] md:mt-80 ml-[5%] md:ml-8'>Industrias</h2>
                </div>
            </div>
            <div className='bg-yellow-50/70 p-44'>
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
        </div>
    );
};

export default page;