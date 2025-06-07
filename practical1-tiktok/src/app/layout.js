import { Inter } from 'next/font/google';
import './globals.css';
import MainLayout from '@/components/layout/MainLayout';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'TikTok Clone',
    description: 'A TikTok clone built with Next.js',
};
'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useState } from 'react';
import { AuthProvider } from '../contexts/authContext';
import { Toaster } from 'react-hot-toast';
import './globals.css';
import MainLayout from '../components/layout/MainLayout';

export default function RootLayout({ children }) {
   const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000, // 1 minute
      refetchOnWindowFocus: false,
    },
  },
});

  return (
    <html lang="en">
      <body>
        <QueryClientProvider client={queryClient}>
          <AuthProvider>
            <Toaster position="top-center" />
            <MainLayout>{children}</MainLayout>
          </AuthProvider>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </body>
    </html>
  );
}
export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <MainLayout>
                    {children}
                </MainLayout>
            </body>
        </html>
    );
}