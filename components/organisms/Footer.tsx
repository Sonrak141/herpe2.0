import Image from 'next/image';

function Footer() {
    return (
        <div className="flex flex-col bg-[#ffeec9] p-4 ">
            <div className='flex flex-row justify-around items-start mt-10'>
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
                    <h4><a className="font-bold hover:cursor-pointer">Productos</a></h4>
                    <ul>
                        <li>
                            <a className="hover:cursor-pointer"><small>Analytics</small></a>
                        </li>
                        <li>
                            <a className="hover:cursor-pointer"><small>Engagement</small></a>
                        </li>
                        <li>
                            <a className="hover:cursor-pointer"><small>Security</small></a>
                        </li>
                        <li>
                            <a className="hover:cursor-pointer"><small>Integrations</small></a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h4><a className="font-bold hover:cursor-pointer">¿Quienes somos?</a></h4>
                </div>
                <div>
                    <h4><a className="font-bold hover:cursor-pointer">¿Que hacemos?</a></h4>
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
