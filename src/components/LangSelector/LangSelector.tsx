import { useParams, usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import Switch from "react-switch";
import styles from "./styles.module.css";

const BG_COLOR: Record<string, string> = {
  "/en": "#f8e1c1",
  "/en/services": "#f8e1c1",
  "/en/us": "#b2aee9",
};

interface Props {
  invert?: boolean;
}

const LangSelector = ({ invert }: Props) => {
  const router = useRouter();
  const { lng } = useParams();
  const path = usePathname();

  const [checked, setChecked] = useState(lng === "en");

  useEffect(() => {
    if (checked) {
      router.push(`/en${path.replace(lng as string, "")}`);
    } else {
      router.push(`/es${path.replace(lng as string, "")}`);
    }
  }, [checked, lng, path, router]);

  const mainTextClass = invert ? "text-white" : "text-purple";
  const secondaryTextClass = invert ? "text-purple" : "text-white";
  const handleColor = invert ? "#fff" : "#6a68d4";

  return (
    <Switch
      onChange={() => setChecked(!checked)}
      checked={checked}
      uncheckedIcon={<p className={`${styles.text} ${mainTextClass}`}>ENG</p>}
      checkedIcon={<p className={`${styles.text} ${mainTextClass}`}>ESP</p>}
      uncheckedHandleIcon={
        <p className={`${styles.text} ${secondaryTextClass}`}>ESP</p>
      }
      checkedHandleIcon={
        <p className={`${styles.text} ${secondaryTextClass}`}>ENG</p>
      }
      className={`${styles.switch} ${
        checked ? styles.checked : styles.unchecked
      } ${invert ? styles.invert : ""}`}
      onHandleColor={handleColor}
      offHandleColor={handleColor}
      // onColor={BG_COLOR[path]}
      // offColor={BG_COLOR[path]}
      width={80}
    />
  );
};

export default LangSelector;
