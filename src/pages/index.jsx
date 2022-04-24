import Navbar from "../components/Navbar";

import CoverSection from "../components/CoverSection";

import AboutSection from "../components/About";

import BestWay from "../components/About/BestWay";

import DealWeekSection from "../components/DealWeek";
import Products from "../components/Products";
import Clients from "../components/Client";
import Subscriber from "../components/Subscribe";
import Footer from "../components/Footer";
const Home = () => {
    return (
        <>
         <Navbar />
         <CoverSection />
         {/* <!-- About Area Start --> */}
         <AboutSection />
         <BestWay />
        {/*<====== DealWeekSection Area Start ======>*/}
        <DealWeekSection />
        <Products />
        <Clients />
        <Subscriber />
        <Footer />
        </>
    );
}


export default Home;