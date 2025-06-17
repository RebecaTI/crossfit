"use client"

import React, { useState } from 'react'
import CampForm from './CampForm';

const FormFitFamily = () => {
  const [peso, setPeso] = useState<number>(0);
  const [altura, setAltura] = useState<number>(0);
  const [imc, setImc] = useState<number>(0);

  function calcular() {
    const res = peso / (altura * altura);
    setImc(res)
  }

  return (
    <div className="flex flex-col border border-black w-[300px] gap-5">
      <p className="w-full text-center bg-zinc-400 font-bold text-ld text-black">Cálculo do IMC</p>
      <CampForm
        label="Peso"
        state={peso}
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
      <button className="bg-indigo-900 text-white mx-2 p-1 rounded-lg cursor-pointer" onClick={calcular}>Calcular</button>
      <p className="bg-zinc-100 p-1 text-black">Resultado {imc.toFixed(1)}</p>
    </div>
  )
}

export default FormFitFamily
