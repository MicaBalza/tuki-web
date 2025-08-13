import Link from "next/link";
import styles from "./styles.module.css";

interface ServicesGridProps {
  lng: string;
}

export default function ServicesGrid({ lng }: ServicesGridProps) {
  const serviceImages = [
    { 
      src: "/static/images/pharmaceutical-services/institutional-corporate-videos.png",
      alt: "Institutional & Corporate Videos",
      url: "institutional-videos"
    },
    { 
      src: "/static/images/pharmaceutical-services/product-launch.png",
      alt: "Product Launch",
      url: "product-launch"
    },
    { 
      src: "/static/images/pharmaceutical-services/tutorial-training.png",
      alt: "Tutorials & Training",
      url: "tutorials-training"
    },
    { 
      src: "/static/images/pharmaceutical-services/promotional-videos.png",
      alt: "Promotional Videos",
      url: "promotional-videos"
    },
    { 
      src: "/static/images/pharmaceutical-services/events-conferences.png",
      alt: "Events & Congress",
      url: "events-congress"
    },
    { 
      src: "/static/images/pharmaceutical-services/podcast-videos.png",
      alt: "Video Podcast",
      url: "video-podcast"
    }
  ];

  return (
    <section className={styles.section}>
      <div className={styles.sectionContent}>
        <div className={styles.servicesGrid}>
          {/* Row 1: First image wider than second */}
          <div className={styles.gridRow}>
            <Link href={`/${lng}/pharmaceutical-services/${serviceImages[0].url}`} className={`${styles.gridItem} ${styles.wideFirst}`}>
              <img src={serviceImages[0].src} alt={serviceImages[0].alt} className={styles.gridImage} />
            </Link>
            <Link href={`/${lng}/pharmaceutical-services/${serviceImages[1].url}`} className={`${styles.gridItem} ${styles.narrowSecond}`}>
              <img src={serviceImages[1].src} alt={serviceImages[1].alt} className={styles.gridImage} />
            </Link>
          </div>
          
          {/* Row 2: First image smaller than second */}
          <div className={styles.gridRow}>
            <Link href={`/${lng}/pharmaceutical-services/${serviceImages[2].url}`} className={`${styles.gridItem} ${styles.narrowFirst}`}>
              <img src={serviceImages[2].src} alt={serviceImages[2].alt} className={styles.gridImage} />
            </Link>
            <Link href={`/${lng}/pharmaceutical-services/${serviceImages[3].url}`} className={`${styles.gridItem} ${styles.wideSecond}`}>
              <img src={serviceImages[3].src} alt={serviceImages[3].alt} className={styles.gridImage} />
            </Link>
          </div>
          
          {/* Row 3: First image wider than second */}
          <div className={styles.gridRow}>
            <Link href={`/${lng}/pharmaceutical-services/${serviceImages[4].url}`} className={`${styles.gridItem} ${styles.wideFirst}`}>
              <img src={serviceImages[4].src} alt={serviceImages[4].alt} className={styles.gridImage} />
            </Link>
            <Link href={`/${lng}/pharmaceutical-services/${serviceImages[5].url}`} className={`${styles.gridItem} ${styles.narrowSecond}`}>
              <img src={serviceImages[5].src} alt={serviceImages[5].alt} className={styles.gridImage} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}