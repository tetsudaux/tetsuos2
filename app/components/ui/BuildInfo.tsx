'use client';

import { useEffect } from 'react';

export function BuildInfo() {
  useEffect(() => {
    const commit = process.env.NEXT_PUBLIC_GIT_COMMIT ?? 'unknown';
    console.log(`%c tetsuos2 %c ${commit} `,
      'background:#8558cc;color:#fff;font-weight:bold;padding:2px 6px;border-radius:4px 0 0 4px;font-size:11px',
      'background:#1e1e1e;color:#bca6df;padding:2px 6px;border-radius:0 4px 4px 0;font-size:11px'
    );
  }, []);

  return null;
}
