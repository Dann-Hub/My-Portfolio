import Image from "next/image";
import BoidsEcosystem from "@/components/boids-ecosystem";

export function Hero() {
    return (
        <section
            id="home"
            className="relative min-h-screen overflow-hidden"
        >
            {/* Animated Background */}
            <BoidsEcosystem
                className="absolute inset-0 h-full w-full rounded-none"
                background="#e8ecf2"
                palette={["#dbe2ec", "#38bdf8", "#1e3a5f", "#f6a623"]}
                count={420}
                cursorRadius={110}
            />

            {/* Overlay */}
            <div className="pointer-events-none absolute inset-0 bg-hero/40" />

            {/* Content */}
            <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-start pt-35 px-6 lg:items-center lg:pt-0 lg:px-8">
                <div className="grid w-full items-center gap-2 lg:grid-cols-2 lg:gap-8">

                    {/* Text Column */}
                    <div className="order-2 text-center lg:order-1 lg:text-left">
                        <h1 className="font-heading text-5xl font-black leading-[1.05] tracking-wide text-foreground sm:text-6xl lg:text-7xl">
                            Daniel Osei
                            <br />
                            Boateng
                        </h1>

                        <p className="mx-auto mt-6  text-lg leading-relaxed tracking-widest text-muted-foreground lg:mx-0">
                            ELECTRICAL ENGINEER ● SOFTWARE DEVELOPER
                        </p>

                        <div className="mx-auto mt-8 h-1 w-16 rounded-full bg-accent-yellow lg:mx-0" />

                        <div className="mt-8 flex justify-center lg:justify-start">
                            <a
                                href="#hire-me"
                                className="inline-flex items-center justify-center rounded-full bg-primary px-10 py-4 text-sm font-semibold uppercase tracking-widest text-primary-foreground shadow-lg shadow-primary/30 transition-transform hover:scale-105"
                            >
                                Hire Me
                            </a>
                        </div>
                    </div>

                    {/* Image Column */}
                    <div className="order-1 flex justify-center lg:order-2 lg:justify-end lg:pt-20">
                        <div className="relative -mt-8 flex aspect-square w-[55%] max-w-md items-end justify-center sm:w-[65%] lg:mt-0 lg:w-[80%]">

                            {/* Desktop Circle */}
                            <div className="absolute left-[55%] top-[30%] hidden w-[80%] aspect-square -translate-x-1/2 -translate-y-1/2 rounded-full bg-card shadow-inner lg:block" />

                            {/* Mobile White Frame */}
                            <div className="relative rounded-xl border-2 border-slate-200 bg-white p-2 shadow-lg lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none">
                                <Image
                                    src="/images/daniel.png"
                                    alt="Photo of Daniel Osei Boateng"
                                    width={520}
                                    height={620}
                                    priority
                                    className="relative z-10 h-[85%] w-auto object-contain object-bottom lg:h-[135%]"
                                />
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}