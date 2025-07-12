interface SearchIconProps {
  className?: string;
}

const SearchIcon = ({ className }: SearchIconProps) => {
  return (
    <div className={className}>
      <svg
        width="17"
        height="18"
        viewBox="0 0 17 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16 16.5L13.003 13.503M13.003 13.503C14.3216 12.1844 15.0624 10.396 15.0624 8.53119C15.0624 6.6664 14.3216 4.87799 13.003 3.55939C11.6844 2.24078 9.89598 1.5 8.03119 1.5C6.1664 1.5 4.37799 2.24078 3.05939 3.55939C1.74078 4.87799 1 6.6664 1 8.53119C1 10.396 1.74078 12.1844 3.05939 13.503C4.37799 14.8216 6.1664 15.5624 8.03119 15.5624C9.89598 15.5624 11.6844 14.8216 13.003 13.503Z"
          stroke="#828282"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default SearchIcon;
