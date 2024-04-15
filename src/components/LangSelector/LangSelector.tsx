import { useParams, usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import Switch from "react-switch";
import styles from "./styles.module.css";

const BG_COLOR: Record<string, string> = {
  "/en": "#f8e1c1",
  "/en/projects": "#f8e1c1",
  "/en/us": "#b2aee9",
};

const LangSelector = () => {
  const router = useRouter();
  const { lng } = useParams();
  const path = usePathname();
  console.log("🌸 ~ LangSelector ~ path:", path);

  const [checked, setChecked] = useState(lng === "en");

  useEffect(() => {
    if (checked) {
      router.push(`/en${path.replace(lng as string, "")}`);
    } else {
      router.push(`/es${path.replace(lng as string, "")}`);
    }
  }, [checked, lng, path, router]);

  return (
    <Switch
      onChange={() => setChecked(!checked)}
      checked={checked}
      uncheckedIcon={<p className={`${styles.text} text-purple`}>ENG</p>}
      checkedIcon={<p className={`${styles.text} text-purple`}>ESP</p>}
      uncheckedHandleIcon={<p className={`${styles.text} text-white`}>ESP</p>}
      checkedHandleIcon={<p className={`${styles.text} text-white`}>ENG</p>}
      className={`${styles.switch} ${
        checked ? styles.checked : styles.unchecked
      }`}
      onHandleColor="#6a68d4"
      offHandleColor="#6a68d4"
      // onColor={BG_COLOR[path]}
      // offColor={BG_COLOR[path]}
      width={80}
    />
  );
};

export default LangSelector;
