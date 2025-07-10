import React from "react";
interface NotificationProps {
  className?: string;
}

const Notification = ({ className }: NotificationProps) => {
  return (
    <div className={className}>
      <svg
        width="15"
        height="21"
        viewBox="0 0 15 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 16.5H2.92593M14 16.5H12.5556M12.5556 16.5V10.1003C12.5556 8.71066 12.3782 7.27922 11.5453 6.16688C10.7114 5.05327 9.43528 4 7.74074 4M12.5556 16.5H2.92593M7.74074 4C6.0462 4 4.77004 5.05327 3.93616 6.16688C3.10323 7.27922 2.92593 8.71066 2.92593 10.1003V16.5M7.74074 4V1.5"
          stroke="#828282"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <mask id="path-2-inside-1_6_439" fill="white">
          <path d="M9 19C9.55228 19 9.99565 19.499 9.60778 19.8922C9.54926 19.9515 9.48463 20.0078 9.41421 20.0607C9.03914 20.342 8.53043 20.5 8 20.5C7.46957 20.5 6.96086 20.342 6.58579 20.0607C6.51537 20.0078 6.45074 19.9515 6.39222 19.8922C6.00435 19.499 6.44772 19 7 19L8 19H9Z" />
        </mask>
        <path
          d="M9 19C9.55228 19 9.99565 19.499 9.60778 19.8922C9.54926 19.9515 9.48463 20.0078 9.41421 20.0607C9.03914 20.342 8.53043 20.5 8 20.5C7.46957 20.5 6.96086 20.342 6.58579 20.0607C6.51537 20.0078 6.45074 19.9515 6.39222 19.8922C6.00435 19.499 6.44772 19 7 19L8 19H9Z"
          fill="black"
          stroke="#828282"
          stroke-width="2"
          mask="url(#path-2-inside-1_6_439)"
        />
      </svg>
    </div>
  );
};

export default Notification;
