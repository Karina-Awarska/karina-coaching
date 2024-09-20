import styles from "@/styles/icons.module.css";

export const FacebookIcon = ({ width, height }) => {
  return (
    <svg
      className={styles.svg}
      width={width}
      height={height}
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className={styles.path}
        d="M44,6.1V41.9a.3.3,0,0,1-.1.2,1.9,1.9,0,0,1-1.8,1.8H31.6V28.5h4.9c.3,0,.3,0,.4-.3l.3-2.5c.1-1,.2-2,.4-3s0-.3-.2-.3H31.6V18.5c0-.3.1-.7.1-1a1.8,1.8,0,0,1,1.6-1.6l1.3-.2h3c.2,0,.2,0,.2-.2V10.4c0-.1,0-.2-.2-.2H33a7.2,7.2,0,0,0-3.3.7A6,6,0,0,0,26.2,14a7.3,7.3,0,0,0-.8,3.6c-.1,1.5,0,3.1,0,4.7H20.3c-.2,0-.2.1-.2.2v5.7c0,.2,0,.2.2.2h5.1V43.8a.3.3,0,0,0-.1.2H5.9a1.9,1.9,0,0,1-1.8-1.8c-.1,0-.1-.1-.1-.2V6.1c0-.1,0-.2.1-.2A1.9,1.9,0,0,1,5.9,4.1H42.1a1.9,1.9,0,0,1,1.8,1.8Z"
      />
    </svg>
  );
};

export const LinkedInIcon = ({ width, height }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      className={styles.svg}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.5 8C7.32843 8 8 7.32843 8 6.5C8 5.67157 7.32843 5 6.5 5C5.67157 5 5 5.67157 5 6.5C5 7.32843 5.67157 8 6.5 8Z"
        className={styles.path}
      />
      <path
        d="M5 10C5 9.44772 5.44772 9 6 9H7C7.55228 9 8 9.44771 8 10V18C8 18.5523 7.55228 19 7 19H6C5.44772 19 5 18.5523 5 18V10Z"
        className={styles.path}
      />
      <path
        d="M11 19H12C12.5523 19 13 18.5523 13 18V13.5C13 12 16 11 16 13V18.0004C16 18.5527 16.4477 19 17 19H18C18.5523 19 19 18.5523 19 18V12C19 10 17.5 9 15.5 9C13.5 9 13 10.5 13 10.5V10C13 9.44771 12.5523 9 12 9H11C10.4477 9 10 9.44772 10 10V18C10 18.5523 10.4477 19 11 19Z"
        className={styles.path}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 1C21.6569 1 23 2.34315 23 4V20C23 21.6569 21.6569 23 20 23H4C2.34315 23 1 21.6569 1 20V4C1 2.34315 2.34315 1 4 1H20ZM20 3C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3H20Z"
        className={styles.path}
      />
    </svg>
  );
};

export const InstagramIcon = ({ width, height }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 169.063 169.063"
      xmlns="http://www.w3.org/2000/svg"
      className={styles.svg}
    >
      <g>
        <path
          className={styles.path}
          d="M122.406,0H46.654C20.929,0,0,20.93,0,46.655v75.752c0,25.726,20.929,46.655,46.654,46.655h75.752
		c25.727,0,46.656-20.93,46.656-46.655V46.655C169.063,20.93,148.133,0,122.406,0z M154.063,122.407
		c0,17.455-14.201,31.655-31.656,31.655H46.654C29.2,154.063,15,139.862,15,122.407V46.655C15,29.201,29.2,15,46.654,15h75.752
		c17.455,0,31.656,14.201,31.656,31.655V122.407z"
        />
        <path
          className={styles.path}
          d="M84.531,40.97c-24.021,0-43.563,19.542-43.563,43.563c0,24.02,19.542,43.561,43.563,43.561s43.563-19.541,43.563-43.561
		C128.094,60.512,108.552,40.97,84.531,40.97z M84.531,113.093c-15.749,0-28.563-12.812-28.563-28.561
		c0-15.75,12.813-28.563,28.563-28.563s28.563,12.813,28.563,28.563C113.094,100.281,100.28,113.093,84.531,113.093z"
        />
        <path
          className={styles.path}
          d="M129.921,28.251c-2.89,0-5.729,1.17-7.77,3.22c-2.051,2.04-3.23,4.88-3.23,7.78c0,2.891,1.18,5.73,3.23,7.78
		c2.04,2.04,4.88,3.22,7.77,3.22c2.9,0,5.73-1.18,7.78-3.22c2.05-2.05,3.22-4.89,3.22-7.78c0-2.9-1.17-5.74-3.22-7.78
		C135.661,29.421,132.821,28.251,129.921,28.251z"
        />
      </g>
    </svg>
  );
};

export const Mail = ({ width, height }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -960 960 960"
      width={width}
      height={height}
      className={styles.svg}
    >
      <path
        className={styles.path}
        d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z"
      />
    </svg>
  );
};
