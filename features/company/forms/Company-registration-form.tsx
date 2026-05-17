"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Field, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  companyRegistrationSchema,
  type CompanyRegistrationInput,
} from "@/lib/validations/company-registration";

export function CompanyRegistrationForm() {
  const form = useForm<CompanyRegistrationInput>({
    resolver: zodResolver(companyRegistrationSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
  });

  function onSubmit(_values: CompanyRegistrationInput) {
    return;
  }

  return (
    <div className="border border-border bg-card px-8 py-10 text-left shadow-sm">
      <h3 className="text-lg font-semibold text-foreground">
        Regisztrálj ingyenes fiókot
      </h3>

      <form onSubmit={form.handleSubmit(onSubmit)} className="mt-6">
        <FieldGroup>
          <div className="grid gap-4 sm:grid-cols-2">
            <Controller
              control={form.control}
              name="firstName"
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={field.name}>Vezetéknév</FieldLabel>
                  <Input
                    {...field}
                    id={field.name}
                    placeholder="Vezetéknév"
                    aria-invalid={fieldState.invalid}
                  />
                  {fieldState.invalid ? (
                    <FieldError errors={[fieldState.error]} />
                  ) : null}
                </Field>
              )}
            />

            <Controller
              control={form.control}
              name="lastName"
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={field.name}>Keresztnév</FieldLabel>
                  <Input
                    {...field}
                    id={field.name}
                    placeholder="Keresztnév"
                    aria-invalid={fieldState.invalid}
                  />
                  {fieldState.invalid ? (
                    <FieldError errors={[fieldState.error]} />
                  ) : null}
                </Field>
              )}
            />
          </div>

          <Controller
            control={form.control}
            name="email"
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor={field.name}>Email cím</FieldLabel>
                <Input
                  {...field}
                  id={field.name}
                  type="email"
                  placeholder="Email cím"
                  aria-invalid={fieldState.invalid}
                />
                {fieldState.invalid ? (
                  <FieldError errors={[fieldState.error]} />
                ) : null}
              </Field>
            )}
          />

          <Controller
            control={form.control}
            name="password"
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor={field.name}>Jelszó</FieldLabel>
                <Input
                  {...field}
                  id={field.name}
                  type="password"
                  placeholder="Jelszó létrehozása"
                  aria-invalid={fieldState.invalid}
                />
                {fieldState.invalid ? (
                  <FieldError errors={[fieldState.error]} />
                ) : null}
              </Field>
            )}
          />

          <Button type="submit" className="w-fit">
            Regisztráció
          </Button>
        </FieldGroup>
      </form>
    </div>
  );
}