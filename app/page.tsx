import Link from "next/link";
import BoidsEcosystem from "@/components/animata/background/boids-ecosystem";
import Header from "@/components/Header";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="relative min-h-screen overflow-hidden bg-black text-white">
        {/* Animated Background */}
        <div className="absolute inset-0 pointer-events-none">
          <BoidsEcosystem />
        </div>

        <div className="absolute inset-0 pointer-events-none bg-black/40" />

        {/* Content */}
        <div className="relative z-10 flex min-h-screen  flex-col justify-between">
          
          {/* Hero Section */}
          <section className="flex flex-1 items-center justify-center px-6">
            <div className="text-center">
              <h1 className="text-[2.5rem] font-black tracking-tight md:text-8xl lg:text-8xl">
                Daniel O. Boateng
              </h1>

              <p className="mt-5 text-lg uppercase tracking-[0.4em] text-yellow-100 md:text-xl">
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
        <Footer/>
        </div>
      </main>
    </>
  );
}