import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

const PageContainer = ({ children, className }: Props) => {
  return (
    <div
      // initial={{ opacity: 0 }}
      // animate={{ opacity: 1 }}
      // exit={{ opacity: 0 }}
      className={`${className || ""} bg-nude`}
    >
      {children}
    </div>
  );
};

export default PageContainer;
