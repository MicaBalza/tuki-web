"use client";

import { useTranslation } from "@/i18n/client";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useRef } from "react";
import styles from "./styles.module.css";

type Review = {
  name: string;
  role: string;
  quote: string;
  image?: string;
};

const Reviews = () => {
  const { lng } = useParams();
  const { t } = useTranslation(lng as string, "reviews");
  const containerRef = useRef<HTMLDivElement>(null);
  // Static reviews data (includes image paths in public/static/images/reviews)
  const reviews = [
    {
      name: "Lucas Migueles",
      role: "Food Operations Director en Crep Nova",
      quote:
        "Trabajamos con Tuki Studio en un proyecto de diseño para reforzar la presencia visual de nuestra marca. Necesitábamos piezas que comunicaran de manera clara y atractiva.\n\nLo que más valoro de Tuki Studio es la organización y la comunicación durante todo el proceso, siempre atentos a entender lo que buscábamos y a proponernos mejoras.\n\nLinkedin Profile: https://www.linkedin.com/in/lucas-migueles/",
      image:
        "/static/images/reviews/" + encodeURIComponent("lucas- migueles.jpg"),
    },
    {
      name: "Matias Castarataro",
      role: "Profesor discente de Universidad Federal de Goiás",
      quote:
        "Trabajé con Tuki Studio en la edición de un manual de filosofía, enfocado en el combate a las “fake news”, pensado para adolescentes de 15 a 18 años. Lo que más valoré de trabajar con Tuki Studio fue la claridad y celeridad en la comunicación durante la ejecución del proyecto. Me sorprendió la creatividad con la que concretizaron conceptos vagos o ideas abstractas, lo que acostumbra ser un desafío recurrente en la confección de manuales de Filosofía. Recomiendo a Tuki Studio por la dedicación, celeridad, creatividad y compromiso con la calidad.",
      image: "/static/images/reviews/matias-castarataro.jpg",
    },
    {
      name: "Cristina Cozar",
      role: "CEO y Consultora de Marketing en el lado bueno de las marcas",
      quote:
        "Trabajé con Tuki Studio en la creación del brandbook de El lado bueno de las marcas. Tenía definidos los colores, el logo y el estilo de fotografía, pero todo estaba un poco mezclado y necesitaba orden y coherencia visual.\n\nLo que más valoro de Tuki Studio es la claridad en los procesos y la comunicación durante todo el proyecto. Escuchan, entienden rápido lo que necesitas y lo transforman en algo mejor de lo que imaginabas. Me encantó la forma creativa en la que consiguieron unir todas las piezas que tenía sueltas y darles una dirección clara. Aportaron ideas frescas y cuidaron cada detalle con mucho criterio y sensibilidad estética.\n\nDespués de trabajar con ellas, siento que mi marca tiene una identidad sólida. Recomendaría Tuki Studio a cualquier proyecto que busque construir una marca con coherencia y mucho gusto.",
      image: "/static/images/reviews/cristina-cozar.jpg",
    },
  ] as Review[] & { image: string }[];

  const scrollToReview = (index: number) => {
    const container = containerRef.current;
    if (!container) return;

    const target = container.children.item(index) as HTMLElement | null;
    if (!target) return;

    target.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  };

  return (
    <section className={styles.reviews}>
      <div className={styles.header}>
        <h3 className={`h2 text-purple`}>{t("title")}</h3>
      </div>
      <div className={styles.carousel} ref={containerRef}>
        {reviews.map((review, index) => (
          <article
            key={review.name}
            className={styles.card}
            onClick={() => scrollToReview(index)}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                scrollToReview(index);
              }
            }}
            tabIndex={0}
            role="button"
            aria-label={`${review.name} — ${review.role}`}
          >
            <div className={styles.cardInner}>
              <div className={styles.left}>
                <div className={styles.avatar} aria-hidden="true">
                  <Image
                    src={review.image as string}
                    alt={`${review.name} photo`}
                    width={84}
                    height={84}
                    className={styles.avatarImg}
                  />
                </div>
                <div className={styles.identityCentered}>
                  <p className={`h4 bold ${styles.name}`}>{review.name}</p>
                  <p className={styles.role}>{review.role}</p>
                </div>
              </div>

              <div className={styles.quoteWrap}>
                <div className={styles.quoteText}>
                  {review.quote
                    .split("\n\n")
                    .map((paragraph, paragraphIndex) => (
                      <p
                        key={`${review.name}-${paragraphIndex}`}
                        className={styles.quote}
                      >
                        {paragraph}
                      </p>
                    ))}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
