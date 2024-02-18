import { useParams, usePathname } from "next/navigation";

import { languages } from "@/i18n/settings";
import Link from "next/link";
import styles from "./styles.module.css";

const LangSelector = () => {
  const { lng } = useParams();
  const path = usePathname();

  return (
    <>
      {languages
        .filter((l) => lng !== l)
        .map((l, index) => {
          return (
            <span key={l} className={`${styles.langLink} text-purple`}>
              {index > 0 && " or "}
              <Link href={`/${l}${path.replace(lng as string, "")}`}>{l}</Link>
            </span>
          );
        })}
    </>
  );
};

export default LangSelector;
