export default function TabelaImc() {
  return (
    <div className="mx-4 my-20 sm:my-10 h-[350px] w-[400px] sm:h-[450px] sm:w-[500px] bg-black rounded-[70%] flex flex-col justify-center ">
      <div className="flex">
        <div className="w-1/2 border p-4 text-2xl bolder">Classificação</div>
        <div className="w-1/2 border p-4 text-2xl  bolder">IMC</div>
      </div>
      <div className="flex">
        <div className="w-1/2 border pl-3 py-2 text-lg">Abaixo do Peso</div>
        <div className="w-1/2 border pl-3 py-2 text-lg">Abaixo de 18,5</div>
      </div>
      <div className="flex">
        <div className="w-1/2 border pl-3 py-2 text-lg">Peso Normal</div>
        <div className="w-1/2 border pl-3 py-2 text-lg">Entre 18,5 e 24,9</div>
      </div>
      <div className="flex">
        <div className="w-1/2 border pl-3 py-2 text-lg">Sobrepeso</div>
        <div className="w-1/2 border pl-3 py-2 text-lg">Entre 25 e 29,9</div>
      </div>
      <div className="flex">
        <div className="w-1/2 border pl-3 py-2 text-lg">Obesidade Grau I</div>
        <div className="w-1/2 border pl-3 py-2 text-lg">Entre 30 e 34,9</div>
      </div>
      <div className="flex">
        <div className="w-1/2 border pl-3 py-2 text-lg">Obesidade Grau II</div>
        <div className="w-1/2 border pl-3 py-2 text-lg">Entre 35 e 39,9</div>
      </div>
      <div className="flex">
        <div className="w-1/2 border pl-3 py-2 text-lg">Obesidade Grau III</div>
        <div className="w-1/2 border pl-3 py-2 text-lg">Maior que 40</div>
      </div>
    </div>
  )
}
