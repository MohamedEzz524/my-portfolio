import React from "react";
import { AnimatedSection } from "./Components/AnimatedSection/AnimatedSection";

export default function TextAnimation({ text, type = " ", animation, delay }) {
  return (
    <>
      {text.split(type).map((e, i) => (
        <AnimatedSection key={i} delay={i * 0.2}>
          <span
            style={{ animationDelay: `${i * delay}s` }}
            className={`inline-block animate-${animation}`}
          >
            {type === " " ? e + "\u00A0 " : e === " " ? "\u00A0" : e}
          </span>
        </AnimatedSection>
      ))}
    </>
  );
}
