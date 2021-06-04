function konamiCode(name) {
  if (arguments.length < 1) {
    return "Use this on your journey, nameless traveller! \n⬆ ⬆ ⬇ ⬇ ⬅ ➡ ⬅ ➡ 🅱 🅰 \n(Up, Up, Down, Down, Left, Right, Left, Right, B, A)";
  }
  return `Now you're playing with power, ${name}! Use this: \n⬆ ⬆ ⬇ ⬇ ⬅ ➡ ⬅ ➡ 🅱 🅰 \n(Up, Up, Down, Down, Left, Right, Left, Right, B, A)`;
}

module.exports = { konamiCode };

