import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
  BoltIcon,
  SignalIcon,
  WrenchScrewdriverIcon,
  CubeIcon
} from '@heroicons/react/24/outline';

const features = [
  {
    name: 'Piezas eléctricas',
    description:
      '',
    icon: BoltIcon,
  },
  {
    name: 'Cables de alta calidad',
    description:
      '',
    icon: SignalIcon,
  },
  {
    name: 'Partes Automotrices',
    description:
      '',
    icon: WrenchScrewdriverIcon,
  },
  {
    name: 'Troqueles',
    description:
      '',
    icon: CubeIcon,
  },
];

export default function Example() {
  return (
    <div className='bg-white py-24 sm:py-32'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto max-w-2xl lg:text-center'>
          <h2 className='text-base font-semibold leading-7 text-[#fccb32]'>
            Desde 1985
          </h2>
          <p className='mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
            Tu mejor aliado para la fabricación de partes para tus productos
          </p>
          <p className='mt-6 text-lg leading-8 text-gray-600'>
            Nuestro compromiso va más allá de la fabricación de troqueles y
            piezas; nos esforzamos por ser un socio estratégico para nuestros
            clientes, entendiendo sus desafíos y colaborando estrechamente en la
            búsqueda de soluciones innovadoras y eficientes que impulsen su
            éxito.
          </p>
        </div>
        <div className='mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl'>
          <dl className='grid md:ml-36 max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16'>
            {features.map((feature) => (
              <div key={feature.name} className='relative pl-16'>
                <dt className='text-base font-semibold leading-7 text-gray-900'>
                  <div className='absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-[#fccb32]'>
                    <feature.icon
                      className='h-6 w-6 text-white'
                      aria-hidden='true'
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className='mt-2 text-base leading-7 text-gray-600'>
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
