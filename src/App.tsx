import { useBookStore } from "./store/bookStore";
const App = () => {
  const amount = useBookStore((state) => state.amount);
  const title = useBookStore((state) => state.author);
  const updateAmount = useBookStore((state) => state.updateAmount);
  return (
    <div>
      <p>
        App :{amount} {title}{" "}
      </p>
      <button onClick={() => updateAmount(10)}>Update</button>
    </div>
  );
};

export default App;
