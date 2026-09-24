'use client';

import { useMemo, useState } from 'react';
import Lightbox from '@/components/ui/Lightbox';
import { IRIS_FEATURES, IRIS_HERO, IRIS_VERIFY } from '@/data/iris';
import CaseHero from '../CaseHero';
import '../stockmate/StockMateCase.css';
import Close from './Close';
import Core from './Core';
import Features from './Features';
import Flow from './Flow';
import Problems from './Problems';
import Verify from './Verify';

export default function IrisCase() {
  const [activeIndex, setActiveIndex] = useState(null);
  const lightboxItems = useMemo(() => {
    const seen = new Set();
    return [
      ...IRIS_HERO.shots,
      ...IRIS_FEATURES.map((item) => item.image).filter(Boolean),
      ...IRIS_VERIFY.map((item) => item.image).filter(Boolean),
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
    <article className="sm-case sm-case--iris">
      <CaseHero data={IRIS_HERO} tone="iris" onOpen={open} />
      <Problems />
      <Flow />
      <Core />
      <Features onOpen={open} />
      <Verify onOpen={open} />
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
