import { join } from "path";
import { fileURLToPath } from "url";
import { qwikCityGenerate } from "@builder.io/qwik-city/static/node";
import render from "./entry.ssr";

qwikCityGenerate(render, {
  origin: "https://qwik.tagir-a.com",
  outDir: join(__dirname, "dist"),
});
