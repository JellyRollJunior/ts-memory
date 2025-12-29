type iconButtonProps = {
  className: string;
  src: string;
  onClick: () => void;
};

const IconButton = ({ className, src, onClick }: iconButtonProps) => {
  return (
    <button className={`${className}`} onClick={onClick}>
      <img src={src} />
    </button>
  );
};

export { IconButton };
