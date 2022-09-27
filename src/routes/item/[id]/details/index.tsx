import { component$ } from "@builder.io/qwik";
import { DocumentHead, useLocation } from "@builder.io/qwik-city";
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
  const location = useLocation();

  return <div>much nesting {location.query.q}</div>;
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
};
