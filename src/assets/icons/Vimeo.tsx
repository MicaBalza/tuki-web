import * as React from "react";
import { SVGProps } from "react";

const VimeoIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={21}
    height={18}
    fill="none"
    {...props}
  >
    <path
      fill="#6A68D4"
      d="m.85 4.888.953 1.16S3.595 4.463 4.02 5.52c.424 1.056 3.273 10.037 3.273 10.037s.849 2.434 2.746 2.434c1.723 0 3.152-1.603 4.26-2.729 2.988-3.022 6.089-6.754 6.66-11.12.26-1.982-.719-4.07-2.927-4.13a5.482 5.482 0 0 0-3.23.952c-1.282.892-2.01 2.321-2.33 3.82 0 0 1.689-1.16 2.538.207.51.832.155 1.897-.243 2.702-.381.771-.814 1.525-1.282 2.252-.329.511-.84 1.386-1.541 1.386-.849 0-1.143-2.07-1.264-2.633-.45-1.983-.434-4.044-1.031-5.993C9.294 1.536 8.523-.274 6.982.125 3.708.972.85 4.887.85 4.887Z"
    />
  </svg>
);
export default VimeoIcon;
