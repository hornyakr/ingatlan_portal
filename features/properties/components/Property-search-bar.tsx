"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Search } from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";

import { SearchPanel } from "@/components/common/Search-panel";
import { Button } from "@/components/ui/button";
import { Field, FieldError, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const propertySearchSchema = z.object({
  listingType: z.enum(["sale", "rent"]),
  propertyType: z.string().trim().max(80),
  location: z.string().trim().max(120),
  price: z.string().trim().max(40),
  area: z.string().trim().max(40),
  rooms: z.string().trim().max(40),
});

type PropertySearchFormValues = z.infer<typeof propertySearchSchema>;

export function PropertySearchBar() {
  const form = useForm<PropertySearchFormValues>({
    resolver: zodResolver(propertySearchSchema),
    defaultValues: {
      listingType: "sale",
      propertyType: "lakás",
      location: "",
      price: "",
      area: "",
      rooms: "",
    },
  });

  function onSubmit(_values: PropertySearchFormValues) {
    return;
  }

  return (
    <SearchPanel>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid gap-3 lg:grid-cols-[64px_120px_1fr_120px_120px_120px_56px]"
      >
        <FieldGroup className="contents">
          <Controller
            control={form.control}
            name="listingType"
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <RadioGroup
                  value={field.value}
                  onValueChange={field.onChange}
                  className="flex flex-col gap-1 text-xs"
                  aria-invalid={fieldState.invalid}
                >
                  <label className="flex items-center gap-2">
                    <RadioGroupItem value="sale" />
                    Eladó
                  </label>

                  <label className="flex items-center gap-2">
                    <RadioGroupItem value="rent" />
                    Kiadó
                  </label>
                </RadioGroup>

                {fieldState.invalid ? (
                  <FieldError errors={[fieldState.error]} />
                ) : null}
              </Field>
            )}
          />

          <Controller
            control={form.control}
            name="propertyType"
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <Input
                  {...field}
                  aria-label="Ingatlan típusa"
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
            name="location"
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <Input
                  {...field}
                  placeholder="Hol keresel?"
                  aria-label="Helyszín"
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
            name="price"
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <Input
                  {...field}
                  placeholder="ár"
                  aria-label="Ár"
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
            name="area"
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <Input
                  {...field}
                  placeholder="alapterület"
                  aria-label="Alapterület"
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
            name="rooms"
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <Input
                  {...field}
                  placeholder="szobaszám"
                  aria-label="Szobaszám"
                  aria-invalid={fieldState.invalid}
                />

                {fieldState.invalid ? (
                  <FieldError errors={[fieldState.error]} />
                ) : null}
              </Field>
            )}
          />

          <Button type="submit" size="icon" aria-label="Keresés">
            <Search className="h-5 w-5" />
          </Button>

          <div className="flex justify-end gap-6 text-xs lg:col-span-full">
            <button type="button" className="hover:underline">
              TÉRKÉP
            </button>
            <button type="button" className="hover:underline">
              RÉSZLETES KERESÉS
            </button>
          </div>
        </FieldGroup>
      </form>
    </SearchPanel>
  );
}