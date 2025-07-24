interface ReusableHeadingProps {
  highlight: string;
  className?: string;
}

const ReusableHeading: React.FC<ReusableHeadingProps> = ({
  highlight,
  className,
}) => {
  return (
    <h2
      className={`text-xl md:text-[40px] text-center md:text-start font-bold text-white ${className}`}
    >
      <span
        className="text-transparent bg-clip-text gradient-text"
        style={{
          backgroundImage:
            "linear-gradient(90deg, #FF7800 51.71%, #FFE601 100%)",
        }}
      >
        {highlight}
      </span>{" "}
    </h2>
  );
};

export default ReusableHeading;
