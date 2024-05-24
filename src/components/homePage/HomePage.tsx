import HeroBanner from "./HeroBanner/HeroBanner";
import StepsOfSolution from "./StepsOfSolution/StepsOfSolution";
import ChooseUs from "./chooseUs/ChooseUs";
import CoustomerReview from "./customerReview/CoustomerReview";
import ServicesCounter from "./servicesCounter/ServicesCounter";
import Specialties from "./specialties/Specialties";
import OurTopRatedDoctor from "./topRatedDoctor/OurTopRatedDoctor";

const HomePage = () => {
  return (
    <div>
      <HeroBanner />
      <Specialties />
      <StepsOfSolution />
      <OurTopRatedDoctor />
      <ChooseUs />
      <ServicesCounter />
      <CoustomerReview />
    </div>
  );
};

export default HomePage;
