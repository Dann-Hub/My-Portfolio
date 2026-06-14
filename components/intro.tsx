import Image from "next/image"

export function Intro() {
    return (
        <section id="about"  className="relative z-20 -mt-5 bg-background ">
            <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-28">
                <div>
                    <h2 className="font-heading text-4xl font-medium leading-tight text-foreground sm:text-5xl text-balance">
                        Hello, I&apos;m Freelancer Web Designer &amp; Developer
                    </h2>
                    <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground text-pretty">
                        I help startups and established brands craft thoughtful digital
                        experiences. From the first sketch to the final line of code, I focus
                        on insight, vision and flawless execution that moves your business
                        forward.
                    </p>

                    <div className="mt-10 grid grid-cols-3 gap-6">
                        {[
                            { value: "12+", label: "Years Experience" },
                            { value: "240", label: "Projects Done" },
                            { value: "180", label: "Happy Clients" },
                        ].map((stat) => (
                            <div key={stat.label}>
                                <div className="font-heading text-3xl font-bold text-foreground">
                                    {stat.value}
                                </div>
                                <div className="mt-1 text-sm text-muted-foreground">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="relative h-[420px]">
                    <div className="absolute left-0 top-8 w-3/5 overflow-hidden rounded-lg shadow-xl">
                        <Image
                            src="/images/work-1.png"
                            alt="Lucie working at her desk"
                            width={500}
                            height={360}
                            className="h-auto w-full object-cover"
                        />
                    </div>
                    <div className="absolute right-0 top-0 w-2/5 overflow-hidden rounded-lg border-4 border-background shadow-xl">
                        <Image
                            src="/images/work-2.png"
                            alt="Creative design work on a monitor"
                            width={360}
                            height={300}
                            className="h-auto w-full object-cover"
                        />
                    </div>
                    <div className="absolute bottom-0 right-8 h-24 w-24 rounded-full bg-accent-yellow/20" />
                </div>
            </div>
        </section>
    )
}
