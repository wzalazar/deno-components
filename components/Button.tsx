import { JSX } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";

export function Hello(props: JSX.HTMLAttributes<HTMLButtonElement>) {
  return (
    <H1>Hello world!</H1>
  );
}
