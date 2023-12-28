console.log(process.env.PORT ?? 3000);

const {SHELL, HOMEBREW_PREFIX} = process.env;
console.table({SHELL, HOMEBREW_PREFIX})