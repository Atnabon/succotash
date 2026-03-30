export interface StickyDetail {
  isStuck: boolean;
  sectionId: string;
}

/**
 * A more robust observer that detects when an element is in the 'active' zone 
 * at the top of the viewport.
 */
export function stickyObserver(
  node: HTMLElement,
  params: {
    sectionId?: string;
    onStuck?: (detail: StickyDetail) => void;
  } = {}
) {
  const { sectionId = "", onStuck } = params;

  // Use a margin that focuses on the top of the viewport.
  // This triggers when the element enters the top 10% of the screen.
  const observer = new IntersectionObserver(
    ([entry]) => {
      const isStuck = entry.isIntersecting;
      if (onStuck) onStuck({ isStuck, sectionId });
    },
    { 
      threshold: [0], 
      // Target the exact top edge (1px) to prevent early triggering.
      // -100% bottom means the intersection zone is a single line at the very top.
      rootMargin: "-1px 0px -100% 0px" 
    }
  );

  observer.observe(node);

  return {
    destroy() {
      observer.disconnect();
    }
  };
}
