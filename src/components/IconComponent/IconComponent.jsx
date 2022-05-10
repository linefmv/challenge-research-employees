import { Button, Image } from "./styles";

 const IconComponent = ({ size, className, style, onClick, src }) => {
  return (
    <Button onClick={onClick}>
      <Image
        className={className}
        style={style}
        width={`${size}px`}
        height={`${size}px`}
        src={src}
      />
    </Button>
  );
};

export default IconComponent;