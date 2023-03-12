import Image from "./Image";

function DashboardSection() {
  return (
    <div className={"dashboardSection col-lg-6"}>
      <div className="dashboardContent">
        <h4>Step one to building generational wealth</h4>
        <p>Plan and invest for your goals with Africa's Pocket</p>
      </div>
      <Image
        imageLink={
          "https://res.cloudinary.com/dogmqg8to/image/upload/v1678400889/AP%20Registration/Dashboard_image_uc8ui8.png"
        }
        alternative={"dashboard image"}
        className={"img-fluid dashboardImage"}
      />
    </div>
  );
}

export default DashboardSection;
