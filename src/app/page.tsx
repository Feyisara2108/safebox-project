import Header from "./components/header";
import Hero from "./components/hero";
import Story from "./components/story";
import Survey from "./components/survey";
import Testimonials from "./components/testimonials";
import Introduction from "./components/introduction";
import Organize from "./components/organize";
import Trust from "./components/trust";
import FAQ from "./components/faq";
import Action from "./components/action";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div className="">
      <Header />
      <Hero />
      <Story />
      <Survey />
      <Testimonials />
      <Introduction />
      <Organize />
      <Trust />
      <FAQ />
      <Action />
      <Footer />
    </div>
  );
}

