import Button from "../components/Button";
import Image from "../components/Image";

const Verified = () => {
  return (
    <div className="verifiedContainer d-flex flex-column align-items-center
    ">
      <Image
        imageLink={
          "https://res.cloudinary.com/dogmqg8to/image/upload/v1678606109/AP%20Registration/tick_icon_bwppcs.png"
        }
        className={"img-fluid"}
      />
      <h3 className="fontColor mb-5">Your account is verified!</h3>
      <p className="text-center">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
        dis parturient montes, nascetur ridiculus mus.
      </p>
      <Button text={'Login'} className={'btn signUpBtn fontColor'} />
    </div>
  );
};

export default Verified;
