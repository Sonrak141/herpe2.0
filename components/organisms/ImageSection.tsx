import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from '@heroicons/react/20/solid';
import Image from 'next/image';

const features = [
  {
    name: 'Push to deploy.',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'SSL certificates.',
    description:
      'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
    icon: LockClosedIcon,
  },
  {
    name: 'Database backups.',
    description:
      'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    icon: ServerIcon,
  },
];

export default function Example() {
  return (
    <div className='overflow-hidden bg-white py-24 sm:py-32'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2'>
          <div className='lg:pr-8 lg:pt-4'>
            <div className='lg:max-w-lg'>
              <h2 className='text-base font-semibold leading-7 text-[#fccb32]'>
                Conócenos
              </h2>
              <p className='mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
                Nuestra Historia
              </p>
              <p className='mt-6 text-lg leading-8 text-gray-600'>
                INDUSTRIAS HERPE SAS nació de la necesidad de fabricar terminales metálicas para instalaciones de alta tensión y cables de bujía para automóviles. Desde nuestros inicios, hemos reunido un equipo técnico altamente capacitado, entrenado por expertos franceses, y contamos con la maquinaria y el equipo de metrología necesarios para producir troqueles de alta calidad.
              </p>
              <p className='mt-6 text-xl font-bold tracking-tight text-gray-900 sm:text-xl'>
                Expansión a la Industria Militar
              </p>
              <p className='mt-2 text-lg leading-8 text-gray-600'>
                En el año 2002, expandimos nuestra producción para incluir piezas para la Industria Militar Colombiana, comenzando con la fabricación de la copa porta pólvora para granadas. Actualmente, suministramos una amplia gama de componentes para diversas aplicaciones militares, incluyendo pistolas, granadas y fusiles.
              </p>

            </div>
          </div>
          <Image
            src='https://firebasestorage.googleapis.com/v0/b/herpe-10524.appspot.com/o/PROCESOS%20PRODUCCIO%CC%81N%20FABRICA%202DA%20VERSIO%CC%81N%20%2B%20LUZ%20(2).jpg?alt=media&token=afff38eb-cce8-4275-930e-42b576812204'
            alt='Product screenshot'
            className='w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0'
            width={2432}
            height={1442}
          />
        </div>
      </div>
    </div>
  );
}
