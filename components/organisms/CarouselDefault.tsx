import React from "react";
import { Carousel, Typography, Button } from "@material-tailwind/react";
import Image from "next/image";

function CarouselDefault() {
  return (
    <Carousel placeholder="">
      <div>
        <Image
          src="https://firebasestorage.googleapis.com/v0/b/herpe-10524.appspot.com/o/PROCESOS%20PRODUCCIO%CC%81N%20FABRICA%202DA%20VERSIO%CC%81N%20%2B%20LUZ%20(1).jpg?alt=media&token=d638d157-37ae-498a-8d88-ed6fc56cb30d"
          width={1000}
          className="h-[80vh] w-full object-cover object-top"
          alt="Hero Image"
          height={2000}
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/40">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              placeholder=""
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              Fabricacion de troqueles
            </Typography>
            <Typography
              placeholder=""
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              TROQUELES PROGRESIVOS CON ALIMENTADORES DE PIEZAS FABRICAMOS
              CONEXIONES PARA ELECTRODOMÉSTICOS
            </Typography>
            <div className="flex justify-center gap-2">
              <Button placeholder="" size="lg" color="yellow">
                Conoce nuestro productos
              </Button>
              <Button placeholder="" size="lg" color="white" variant="text">
                Escribenos
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Image
        src="https://firebasestorage.googleapis.com/v0/b/herpe-10524.appspot.com/o/PROCESOS%20PRODUCCIO%CC%81N%20FABRICA%202DA%20VERSIO%CC%81N%20%2B%20LUZ%20(1).jpg?alt=media&token=d638d157-37ae-498a-8d88-ed6fc56cb30d"
        width={1000}
        className="h-[80vh] w-full object-cover object-top"
        alt="Hero Image"
        height={2000}
      />

      <Image
        src="https://firebasestorage.googleapis.com/v0/b/herpe-10524.appspot.com/o/PROCESOS%20PRODUCCIO%CC%81N%20FABRICA%202DA%20VERSIO%CC%81N%20%2B%20LUZ%20(1).jpg?alt=media&token=d638d157-37ae-498a-8d88-ed6fc56cb30d"
        width={1000}
        className="h-[80vh] w-full object-cover"
        alt="Hero Image"
        height={2000}
      />
    </Carousel>
  );
}

export default CarouselDefault;
