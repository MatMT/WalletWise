import AmountDisplay from "./AmountDisplay";

export default function BudgetTracker() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <div className="flex justify-center">
        <img src="WalletWise/grafico.jpg" alt="Gráfica de gatos" />
      </div>

      <div className="flex flex-col justify-center items-center gap-8">
        <button
          type="button"
          className="bg-pink-600 p-2 text-white uppercase font-bold"
        >
          Reset App
        </button>

        <AmountDisplay label="Budget" amount={300} />
        <AmountDisplay label="Available" amount={200} />
        <AmountDisplay label="Spent" amount={100} />
      </div>
    </div>
  );
}
