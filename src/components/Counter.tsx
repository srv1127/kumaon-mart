import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../store/store";
import { increment, decrement } from "../store/counterSlice";

export default function Counter() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className="flex flex-col items-center gap-4 p-6 bg-white/10 rounded-xl">
      <h1 className="text-2xl font-bold">Count: {count}</h1>

      <div className="flex gap-3">
        <button
          onClick={() => dispatch(increment())}
          className="px-4 py-2 bg-green-500 rounded-lg"
        >
          +
        </button>

        <button
          onClick={() => dispatch(decrement())}
          className="px-4 py-2 bg-red-500 rounded-lg"
        >
          -
        </button>
      </div>
    </div>
  );
}

