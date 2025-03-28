'use client';

import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

export default function Template({ children }: { children: React.ReactNode }) {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    return (
        <main
            className={cn(
                isMounted ? 'translate-y-0 opacity-100' : '-translate-y-6 opacity-0',
                'transition-[opacity,_transform] duration-700',
            )}>
            {children}
        </main>
    );
}
