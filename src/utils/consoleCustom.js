export const consoleCustom = {
  log: () => {
    console.log.apply(console, arguments);
  },

  error: () => {
    console.error.apply(console, arguments);
  },

  dir: () => {
    console.dir.apply(console, arguments);
  },
};
