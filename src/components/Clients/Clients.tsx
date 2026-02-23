import LogoLoop from "@/components/LogoLoop";
import { useTranslation } from "@/i18n/client";
import Image from "next/image";
import { useParams } from "next/navigation";
import styles from "./styles.module.css";
// LogoLoop is a JS component without TypeScript types — cast to any for JSX props
const LogoLoopAny: any = LogoLoop;

const LOGOS = [
  "levis",
  "cabify",
  "pernod-ricard",
  "western-union",
  "nestle",
  "caixa-bank",
  "pfizer",
  "schneider-electric",
];

const Footer = () => {
  const { lng } = useParams();
  const { t } = useTranslation(lng as string, "clients");

  return (
    <section className={styles.clients}>
      <div className={styles.titleContainer}>
        <div className={styles.shapeContainer}>
          <Image
            src={`/static/images/shape3.svg`}
            alt=""
            fill
            className={styles.shape}
          />
        </div>
        <h3 className={`${styles.title} h2`}>{t("title")}</h3>
      </div>
      <div className={styles.marqueeContainer}>
        <LogoLoopAny
          logos={LOGOS.map((logo) => ({
            src: `/static/images/logos/${logo}.png`,
            alt: logo,
            title: logo,
            width: 252,
            height: 168,
          }))}
          speed={120}
          direction="left"
          gap={32}
          logoHeight={168}
          pauseOnHover={true}
          ariaLabel={t("title")}
          scaleOnHover
        />
      </div>
    </section>
  );
};

export default Footer;
