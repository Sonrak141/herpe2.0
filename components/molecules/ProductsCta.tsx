import Image from "next/image"

export default function ProductsCta() {
    return (
        <div className="bg-white">
            <div className="mx-auto w-[80%] py-24 sm:px-6 sm:py-32 lg:px-8">
                <div className="relative isolate   lg:flex  lg:pt-0">

                    <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">

                        <p className="mt-6 mr-5 text-lg text-[#505050] leading-8">
                            En Industrias Herpe SAS, nos especializamos en la fabricación de una amplia variedad de piezas metálicas de alta calidad, diseñadas para satisfacer las necesidades de múltiples sectores industriales. Desde nuestros inicios, hemos desarrollado un profundo conocimiento técnico y una capacidad de producción avanzada que nos permite ofrecer soluciones innovadoras y confiables.
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                            <a
                                href="/contactanos"
                                className="rounded-md bg-[#fccb32] px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                            >
                                Contactanos
                            </a>
                        </div>
                    </div>
                    <div className="relative mt-16 h-80 lg:mt-8">
                        <Image
                            className="absolute -left-10 md:left-20 right-0 -top-8 md:w-[57rem] max-w-none rounded-[1rem] bg-white/5 ring-1 ring-white/10"
                            src="/images/productDetail.jpg"
                            alt="App screenshot"
                            width={
                                500
                            }
                            height={
                                200
                            }

                        />
                    </div>
                </div>
            </div>
        </div>
    )
}