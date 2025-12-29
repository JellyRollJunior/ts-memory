type iconButtonProps = {
  className: string;
  src: string;
  onClick: () => void;
  alt: string;
};

const IconButton = ({ className, src, onClick, alt }: iconButtonProps) => {
  return (
    <button className={`${className}`} onClick={onClick}>
      <img src={src} alt={alt} />
    </button>
  );
};

export { IconButton };
