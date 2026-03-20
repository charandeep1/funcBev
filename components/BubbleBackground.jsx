'use client';

import { useEffect, useState } from 'react';
import styles from '../app/BubbleBackground.module.css';

export default function BubbleBackground({
  bubbleCount = 60,
  minSize = 10,
  maxSize = 45,
  minDuration = 4,
  maxDuration = 12
}) {
  const [bubbles, setBubbles] = useState([]);

  useEffect(() => {
    // Generate the bubble data only on the client side
    const generatedBubbles = Array.from({ length: bubbleCount }).map((_, i) => {
      const size = Math.random() * (maxSize - minSize) + minSize;
      const left = Math.random() * 100;
      const duration = Math.random() * (maxDuration - minDuration) + minDuration;
      const delay = Math.random() * maxDuration;

      return {
        id: i,
        size: `${size}px`,
        left: `${left}%`,
        duration: `${duration}s`,
        delay: `-${delay}s`, // Negative delay to start mid-animation
      };
    });

    setBubbles(generatedBubbles);
  }, [bubbleCount, minSize, maxSize, minDuration, maxDuration]);

  // Render an empty container during SSR to match the client's initial HTML
  if (bubbles.length === 0) {
    return <div className={styles.bubbleContainer} aria-hidden="true" />;
  }

  return (
    <div className={styles.bubbleContainer} aria-hidden="true">
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className={styles.bubble}
          style={{
            '--b-size': bubble.size,
            '--b-left': bubble.left,
            '--b-duration': bubble.duration,
            '--b-delay': bubble.delay,
          }}
        />
      ))}
    </div>
  );
}