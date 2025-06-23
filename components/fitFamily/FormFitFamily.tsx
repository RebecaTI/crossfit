"use client"

import React, { useState } from 'react'
import CampForm from './CampForm';
import Image from 'next/image';

const FormFitFamily = () => {
  const [peso, setPeso] = useState<number>(0);
  const [altura, setAltura] = useState<number>(0);
  const [imc, setImc] = useState<number>(0);

  function calcular() {
    const res = peso / (altura * altura);
    setImc(res)
  }

  return (
    <div className="flex flex-col py-3 gap-5">

      <div className="flex flex-col gap-4">
        <CampForm
          label="Peso"
          state={peso || ""}
          funcState={setPeso}
        />
        <CampForm
          label="Altura"
          state={altura ? (altura * 100).toString() : ""}
          funcState={(value: number) => setAltura(value)}
          formatter={(value) => {
            const numeric = value.replace(/\D/g, "");
            if (numeric.length === 0) return 0;
            return parseFloat(numeric) / 100;
          }}
        />
      </div>
      <button
        className=" text-white mx-2 cursor-pointer border rounded-lg pl-25 sm:pl-65 lg:pl-44 flex items-center text-lg hover:bg-zinc-800 transition-all duration-200"
        onClick={calcular}>
        Calcular
        <Image
          src="./images/thin-arrow.svg"
          alt="thin arrow"
          width={40}
          height={40}
          className="border rounded-lg ml-auto p-1"
        />
      </button>
      <p className="bg-zinc-100 p-1 pl-5 text-black rounded-lg text-lg bolder">Resultado {imc.toFixed(1)}</p>
    </div>
  )
}

export default FormFitFamily
