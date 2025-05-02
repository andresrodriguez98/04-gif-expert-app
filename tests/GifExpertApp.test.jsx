import { render, screen } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";

describe("Pruebas en onAddCategory", () => {
  test("debe agregar una categoría si no existe", () => {
    const categories = ["Dragon Ball"];
    const setCategories = jest.fn();

    const onAddCategory = (newCategory) => {
      if (categories.includes(newCategory)) return;
      setCategories([newCategory, ...categories]);
    };

    onAddCategory("One Piece");
    expect(setCategories).toHaveBeenCalledWith(["One Piece", ...categories]);
  });

  test("no debe agregar una categoría si ya existe", () => {
    const categories = ["Dragon Ball"];
    const setCategories = jest.fn();

    const onAddCategory = (newCategory) => {
      if (categories.includes(newCategory)) return;
      setCategories([newCategory, ...categories]);
    };

    onAddCategory("Dragon Ball");
    expect(setCategories).not.toHaveBeenCalled();
  });
});
