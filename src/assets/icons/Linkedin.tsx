import * as React from "react";
import { SVGProps } from "react";

const LinkedinIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={21}
    height={22}
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fill="#6A68D4"
        d="M19.328.716H1.8C.96.716.28 1.378.28 2.198v17.6c0 .82.68 1.486 1.519 1.486h17.528c.84 0 1.522-.666 1.522-1.482V2.198c0-.82-.683-1.482-1.522-1.482ZM6.384 18.243H3.33V8.425h3.053v9.818ZM4.857 7.087a1.769 1.769 0 1 1-.006-3.537 1.769 1.769 0 0 1 .006 3.537ZM17.81 18.243h-3.05v-4.772c0-1.137-.02-2.604-1.586-2.604-1.587 0-1.828 1.242-1.828 2.523v4.853H8.3V8.425h2.925v1.342h.04c.405-.772 1.402-1.587 2.884-1.587 3.09 0 3.66 2.033 3.66 4.676v5.387Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M.281.716h20.57v20.569H.28z" />
      </clipPath>
    </defs>
  </svg>
);
export default LinkedinIcon;
