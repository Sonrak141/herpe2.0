import Image from "next/image"
export default function ProductsCta() {
  return (
    <div className="bg-white">
      <div className="mx-auto w-[80%] py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="relative isolate   lg:flex  lg:pt-0">
          <svg
            viewBox="0 0 1024 1024"
            className="absolute left-[0.5rem] top-[0.5rem] -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
            aria-hidden="true"
          >
            <circle cx={512} cy={512} r={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
            <defs>
              <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                <stop stopColor="#7775D6" />
                <stop offset={1} stopColor="#E935C1" />
              </radialGradient>
            </defs>
          </svg>
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-[#484848] sm:text-4xl">
              Productos.
            </h2>
            <p className="mt-6 text-lg text-[#505050] leading-8">
              Conoce algunos de los productos que tenemos en producción, si te interesa alguno o necesitas algo mas a tu medida contactanos.
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
              className="absolute left-0 -top-8 w-[57rem] max-w-none rounded-[1rem] bg-white/5 ring-1 ring-white/10"
              src="/images/productDetail.jpg"
              alt="App screenshot"

            />
          </div>
        </div>
      </div>
    </div>
  )
}