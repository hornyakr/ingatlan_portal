import { Navbar } from "./components/Navbar";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <section className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 py-24 md:grid-cols-2">
        <div>
          <h1 className="max-w-xl text-5xl font-light leading-tight tracking-tight text-black">
            The largest community of photo enthusiasts
          </h1>
        </div>

        <div className="hidden min-h-96 rounded bg-slate-100 md:block" />
      </section>
    </main>
  );
}