import HeroBanner from "./HeroBanner/HeroBanner";
import Specialties from "./specialties/Specialties";
import OurTopRatedDoctor from "./topRatedDoctor/OurTopRatedDoctor";

const HomePage = () => {
  return (
    <div>
      <HeroBanner />
      <Specialties />
      <OurTopRatedDoctor />
    </div>
  );
};

export default HomePage;
