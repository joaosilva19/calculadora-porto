import React, { useState } from "react";

export default function CalculadoraPorto() {
  const [activeTab, setActiveTab] = useState("gasolina");

  const [gastoMensal, setGastoMensal] = useState(500);
  const [precoLitro, setPrecoLitro] = useState(5.5);
  const [descontoGasolina, setDescontoGasolina] = useState(15);
  const [mensagem, setMensagem] = useState("");

  const litros = gastoMensal / precoLitro;
  const economiaMensal = litros * (descontoGasolina / 100);
  const economiaAnual = economiaMensal * 12;

  const [premioTotal, setPremioTotal] = useState(3000);
  const [porcentagemDesconto, setPorcentagemDesconto] = useState(10);
  const valorComDesconto = (premioTotal * (1 - porcentagemDesconto / 100)).toFixed(2);

  const calcularMensagem = () => {
    const msg = `
🚗 Benefício: Gasolina
- Gasto mensal: R$ ${gastoMensal.toFixed(2)}
- Preço por litro: R$ ${precoLitro.toFixed(2)}
- Desconto: ${descontoGasolina} centavos
- Litros abastecidos: ${litros.toFixed(2)}
- Economia mensal: R$ ${economiaMensal.toFixed(2)}
- Economia anual: R$ ${economiaAnual.toFixed(2)}

Além disso, o cartão oferece até 15% de desconto na renovação do seguro!`;
    setMensagem(msg);
  };

  const copiarMensagem = () => {
    navigator.clipboard.writeText(mensagem);
    alert("Mensagem copiada! ✅");
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl bg-gray-800 rounded-xl shadow-2xl p-6">
        <h1 className="text-3xl font-extrabold text-blue-400 text-center mb-8">
          🧮 Calculadora - Cartão Porto Seguro
        </h1>

        <div className="flex justify-center mb-8 space-x-4">
          <button
            onClick={() => setActiveTab("gasolina")}
            className={`px-4 py-2 rounded-full font-semibold transition duration-200 focus:outline-none ${
              activeTab === "gasolina"
                ? "bg-blue-600 text-white shadow-lg"
                : "bg-gray-700 text-gray-300 hover:bg-gray-600"
            }`}
          >
            ⛽ Gasolina
          </button>
          <button
            onClick={() => setActiveTab("renovacao")}
            className={`px-4 py-2 rounded-full font-semibold transition duration-200 focus:outline-none ${
              activeTab === "renovacao"
                ? "bg-blue-600 text-white shadow-lg"
                : "bg-gray-700 text-gray-300 hover:bg-gray-600"
            }`}
          >
            📉 Renovação
          </button>
        </div>

        {activeTab === "gasolina" && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-300 mb-1">
                  Gasto mensal (R$)
                </label>
                <input
                  type="number"
                  value={gastoMensal}
                  onChange={(e) => setGastoMensal(Number(e.target.value))}
                  className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-1">
                  Preço por litro (R$)
                </label>
                <input
                  type="number"
                  value={precoLitro}
                  onChange={(e) => setPrecoLitro(Number(e.target.value))}
                  className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-gray-300 mb-1">
                  Desconto por litro (centavos)
                </label>
                <input
                  type="number"
                  value={descontoGasolina}
                  onChange={(e) => setDescontoGasolina(Number(e.target.value))}
                  className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={calcularMensagem}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition duration-200"
              >
                🚀 Calcular Economia
              </button>
              <button
                onClick={copiarMensagem}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-lg transition duration-200"
              >
                📋 Copiar Mensagem
              </button>
            </div>

            {mensagem && (
              <div className="p-4 bg-gray-700 rounded-lg text-sm font-mono whitespace-pre-wrap border border-gray-600">
                {mensagem}
              </div>
            )}

            <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
              <div className="p-4 bg-gray-800 rounded-lg">
                <div className="text-xl font-bold text-green-400">
                  R$ {economiaMensal.toFixed(2)}
                </div>
                <div className="text-sm text-gray-400">Mensal</div>
              </div>
              <div className="p-4 bg-gray-800 rounded-lg">
                <div className="text-xl font-bold text-green-400">
                  R$ {economiaAnual.toFixed(2)}
                </div>
                <div className="text-sm text-gray-400">Anual</div>
              </div>
              <div className="p-4 bg-gray-800 rounded-lg">
                <div className="text-xl font-bold text-green-400">
                  {litros.toFixed(2)} L
                </div>
                <div className="text-sm text-gray-400">Abastecidos</div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "renovacao" && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-300 mb-1">
                  Prêmio total (R$)
                </label>
                <input
                  type="number"
                  value={premioTotal}
                  onChange={(e) => setPremioTotal(Number(e.target.value))}
                  className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-1">
                  Desconto (%)
                </label>
                <input
                  type="number"
                  value={porcentagemDesconto}
                  onChange={(e) => setPorcentagemDesconto(Number(e.target.value))}
                  className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <button
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition duration-200"
            >
              🔥 Calcular Valor com Desconto
            </button>

            <div className="mt-4 p-4 bg-gray-800 rounded-lg text-center text-xl font-semibold">
              💵 Valor com desconto: <span className="text-green-400">R$ {valorComDesconto}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
