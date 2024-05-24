import HeroBanner from "./HeroBanner/HeroBanner";
import ChooseUs from "./chooseUs/ChooseUs";
import Specialties from "./specialties/Specialties";
import OurTopRatedDoctor from "./topRatedDoctor/OurTopRatedDoctor";

const HomePage = () => {
  return (
    <div>
      <HeroBanner />
      <Specialties />
      <OurTopRatedDoctor />
      <ChooseUs />
    </div>
  );
};

export default HomePage;
