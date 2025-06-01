export function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function isValidPassword(password: string): boolean {
  return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/.test(password);
}

export function isValidPostalCode(postalCode: string): boolean {
  return /^\d{5}$/.test(postalCode);
}

export function isValidPhoneNumber(phone: string): boolean {
  return /^0[1-9](?:[\s.-]?\d{2}){4}$/.test(phone);
}