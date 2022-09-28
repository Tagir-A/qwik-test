import { component$, Slot } from "@builder.io/qwik";

export default component$(() => {
  return (
    <>
      <section>
        <Slot />
      </section>
      <footer>
        <a href="https://www.builder.io/" target="_blank">
          Made with ButterBrot
        </a>
      </footer>
    </>
  );
});
