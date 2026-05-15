export function Footer() {
  return (
    <footer className="bg-muted text-muted-foreground">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center gap-6">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="relative h-10 w-10 rounded-full border border-border bg-background"
              >
                <span className="absolute left-1/2 top-0 h-full -translate-x-1/2 rotate-45 border-l border-border" />
                <span className="absolute left-1/2 top-0 h-full -translate-x-1/2 -rotate-45 border-l border-border" />
              </div>
            ))}
          </div>

          <div className="mt-10 h-px w-full max-w-2xl bg-border" />

          <p className="mt-6 text-center text-sm tracking-wide">
            Echobase KFT © 2022 - 2022. MINDEN JOG FENNTARTVA - ECHOBASE@ECHOBASE.HU
          </p>
        </div>
      </div>
    </footer>
  );
}