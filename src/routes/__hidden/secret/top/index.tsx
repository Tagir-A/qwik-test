import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Link } from "@builder.io/qwik-city";
import { SecretComponent } from "~/components/secret";

export default component$(() => {
  return (
    <div>
      <h1>
        Welcome to Qwik, but mysterious <span class="lightning">⚡️</span>
      </h1>
      <SecretComponent />
    </div>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Hidden qwik",
};
