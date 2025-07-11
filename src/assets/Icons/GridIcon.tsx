interface GridIconProps {
  className?: string;
}

const GridIcon = ({ className }: GridIconProps) => {
  return (
    <svg
      width="18"
      height="17"
      viewBox="0 0 18 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M16.8223 9.5V16.5H10.8223V9.5H16.8223ZM8.82227 11.5V16.5H0.822266V11.5H8.82227ZM8.82227 0.5V9.5H0.822266V0.5H8.82227ZM16.8223 0.5V6.5H10.8223V0.5H16.8223Z"
        stroke="#828282"
        stroke-width="1.25"
      />
    </svg>
  );
};

export default GridIcon;
