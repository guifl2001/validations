export const isValidPassword = (password: string): boolean =>
  !!password && /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/.test(password);