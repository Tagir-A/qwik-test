import { component$ } from "@builder.io/qwik";
import { Counter } from "../counter";

export default component$(() => {
  return (
    <>
      Absolutely secret component!2!11
      <Counter />
    </>
  );
});
