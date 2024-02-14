import { render, screen } from "@testing-library/react";
import App from "./App";

test("render homepage", () => {
  // given
  render(<App />);
  // when
  // then
  expect(screen.getByText(/Home page/i)).toBeInTheDocument();
});

test("render pokemon list page", async () => {
  // given
  render(<App />);
  // when
  const $pokemonListLink = screen.getByRole("link", { name: /Liste/i });
  $pokemonListLink.click();
  // then
  expect(await screen.findByText("Pokedex")).toBeInTheDocument();
});

test("render on pokemon list page 10 pokemons", async () => {
  expect($pokemonList.length).toEqual(10);
});

test("render on pokemon list page 50 pokemons when the user change select value", async () => {
  expect($pokemonList.length).toEqual(50);
});

test("render pokemon detail", async () => {
  expect(await screen.findByRole("heading", { level: 2, name: "squirtle" }))
    .toBeInTheDocument;
});
