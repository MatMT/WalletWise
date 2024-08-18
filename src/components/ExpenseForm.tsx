import { categories } from "../data/categories";
import DatePicker from 'react-date-picker';
import 'react-calendar/dist/Calendar.css';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function ExpenseForm() {
  return (
    <form>
      <legend className="uppercase text-center text-2xl font-black border-b-4 py-2 border-blue-500">
        New Expense
      </legend>

      <div className="flex flex-col gap-2 mt-4">
        <label htmlFor="expenseName" className="text-xl">
          Name Expense:
        </label>
        <input
          type="text"
          id="expenseName"
          placeholder="Add the name of the expense"
          className="bg-slate-100 p-2"
          name="expenseName"
        />
      </div>

      <div className="flex flex-col gap-2 mt-4">
        <label htmlFor="amount" className="text-xl">
          Amount:
        </label>
        <input
          type="number"
          id="amount"
          placeholder="Add the expense amount:"
          className="bg-slate-100 p-2"
          name="amount"
        />
      </div>

      <div className="flex flex-col gap-2 mt-4">
        <label htmlFor="category" className="text-xl">
          Category:
        </label>
        <select id="category" className="bg-slate-100 p-2" name="category">
          <option value="" disabled selected>
            -- Select --
          </option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-2 mt-4">
        <label htmlFor="amount" className="text-xl">
          Expense Date:
        </label>
        <DatePicker
        className="bg-slate-100 p-2 border-0"
        />
      </div>

      <input type="submit" className="bg-blue-600 cursor-pointer w-full p-2 text-white hover:bg-blue-700 mt-4 uppercase rounded-lg" value="Register Expense" />
    </form>
  );
}
