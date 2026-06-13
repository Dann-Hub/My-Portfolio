import Link from "next/link";
import BoidsEcosystem from "@/components/animata/background/boids-ecosystem";
import Header from "@/components/Header";


export default function Home() {
  return (
    <>
      <Header />
      <main className="relative min-h-screen overflow-hidden bg-black text-white">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <BoidsEcosystem />
        </div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Content */}
        <div className="relative z-10 flex min-h-screen flex-col justify-between">
          
          {/* Hero Section */}
          <section className="flex flex-1 items-center justify-center px-6">
            <div className="text-center">
              <h1 className="text-6xl font-black tracking-tight md:text-8xl lg:text-8xl">
                Daniel O. Boateng
              </h1>

              <p className="mt-5 text-lg uppercase tracking-[0.4em] text-slate-300 md:text-xl">
                Engineer • Developer • Entrepreneur
              </p>

              <Link
                href="/about"
                className="mt-12 inline-block rounded-full bg-blue-900 text-white hover:bg-gray-200 hover:text-black border border-white px-8 py-3 text-sm font-medium transition-all duration-300"
              >
                MORE ABOUT ME
              </Link>
            </div>
          </section>

          {/* Footer */}
          <footer className="border-t border-white/10 px-8 py-8 backdrop-blur-sm">
            <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
              {/* Left */}
              <div>
                <h3 className="text-xl font-semibold">
                  Let's work together
                </h3>

                <p className="mt-2 text-slate-300">
                  danieloseiboateng5@gmail.com
                </p>

                <p className="text-slate-300">
                  +233 55 354 6477
                </p>
              </div>

              {/* Right */}
              <div className="flex items-center gap-6 text-2xl">
                <a
                  href="https://github.com/Dann-Hub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:scale-110"
                >
                  <i className="fab fa-github" />
                </a>

                <a
                  href="https://www.linkedin.com/in/danieloseiboateng5/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:scale-110"
                >
                  <i className="fab fa-linkedin" />
                </a>

                <a
                  href="https://x.com/MrDanielBoateng"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:scale-110"
                >
                  <i className="fab fa-x-twitter" />
                </a>

                <a
                  href="https://www.instagram.com/danielboateng5/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:scale-110"
                >
                  <i className="fab fa-instagram" />
                </a>
              </div>
            </div>
          </footer>
        </div>
      </main>
    </>
  );
}