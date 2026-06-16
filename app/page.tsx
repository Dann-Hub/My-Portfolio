import {Header} from "@/components/header"
import {Hero} from "@/components/hero"
import {Footer} from "@/components/footer"
import About from "@/components/about";
import Skills from "@/components/skills";
import Experience from "@/components/experience";
import Contact from "@/components/contact";


export default function Page() {
    return (
        <main>

            <Header/>
            <Hero/>

            <About/>
            <Skills/>
            <Experience/>
            <Contact/>
            <Footer/>
        </main>
    )
}
