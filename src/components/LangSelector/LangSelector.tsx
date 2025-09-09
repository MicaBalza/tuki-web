import { useParams, usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { getCanonicalPath, getLocalizedPath } from "@/constants/localizedRoutes";
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
    const currentLang = lng as "en" | "es";
    const targetLang = checked ? "en" : "es";
    
    // Don't navigate if we're already on the target language
    if (currentLang === targetLang) return;
    
    // Extract the localized path (removing the language prefix)
    const pathWithoutLang = path.replace(`/${currentLang}`, "") || "/";
    
    // Convert the current localized path to canonical English path
    const canonicalPath = getCanonicalPath(pathWithoutLang, currentLang);
    
    // Convert canonical path to target language localized path
    const targetLocalizedPath = getLocalizedPath(canonicalPath, targetLang);
    
    // Navigate to the new localized URL
    router.push(`/${targetLang}${targetLocalizedPath}`);
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
