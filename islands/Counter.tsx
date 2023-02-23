import { Hello } from "../components/Hello.tsx";

interface CounterProps {
  start: number;
}

export default function Counter(props: CounterProps) {
  return (
    <Hello />
  );
}
