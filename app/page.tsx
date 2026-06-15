import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Footer } from "@/components/footer"
import About from "@/components/about";



export default function Page() {
    return (
        <main>
            <div className="bg-hero">
                <Header />
                <Hero />
            </div>
            <About />
            <Footer />
        </main>
    )
}
