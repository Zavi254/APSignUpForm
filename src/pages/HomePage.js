import SignUp from "./SignUp";
import DashboardSection from "../components/DashboardSection";

function HomePage() {
  return (
    <div className={"d-flex homepage"}>
      <SignUp />
      <DashboardSection />
    </div>
  );
}

export default HomePage;
