import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from '@heroicons/react/20/solid';
import Image from 'next/image';

const features = [
  {
    name: 'Conexiones eléctricas para todo tipo de electrodomésticos.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Piezas para fábricas de partes para motocicletas.',

    icon: LockClosedIcon,
  },
  {
    name: 'Componentes para fábricas de automotores.',

    icon: LockClosedIcon,
  },
  {
    name: 'Productos para fábricas de elementos de aseo.',

    icon: LockClosedIcon,
  },
];

export default function Example() {
  return (
    <div className='overflow-hidden bg-white py-24 sm:py-32'>
      <div className='mx-auto mx-10 md:pl-36'>
        <div className='mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2'>
          <Image
            src='https://firebasestorage.googleapis.com/v0/b/herpe-10524.appspot.com/o/PROCESOS%20PRODUCCIO%CC%81N%20FABRICA%202DA%20VERSIO%CC%81N%20%2B%20LUZ%20(3).jpg?alt=media&token=91e7003d-3780-48d1-befb-a7ddd0737e07'
            alt='Product screenshot'
            className='  w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-52 -ml-64 '
            width={2432}
            height={1442}
          />
          <div className='lg:pr-8 lg:pt-4 mx-5'>
            <div className='lg:max-w-lg'>
              <h2 className='text-base font-semibold leading-7 text-[#fccb32]'>
                Industrias Herpe SAS
              </h2>
              <p className='mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
                Nuestra Capacidad de Producción
              </p>
              <p className='mt-6 text-lg leading-8 text-gray-600'>
                Nuestra capacidad de producción abarca troqueles y piezas en una variedad de metales, tales como hierro, latón, cobre, acero inoxidable y acero. Atendemos a diversas industrias, ofreciendo soluciones precisas y confiables:
              </p>
              <dl className='mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none'>
                {features.map((feature) => (
                  <div key={feature.name} className='relative pl-9'>
                    <dt className='inline font-semibold text-gray-900'>
                      <feature.icon
                        className='absolute left-1 top-1 h-5 w-5 text-yellow-600'
                        aria-hidden='true'
                      />
                      {feature.name}
                    </dt>{' '}
                  </div>
                ))}
              </dl>

            </div>
          </div>
        </div>
        <div className='mx-5'>
          <p className='mt-20 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
            Compromiso con la Calidad
          </p>
          <p className='mt-6 text-lg leading-8 text-gray-600'>
            En Herpe SAS, nos enorgullece contar con todas las herramientas técnicas necesarias para producir troqueles de alta calidad y la maquinaria adecuada para la producción de piezas específicas según las necesidades de nuestros clientes. Nuestra misión es ofrecer soluciones precisas y confiables, manteniendo siempre los más altos estándares de calidad.
          </p>
        </div>
      </div>
    </div>
  );
}
