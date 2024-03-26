import Image from 'next/image';

function Footer() {
    return (
        <div className="flex flex-col bg-[#ffeec9] p-4 ">
            <div className='flex flex-col justify-center md:flex-row md:justify-around items-center  md:items-start mt-10'>
                <div>
                    <a href='#' className=''>
                        <Image
                            className='h-12 mx-auto'
                            src='/images/logoHerpe.png'
                            alt='Herpe logo'
                            width='50'
                            height='50'
                        />

                        <span className='text-black font-bold'>Herpe S.A.S</span>
                    </a>
                </div>
                <div>
                    <h4><a className="font-bold hover:cursor-pointer" href='/productos'>Productos</a></h4>

                </div>
                <div>
                    <h4><a className="font-bold hover:cursor-pointer" href='/quienessomos'>¿Quienes somos?</a></h4>
                </div>


            </div>
            <div className='mt-10 mr-10 text-end'>
                <small>© 2024 Herpe SAS, todos los derechos reservados.</small>
            </div>
        </div>
    )
        ;
}

export default Footer;
