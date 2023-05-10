import Hero from "../components/hero/hero";
import Portfolio from "../components/portfolio/portfolio";
import Team from "../components/team/team";
import Contact from "../components/contact/contact";

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