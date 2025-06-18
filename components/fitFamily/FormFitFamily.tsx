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
    <div className="flex flex-col py-3 gap-5">

      <div className="flex">
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
      </div>
      <button className="bg-indigo-900 text-white mx-2 p-1 rounded-lg cursor-pointer" onClick={calcular}>Calcular</button>
      <p className="bg-zinc-100 p-1 text-black">Resultado {imc.toFixed(1)}</p>
    </div>
  )
}

export default FormFitFamily
