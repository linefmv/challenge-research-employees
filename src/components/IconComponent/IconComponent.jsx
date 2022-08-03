import { Button, Image } from "./styles";

const IconComponent = ({width, height, className, style, onClick, src, alt, ariaLabel }) => {
  return (
    <Button onClick={onClick}>
      <Image
        className={className}
        style={style}
        width={width}
        height={height}
        src={src}
        alt={alt}
        ariaLabel={ariaLabel}
      />
    </Button>
  );
};

export default IconComponent;
