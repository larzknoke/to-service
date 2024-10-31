import { useState, useRef, useEffect } from "react";
import { motion, useSpring, useTransform } from "framer-motion";
import normalizeWheel from "normalize-wheel";
import { useRafLoop } from "react-use";
import { useWindowSize } from "@react-hook/window-size";

const row1 = {
  content: "Minibaggerbetrieb Kran- u. Hubsteigerarbeiten Abbrucharbeiten ",
  speed: 1.5,
  threshold: 0.014,
  wheelFactor: 1.5,
  dragFactor: 1.1,
  color: "text-neutral-700",
};
const row2 = {
  content: "Pflasterarbeiten Grünanlagen Reinigungsarbeiten",
  speed: 1.8,
  threshold: 0.014,
  wheelFactor: 1.5,
  dragFactor: 1.1,
  color: "text-neutral-600",
  rocken: true,
};
const row3 = {
  content: "Auflösungen Estrich Altmetallhandel",
  speed: 1.4,
  threshold: 0.014,
  wheelFactor: 1.5,
  dragFactor: 1.1,
  color: "text-neutral-700",
};
const row4 = {
  content: "Fliesenverlegung Trockenausbau Bodenbelagsarbeiten",
  speed: 2,
  threshold: 0.014,
  wheelFactor: 1.5,
  dragFactor: 1.1,
  color: "text-neutral-600",
};

const MarqueeItem = ({ content, speed, color, rocken = false }) => {
  const item = useRef(null);
  const rect = useRef({});
  const x = useRef(0);

  const [width, height] = useWindowSize();

  const setX = () => {
    if (!item.current || !rect.current) return;
    const xPercentage = (x.current / rect.current.width) * 100;
    if (xPercentage < -100) x.current = 0;
    if (xPercentage > 0) x.current = -rect.current.width;
    item.current.style.transform = `translate3d(${xPercentage}%, 0, 0)`;
  };

  useEffect(() => {
    rect.current = item.current.getBoundingClientRect();
  }, [width, height]);

  const loop = () => {
    x.current -= speed.get();
    setX();
  };

  useRafLoop(loop, true);

  return (
    <div className={`marquee-item ${color}`} ref={item}>
      {content}{" "}
      {rocken ? (
        <span className={"text-red-500 opacity-[0.7]"}>
          DIE ROCKEN DAS DING
        </span>
      ) : (
        ""
      )}
    </div>
  );
};

export const InteractiveMarquee = () => {
  const marquee = useRef(null);
  const slowDown = useRef(false);
  const isScrolling = useRef(false);
  const constraintsRef = useRef(null);

  const x = useRef(0);
  const w =
    typeof window !== "undefined" ? useRef(window.innerWidth).current : 0;
  const speed = useSpring(row1.speed, {
    damping: 40,
    stiffness: 90,
    mass: 5,
  });
  const speed2 = useSpring(row2.speed, {
    damping: 40,
    stiffness: 90,
    mass: 5,
  });
  const speed3 = useSpring(row3.speed, {
    damping: 40,
    stiffness: 90,
    mass: 5,
  });
  const speed4 = useSpring(row4.speed, {
    damping: 40,
    stiffness: 90,
    mass: 5,
  });
  const opacity = useTransform(speed, [-w * 0.2, 0, w * 0.2], [1, 0, 1]);
  const skewX = useTransform(speed, [-w * 0.25, 0, w * 0.25], [-25, 0, 25]);

  const onWheel = (e) => {
    const normalized = normalizeWheel(e);
    x.current = normalized.pixelY * row1.wheelFactor;

    // Reset speed on scroll end
    window.clearTimeout(isScrolling.current);
    isScrolling.current = setTimeout(function () {
      speed.set(row1.speed);
      speed2.set(row2.speed);
    }, 30);
  };

  const onPointerDown = () => {
    slowDown.current = true;
    marquee.current.classList.add("drag");
    speed.set(0);
    speed2.set(0);
  };

  const onDrag = (e, info) => {
    speed.set(row1.dragFactor * -info.delta.x);
    speed2.set(row1.dragFactor * -info.delta.x * 0.9);
  };

  const onPointerUp = (e) => {
    slowDown.current = false;
    marquee.current.classList.remove("drag");
    x.current = row1.speed;
  };

  const loop = () => {
    if (slowDown.current || Math.abs(x.current) < row1.threshold) return;
    x.current *= 0.7;
    if (x.current < 0) {
      x.current = Math.min(x.current, 0);
    } else {
      x.current = Math.max(x.current, 0);
    }
    speed.set(row1.speed + x.current);
    speed2.set(row2.speed + x.current * 0.9);
  };

  useRafLoop(loop, true);

  return (
    <>
      {/* <motion.div className="bg" style={{ opacity }} /> */}
      <motion.div
        className="marquee"
        // style={{ skewX }}
        ref={marquee}
        // onWheel={onWheel}
        // drag="x"
        // dragConstraints={{ left: 0, right: 0 }}
        // onPointerDown={onPointerDown}
        // onDrag={onDrag}
        // onPointerUp={onPointerUp}
        // dragElastic={0.0001}
      >
        <div className="marquee-item-wrapper ">
          <MarqueeItem
            content={row1.content}
            speed={speed}
            color={row1.color}
          />
          <MarqueeItem
            content={row1.content}
            speed={speed}
            color={row1.color}
          />
        </div>
        <div className="marquee-item-wrapper ">
          <MarqueeItem
            content={row2.content}
            speed={speed2}
            color={row2.color}
            rocken={true}
          />
          <MarqueeItem
            content={row2.content}
            speed={speed2}
            color={row2.color}
            rocken={true}
          />
        </div>
        <div className="marquee-item-wrapper ">
          <MarqueeItem
            content={row3.content}
            speed={speed3}
            color={row3.color}
          />
          <MarqueeItem
            content={row3.content}
            speed={speed3}
            color={row3.color}
          />
        </div>
        <div className="marquee-item-wrapper ">
          <MarqueeItem
            content={row4.content}
            speed={speed4}
            color={row4.color}
          />
          <MarqueeItem
            content={row4.content}
            speed={speed4}
            color={row4.color}
          />
        </div>
      </motion.div>
    </>
  );
};
