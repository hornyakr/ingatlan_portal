"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Search } from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";

import { SearchPanel } from "@/components/common/Search-panel";
import { Button } from "@/components/ui/button";
import { Field, FieldError, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

const agentSearchPanelSchema = z.object({
  query: z.string().trim().max(120),
});

type AgentSearchPanelFormValues = z.infer<typeof agentSearchPanelSchema>;

type AgentSearchPanelProps = {
  placeholder: string;
  submitLabel?: string;
};

export function AgentSearchPanel({
  placeholder,
  submitLabel = "Keresés",
}: AgentSearchPanelProps) {
  const form = useForm<AgentSearchPanelFormValues>({
    resolver: zodResolver(agentSearchPanelSchema),
    defaultValues: {
      query: "",
    },
  });

  function onSubmit(_values: AgentSearchPanelFormValues) {
    return;
  }

  return (
    <SearchPanel>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid gap-3 md:grid-cols-[1fr_56px]"
      >
        <FieldGroup className="contents">
          <Controller
            control={form.control}
            name="query"
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <Input
                  {...field}
                  placeholder={placeholder}
                  aria-label={placeholder}
                  aria-invalid={fieldState.invalid}
                  className="bg-background text-foreground"
                />

                {fieldState.invalid ? (
                  <FieldError errors={[fieldState.error]} />
                ) : null}
              </Field>
            )}
          />

          <Button type="submit" size="icon" aria-label={submitLabel}>
            <Search className="h-5 w-5" />
          </Button>

          <div className="flex justify-end text-xs md:col-span-full">
            <button type="button" className="hover:underline">
              RÉSZLETES KERESÉS
            </button>
          </div>
        </FieldGroup>
      </form>
    </SearchPanel>
  );
}