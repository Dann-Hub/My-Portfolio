import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Footer } from "@/components/footer"
import About from "@/components/about";
import Skills from "@/components/skills";
import Experience from "@/components/experience";
import Contact from "@/components/contact";


export default function Page() {
    return (
        <main>
            <div className="bg-hero">
                <Header />
                <Hero />
            </div>
            <About />
            <Skills/>
            <Experience/>
            <Contact />
            <Footer />
        </main>
    )
}
