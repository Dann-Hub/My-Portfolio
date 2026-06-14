import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Intro } from "@/components/intro"
import { Footer } from "@/components/footer"

export default function Page() {
    return (
        <main>
            <div className="bg-hero">
                <Header />
                <Hero />
            </div>
            <Intro />
            <Footer />
        </main>
    )
}
