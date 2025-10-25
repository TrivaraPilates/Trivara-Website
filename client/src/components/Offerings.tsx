import React, { useState, useMemo } from "react";
import styles from "./Offerings.module.css";

/** Cards data for the Offerings panel */
const OFFERINGS = [
  { title: "Single Session", blurb: "Come for an individual session", qty: "1 class", price: "$40" },
  { title: "Intro Offer", blurb: "For first time joiners only, enjoy this exclusive Intro Offer!", qty: "3 classes", price: "$60", sub: "$20/class" },
  { title: "Class Pack", blurb: "We love flexibility! 10 classes, 6 months, no strings attached.", qty: "10 classes", price: "$240", sub: "$24/class" },
  { title: "Routine", blurb: "Let's build a routine! Great for just getting started!", qty: "4 classes", price: "$140", sub: "$35/class" },
  { title: "Committed", blurb: "You are committed to growing your journey!", qty: "8 classes", price: "$230", sub: "$28.75/class" },
  { title: "Lifestyle", blurb: "Eat, sleep and breathe Pilates! We are in this together!", qty: "30 classes", price: "$350", sub: "$11.67/class" },
];

const BOXES = [
  { key: "panel-offerings", label: "Offerings" },
  { key: "panel-events", label: "Special Events" },
  { key: "panel-promos", label: "Promotions" },
  { key: "panel-private", label: "Private Bookings" },
];

export default function Offerings() {
  const [active, setActive] = useState<string | null>(null);

  // Close when clicking outside (optional)
  const onBackdrop = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    if (!target.closest(`.${styles.panelInner}`) && !target.closest(`.${styles.box}`)) {
      setActive(null);
    }
  };

  const isDim = useMemo(() => active !== null, [active]);

  return (
    <section className={styles.wrapper} onClick={onBackdrop}>
      {/* Content Panels */}
      <div className={`${styles.panel} ${styles.panelOfferings} ${active === "panel-offerings" ? styles.visible : ""}`} role="region" aria-live="polite">
        <div className={styles.panelInner}>
          <div className={styles.cards}>
            {OFFERINGS.map((c, i) => (
              <article className={styles.card} key={c.title} style={{ transitionDelay: `${i * 30}ms` }}>
                <div className={styles.cardContent}>
                  <div className={styles.cardText}>
                    <h4>{c.title}</h4>
                    <p>{c.blurb}</p>
                    <p>{c.qty}</p>
                    <p>
                      <strong>{c.price}</strong> {c.sub && <span className={styles.muted}>{c.sub}</span>}
                    </p>
                  </div>
                  <button className={styles.bookBtn}>BOOK NOW</button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      <div className={`${styles.panel} ${active === "panel-events" ? styles.visible : ""}`} role="region" aria-live="polite">
        <div className={styles.panelInner}>
          <p className={styles.centerBig}>Stay tuned for upcoming special events at our studio!</p>
        </div>
      </div>

      <div className={`${styles.panel} ${active === "panel-promos" ? styles.visible : ""}`} role="region" aria-live="polite">
        <div className={styles.panelInner}>
          <p className={styles.centerBig}>Keep an eye out for promotional events!</p>
        </div>
      </div>

      <div className={`${styles.panel} ${active === "panel-private" ? styles.visible : ""}`} role="region" aria-live="polite">
        <div className={styles.panelInner}>
          <p className={styles.centerBig}>Private bookings available upon request.</p>
        </div>
      </div>

      {/* Bottom Boxes */}
      <nav className={`${styles.boxRow} ${isDim ? styles.dim : ""}`} aria-label="Sections">
        {BOXES.map((b) => (
          <button
            key={b.key}
            className={`${styles.box} ${active === b.key ? styles.active : ""}`}
            onClick={() => setActive(b.key)}
            aria-expanded={active === b.key ? "true" : "false"}
          >
            <span>{b.label}</span>
          </button>
        ))}
      </nav>
    </section>
  );
}
