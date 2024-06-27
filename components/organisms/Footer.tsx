import Image from 'next/image';

function Footer() {
    return (
        <div>
            <div className="flex flex-col bg-[#ffeec9] p-4 ">
                <div
                    className='flex flex-col justify-center md:justify-start md:ml-24 md:flex-row  items-center  md:items-start mt-10 mb-4`'>
                    <div>
                        <a href='#' className=''>
                            <Image
                                className='h-[3.5rem] w-auto mx-auto'
                                src="/images/Logo.svg"
                                alt='Herpe logo'
                                width='50'
                                height='80'
                            />
                        </a>

                    </div>
                    <div className='md:ml-16'>
                        <small>CALLE 24 F 102 23 BOD 103, BOGOTA, BOGOTA</small>
                        <br />
                        <small>601 743 2227, 3174016720, herpe@gomenal.com</small>
                    </div>


                </div>

            </div>
            <div className='w-full text-end bg-black py-2'>
                <small className='text-white md:mr-4'>© 2024 Herpe SAS, todos los derechos reservados.</small>
            </div>
        </div>
    )
        ;
}

export default Footer;
