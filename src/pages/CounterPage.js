import Button from "../components/Button";
import useCounter from "../hooks/use-counter";


function CounterPage({ initialCount }) {
  const {count, handleIncrement} = useCounter(initialCount);
  return (
    <div>
      <h1>Count is {count}</h1>
      <Button onClick={handleIncrement}>Increment</Button>
    </div>
  );
}

export default CounterPage;
