import * as React from "react";
import { SVGProps } from "react";

const ContactPhoneIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M7 3V4.57541L2 7.80372V21.1818H22V7.80372L17 4.57541V3H7ZM8.66667 4.65289H15.3333V11.0062L12 13.1498L8.66667 11.0062V4.65289ZM9.5 6.30579V7.95868H14.5V6.30579H9.5ZM7 6.53822V9.92149L4.36979 8.24277L7 6.53822ZM17 6.53822L19.6302 8.24277L17 9.92149V6.53822ZM9.5 8.78512V10.438H14.5V8.78512H9.5ZM3.66667 9.76653L12 15.1126L20.3333 9.76653V19.5289H3.66667V9.76653Z"
      fill="#6A68D4"
    />
  </svg>
);
export default ContactPhoneIcon;
