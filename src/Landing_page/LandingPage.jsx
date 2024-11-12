import About from "../Component/About/About";
import Banner from "../Component/Banner/Banner";
import Contact from "../Component/Contact/Contact";
import Industries from "../Component/Industries/Industries";
import Partners from "../Component/Partners/Partners";
import Proven from "../Component/Proven/Proven";
import Resources from "../Component/Resources/Resources";
import Services from "../Component/Services/Services";

const LandingPage = () => {
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <Partners></Partners>
      <Industries></Industries>
      <About></About>
      <Proven></Proven>
      <Contact></Contact>
      <Resources></Resources>
    </div>
  );
};

export default LandingPage;
