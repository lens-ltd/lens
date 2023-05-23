import Hero from "../components/hero/Hero";
import Portfolio from "../components/portfolio/Portfolio";
import Team from "../components/team/Team";
import Contact from "../components/contact/Contact";

const Home = () => {
    return (
        <>
        {/* HERO */}
        <Hero />
        {/* PORTFOLIO */}
        <Portfolio />
        {/* TEAM */}
        <Team />
        {/* CONTACT */}
        <Contact />
        </>
    );
};

export default Home;