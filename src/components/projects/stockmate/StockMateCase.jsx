'use client';

import { useMemo, useState } from 'react';
import Lightbox from '@/components/ui/Lightbox';
import {
  STOCKMATE_FEATURES,
  STOCKMATE_HERO,
  STOCKMATE_VERIFY,
} from '@/data/stockmate';
import './StockMateCase.css';
import CaseHero from '../CaseHero';
import Close from './Close';
import Core from './Core';
import Features from './Features';
import Flow from './Flow';
import Problems from './Problems';
import Verify from './Verify';

export default function StockMateCase({ project }) {
  const [activeIndex, setActiveIndex] = useState(null);
  const lightboxItems = useMemo(() => {
    const seen = new Set();
    return [
      ...STOCKMATE_HERO.shots,
      ...STOCKMATE_FEATURES.map((item) => item.image),
      ...STOCKMATE_VERIFY.map((item) => item.image).filter(Boolean),
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
    <article className="sm-case">
      <CaseHero data={STOCKMATE_HERO} onOpen={open} />
      <Problems />
      <Flow />
      <Core />
      <Features onOpen={open} />
      <Verify onOpen={open} />
      <Close github={project.links?.github} />
      <Lightbox
        items={lightboxItems}
        index={activeIndex}
        onClose={() => setActiveIndex(null)}
        onNavigate={setActiveIndex}
      />
    </article>
  );
}
