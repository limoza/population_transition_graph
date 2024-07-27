'use client';

import React from 'react';
import { Application } from '@/Components/Application/Application';
import { SelectedPrefsProvider } from '@/lib/context/SelectedPrefsProvider';

export default function Home() {
  return (
    <main>
      <SelectedPrefsProvider>
        <Application />
      </SelectedPrefsProvider>
    </main>
  );
}
