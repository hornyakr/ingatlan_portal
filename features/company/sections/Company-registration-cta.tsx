import { CompanyRegistrationForm } from "../forms/Company-registration-form";

export function CompanyRegistrationCta() {
  return (
    <section className="bg-background">
      <div className="relative bg-secondary px-6 py-12 text-center lg:px-8">
        <h2 className="text-3xl font-medium tracking-tight text-foreground">
          Készen állsz, hogy csatlakozz?
        </h2>

        {/* éles V alak */}
        <div className="absolute inset-x-0 top-full leading-none">
          <svg
            viewBox="0 0 100 20"
            preserveAspectRatio="none"
            className="h-12 w-full fill-secondary"
          >
            <polygon points="0,0 100,0 50,20" />
          </svg>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-6 py-16 text-center lg:px-8">
        <p className="mx-auto max-w-3xl text-2xl leading-9 text-muted-foreground">
          Regisztrálj ingyenes céges fiókot, és kezdd el kialakítani
          ingatlanirodád online megjelenését.
        </p>

        <div className="mx-auto mt-12 max-w-xl">
          <CompanyRegistrationForm />
        </div>
      </div>
    </section>
  );
}