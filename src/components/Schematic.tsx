import React from "react";
import styles from "./Schematic.module.css";

type SchematicProps = {
  nodes: readonly string[];
  /** Index of the node drawn as a gate (brass fill). */
  gate?: number;
  tone?: "dark" | "light";
  title: string;
};

const W = 150;
const GAP = 34;
const H = 52;
const C = 8; // chamfer

// Blueprint-style flow drawn in brass hairline with chamfered (stepped) node plates.
export const Schematic: React.FC<SchematicProps> = ({ nodes, gate, tone = "dark", title }) => {
  const width = nodes.length * W + (nodes.length - 1) * GAP + 2;
  return (
    <svg
      viewBox={`-1 -14 ${width} ${H + 30}`}
      className={`${styles.schematic} ${styles[tone]}`}
      role="img"
      aria-label={`${title}: ${nodes.join(" → ")}`}
    >
      {nodes.map((label, i) => {
        const x = i * (W + GAP);
        const plate = `M${x + C} 0H${x + W - C}L${x + W} ${C}V${H - C}L${x + W - C} ${H}H${x + C}L${x} ${H - C}V${C}Z`;
        return (
          <g key={label}>
            <path d={plate} className={i === gate ? styles.gate : styles.node} />
            <path d={`M${x + 4} -6V-2M${x + W - 4} -6V-2M${x + 4} -4H${x + W - 4}`} className={styles.dim} />
            <text x={x + W / 2} y={H / 2 + 4} textAnchor="middle" className={i === gate ? styles.gateText : styles.text}>
              {label}
            </text>
            {i < nodes.length - 1 && (
              <g className={styles.wire}>
                <path d={`M${x + W} ${H / 2}H${x + W + GAP - 6}`} />
                <path d={`M${x + W + GAP - 6} ${H / 2 - 4}L${x + W + GAP} ${H / 2}L${x + W + GAP - 6} ${H / 2 + 4}Z`} className={styles.arrow} />
              </g>
            )}
          </g>
        );
      })}
    </svg>
  );
};
