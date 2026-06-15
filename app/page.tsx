import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Intro } from "@/components/intro"
import { Footer } from "@/components/footer"
import About from "@/components/about";
import Skills from "@/components/skills";
import Stats from "@/components/stats";
import Experience from "@/components/experience";
import Reveal from "@/components/reveal";


export default function Page() {
    return (
        <main>
            <div className="bg-hero">
                <Header />
                <Hero />
            </div>
            {/*<Intro />*/}
            <About />

            {/*<Stats />*/}
            {/*<Skills />*/}
            {/*<Experience />*/}
            <Footer />
        </main>
    )
}
