export function formatProductName(name: string) {
  return name
    .toLowerCase()
    .split(" ")
    .map((word) =>
      word
        .split("")
        .map((letter, index) => {
          if (index === 0) return letter.toUpperCase();
          return letter;
        })
        .join("")
    )
    .join(" ");
}
