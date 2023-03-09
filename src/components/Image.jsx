const Image = ({ imageLink, alternative, className }) => {
  return <img src={imageLink} alt={alternative} className={className} />;
};

export default Image;
