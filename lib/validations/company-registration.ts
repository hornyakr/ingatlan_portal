import { z } from "zod";

export const companyRegistrationSchema = z.object({
  firstName: z
    .string()
    .trim()
    .min(2, "A vezetéknév legalább 2 karakter legyen.")
    .max(50, "A vezetéknév legfeljebb 50 karakter lehet."),
  lastName: z
    .string()
    .trim()
    .min(2, "A keresztnév legalább 2 karakter legyen.")
    .max(50, "A keresztnév legfeljebb 50 karakter lehet."),
  email: z
    .string()
    .trim()
    .email("Adj meg érvényes email címet.")
    .max(120, "Az email cím legfeljebb 120 karakter lehet."),
  password: z
    .string()
    .min(8, "A jelszó legalább 8 karakter legyen.")
    .max(72, "A jelszó legfeljebb 72 karakter lehet."),
});

export type CompanyRegistrationInput = z.infer<typeof companyRegistrationSchema>;