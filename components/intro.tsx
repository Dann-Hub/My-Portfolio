import Image from "next/image"

export function Intro() {
    return (
        <section id="about" className="relative z-20 -mt-5 bg-background ">
            <div>
                <div className="mx-auto grid max-w-7xl gap-10 px-6 py-5 lg:grid-cols-[7fr_3fr] lg:gap-16 lg:px-8 lg:py-15 lg:pt-20">
                    <div>
                        <h2 className="font-heading text-4xl font-bold leading-tight text-center lg:text-left text-foreground sm:text-5xl">
                            About Me
                        </h2>
                        <p className="mt-6 max-w-full text-base leading-relaxed text-justify text-muted-foreground text-pretty">
                            I am a results-oriented professional with a strong foundation in both Electrical/Electronic
                            Engineering and
                            Systems Management. Throughout my career, from serving as a District Manager for the Ghana
                            Statistical Service
                            to leading projects for the Ghana Institution of Engineering (Students’ Chapter), I have
                            balanced high-level
                            operational strategy with hands-on technical execution.<br/>
                            Now, as a Certified AWS Cloud Practitioner with a focus on Python-driven automation, I am
                            seeking to leverage my
                            leadership experience and technical versatility to contribute to forward-thinking
                            engineering projects.
                        </p>
                    </div>

                    <div className="relative flex justify-center items-start">
                        <Image
                            src="/images/aws-certified.png"
                            alt="Creative design work on a monitor"
                            width={150}
                            height={100}
                            className="h-auto w-[50%] object-cover"
                        />
                    </div>
                </div>
                <div className="mx-auto grid  max-w-7xl gap-12 px-6 py-5 lg:px-8 ">
                    <div>
                        <h2 className="font-bold text-3xl">
                            Skills
                        </h2>
                        {/* Skills Grid */}
                        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

                            <div className="rounded-2xl border border-slate-200 bg-[#e8ecf2] p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
                                <h3 className="mb-4 text-xl font-semibold text-foreground">
                                    Frontend Development
                                </h3>

                                <div className="flex flex-wrap gap-2">
                                    <span className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">React</span>
                                    <span className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">Next.js</span>
                                    <span className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">TypeScript</span>
                                    <span className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">Tailwind CSS</span>
                                </div>
                            </div>

                            <div className="rounded-2xl border border-slate-200 bg-[#e8ecf2] p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
                                <h3 className="mb-4 text-xl font-semibold text-foreground">
                                    Backend Development
                                </h3>

                                <div className="flex flex-wrap gap-2">
                                    <span className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">Node.js</span>
                                    <span className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">Python</span>
                                    <span className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">Django</span>
                                    <span className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">REST APIs</span>
                                </div>
                            </div>

                            <div className="rounded-2xl border border-slate-200 bg-[#e8ecf2] p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
                                <h3 className="mb-4 text-xl font-semibold text-foreground">
                                    Database Systems
                                </h3>

                                <div className="flex flex-wrap gap-2">
                                    <span className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">MySQL</span>
                                    <span className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">PostgreSQL</span>
                                    <span className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">SQLite</span>
                                    <span className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">Database Design</span>
                                </div>
                            </div>

                            <div className="rounded-2xl border border-slate-200 bg-[#e8ecf2] p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
                                <h3 className="mb-4 text-xl font-semibold text-foreground">
                                    Cloud & DevOps
                                </h3>

                                <div className="flex flex-wrap gap-2">
                                    <span className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">AWS</span>
                                    <span className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">Docker</span>
                                    <span className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">Git</span>
                                    <span className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">CI/CD</span>
                                </div>
                            </div>

                            <div className="rounded-2xl border border-slate-200 bg-[#e8ecf2] p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
                                <h3 className="mb-4 text-xl font-semibold text-foreground">
                                    Electrical Engineering
                                </h3>

                                <div className="flex flex-wrap gap-2">
                                    <span className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">Power Systems</span>
                                    <span className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">Circuit Design</span>
                                    <span className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">Automation</span>
                                    <span className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">PLC Systems</span>
                                </div>
                            </div>

                            <div className="rounded-2xl border border-slate-200 bg-[#e8ecf2] p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
                                <h3 className="mb-4 text-xl font-semibold text-foreground">
                                    Leadership & Management
                                </h3>

                                <div className="flex flex-wrap gap-2">
                                    <span className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">Project Management</span>
                                    <span className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">Team Leadership</span>
                                    <span className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">Communication</span>
                                    <span className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">Problem Solving</span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className=" mx-auto grid  max-w-7xl gap-12 px-6 py-5 lg:px-8 ">
                </div>
            </div>
        </section>
    )
}
