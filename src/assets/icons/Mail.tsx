import * as React from "react";
import { SVGProps } from "react";

const MailIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={26}
    height={20}
    fill="none"
    {...props}
  >
    <path
      fill="#6A68D4"
      fillRule="evenodd"
      d="M.162 3.656A2.813 2.813 0 0 1 2.975.844h19.937a2.813 2.813 0 0 1 2.813 2.812v12.688a2.812 2.812 0 0 1-2.813 2.812H2.975a2.812 2.812 0 0 1-2.813-2.812V3.656ZM2.29 3.22l10.192 7.056a.812.812 0 0 0 .925 0L23.598 3.22a.812.812 0 0 0-.686-.376H2.975a.812.812 0 0 0-.686.376Zm21.436 2.345-9.18 6.355a2.812 2.812 0 0 1-3.203 0l-9.18-6.355v10.779c0 .448.364.812.813.812h19.937a.812.812 0 0 0 .813-.812V5.564Z"
      clipRule="evenodd"
    />
  </svg>
);
export default MailIcon;
