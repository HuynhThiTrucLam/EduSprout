interface BackProps {
  className?: string;
}

const Back = ({ className }: BackProps) => {
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
        d="M2.23077 1V10.375C2.23077 10.8723 2.42527 11.3492 2.7715 11.7008C3.11772 12.0525 3.58729 12.25 4.07692 12.25H5.92308M2.23077 1H1M2.23077 1H15.7692M5.92308 12.25H12.0769M5.92308 12.25L5.10256 14.75M15.7692 1H17M15.7692 1V10.375C15.7692 10.8723 15.5747 11.3492 15.2285 11.7008C14.8823 12.0525 14.4127 12.25 13.9231 12.25H12.0769M12.0769 12.25L12.8974 14.75M5.10256 14.75H12.8974M5.10256 14.75L4.69231 16M12.8974 14.75L13.3077 16M5.30769 8.5L7.76923 6L9.53169 7.79C10.3598 6.58275 11.4387 5.57485 12.6923 4.8375"
        stroke="#828282"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Back;
