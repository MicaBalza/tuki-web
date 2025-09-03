import { PharmaceuticalService } from "@/constants/pharmaceuticalServices";
import styles from "./styles.module.css";

interface PharmaceuticalServiceProcessProps {
  service: PharmaceuticalService;
}

const PROCESS_STEP_TITLES = [
  "Briefing Inicial",
  "Guión y Storyboard",
  "Diseño Visual",
  "Producción de animación",
  "Sonido y Postproducción",
  "Entrega final y Soporte",
];

export default function PharmaceuticalServiceProcess({
  service,
}: PharmaceuticalServiceProcessProps) {
  return (
    <div className={styles.processSection}>
      <div className={styles.processHeader}>
        <h3 className="text-light-green h1 bold">Etapas del Proceso</h3>
        <p className="text-white h4">Este es nuestro proceso de producción.</p>
      </div>

      <div className={styles.processSteps}>
        {PROCESS_STEP_TITLES.map((title, index) => {
          const stepKey = `step${
            index + 1
          }` as keyof typeof service.processSteps;
          return (
            <div key={index} className={styles.processStep}>
              <div className={`${styles.stepNumber} h1 text-light-green`}>
                {index + 1}
              </div>
              <h4 className={`${styles.stepTitle} bold text-light-green`}>
                {title}
              </h4>
              <p className={`${styles.stepDescription} text-white`}>
                {service.processSteps[stepKey]}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
