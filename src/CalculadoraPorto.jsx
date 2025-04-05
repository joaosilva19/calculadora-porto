import { useState } from "react";

export default function CalculadoraPorto() {
  // Benefício: Gasolina
  const [gastoMensal, setGastoMensal] = useState(500);
  const [precoLitro, setPrecoLitro] = useState(5.5);
  const [desconto, setDesconto] = useState(15);
  const [mensagem, setMensagem] = useState("");

  // Benefício: Desconto na Renovação
  const [premioTotal, setPremioTotal] = useState(3000);
  const [porcentagemDesconto, setPorcentagemDesconto] = useState(10);
  const [valorComDesconto, setValorComDesconto] = useState(null);

  const calcular = () => {
    const litros = gastoMensal / precoLitro;
    const economiaMensal = litros * (desconto / 100);
    const economiaAnual = economiaMensal * 12;

    const msg = `
🚗 *Simulação de Economia com o Cartão Porto Seguro*:

📍 *Benefício: Gasolina*
- Gasto mensal com combustível: R$ ${gastoMensal.toFixed(2)}
- Preço médio por litro: R$ ${precoLitro.toFixed(2)}
- Desconto aplicado: ${desconto} centavos por litro

📊 Você abastece cerca de *${litros.toFixed(2)} litros/mês*
💰 Economia mensal: *R$ ${economiaMensal.toFixed(2)}*
💸 Economia anual: *R$ ${economiaAnual.toFixed(2)}*

Além disso, o cartão oferece:
✅ Connect Car gratuito
✅ Até 15% de desconto na renovação do seu seguro

Quer que eu te ajude a solicitar o seu? 😉
    `;

    setMensagem(msg);
  };

  const calcularDescontoRenovacao = () => {
    const descontoReais = (premioTotal * porcentagemDesconto) / 100;
    const valorFinal = premioTotal - descontoReais;
    setValorComDesconto(valorFinal.toFixed(2));
  };

  const copiarMensagem = () => {
    navigator.clipboard.writeText(mensagem);
    alert("Mensagem copiada! ✅");
  };

  return (
    <div className="max-w-xl mx-auto p-6 space-y-6 bg-gray-800 rounded-xl shadow-lg">
      <h1 className="text-3xl font-bold text-blue-400">🧮 Calculadora - Cartão Porto Seguro</h1>

      {/* Benefício: Gasolina */}
      <div className="space-y-4 bg-gray-900 p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-white">⛽ Benefício: Gasolina</h2>
        <div>
          <label className="block text-gray-400">Gasto mensal com combustível (R$)</label>
          <input
            type="number"
            value={gastoMensal}
            onChange={(e) => setGastoMensal(Number(e.target.value))}
          />
        </div>
        <div>
          <label className="block text-gray-400">Preço médio por litro (R$)</label>
          <input
            type="number"
            value={precoLitro}
            onChange={(e) => setPrecoLitro(Number(e.target.value))}
          />
        </div>
        <div>
          <label className="block text-gray-400">Desconto por litro (centavos)</label>
          <input
            type="number"
            value={desconto}
            onChange={(e) => setDesconto(Number(e.target.value))}
          />
        </div>
        <button
          onClick={calcular}
          className="w-full text-lg font-semibold"
        >
          🚀 Calcular Economia
        </button>
      </div>

      {/* Benefício: Desconto na Renovação */}
      <div className="space-y-4 bg-gray-900 p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-white">📉 Benefício: Desconto na Renovação</h2>
        <div>
          <label className="block text-gray-400">Prêmio total do seguro (R$)</label>
          <input
            type="number"
            value={premioTotal}
            onChange={(e) => setPremioTotal(Number(e.target.value))}
          />
        </div>
        <div>
          <label className="block text-gray-400">Porcentagem de desconto (%)</label>
          <input
            type="number"
            value={porcentagemDesconto}
            onChange={(e) => setPorcentagemDesconto(Number(e.target.value))}
          />
        </div>
        <button
          onClick={calcularDescontoRenovacao}
          className="w-full text-lg font-semibold"
        >
          🎯 Calcular Valor com Desconto
        </button>
        {valorComDesconto && (
          <div className="text-white">
            💵 Valor com desconto: <strong>R$ {valorComDesconto}</strong>
          </div>
        )}
      </div>

      {/* Resultado da simulação de economia */}
      {mensagem && (
        <div className="bg-gray-700 p-6 rounded-lg shadow-md space-y-4">
          <pre className="whitespace-pre-wrap font-mono text-sm bg-gray-800 p-4 rounded">{mensagem}</pre>
          <button
            onClick={copiarMensagem}
            className="border border-gray-500 w-full py-2 rounded-lg hover:bg-gray-600"
          >
            📋 Copiar mensagem para WhatsApp
          </button>
        </div>
      )}
    </div>
  );
}
