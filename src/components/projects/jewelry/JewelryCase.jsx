'use client';

import { useMemo, useState } from 'react';
import Lightbox from '@/components/ui/Lightbox';
import { JEWELRY_FEATURES, JEWELRY_HERO } from '@/data/jewelry';
import CaseHero from '../CaseHero';
import '../stockmate/StockMateCase.css';
import Close from './Close';
import Core from './Core';
import Features from './Features';
import Flow from './Flow';
import Problems from './Problems';
import Verify from './Verify';

export default function JewelryCase() {
  const [activeIndex, setActiveIndex] = useState(null);
  const lightboxItems = useMemo(() => {
    const seen = new Set();
    return [
      ...JEWELRY_HERO.shots,
      ...JEWELRY_FEATURES.map((item) => item.image).filter(Boolean),
    ].filter((item) => {
      if (!item?.src || seen.has(item.src)) return false;
      seen.add(item.src);
      return true;
    });
  }, []);

  const open = (item) => {
    const idx = lightboxItems.findIndex((entry) => entry.src === item.src);
    setActiveIndex(idx >= 0 ? idx : null);
  };

  return (
    <article className="sm-case sm-case--jewelry">
      <CaseHero data={JEWELRY_HERO} tone="jewelry" onOpen={open} />
      <Problems />
      <Flow />
      <Core />
      <Features onOpen={open} />
      <Verify />
      <Close />
      <Lightbox
        items={lightboxItems}
        index={activeIndex}
        onClose={() => setActiveIndex(null)}
        onNavigate={setActiveIndex}
      />
    </article>
  );
}
