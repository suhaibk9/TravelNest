// import type { Metadata } from 'next';
// import localFont from 'next/font/local';
// import './globals.css';
// import Navbar from '@/components/navbar/Navbar';
// import Providers from './Providers';
// import { ClerkProvider } from '@clerk/nextjs';
// import { Inter } from 'next/font/google';
// const inter = Inter({ subsets: ['latin'] });
// export const metadata: Metadata = {
//   title: 'TravelNest',
//   description:
//     'TravelNest offers easy hotel and resort bookings. Explore a wide range of accommodations to suit your needs, from budget hotels to luxury resorts.',
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <ClerkProvider>
//       <html lang="en" suppressHydrationWarning>
//         <body className={inter.className}>
//           <Providers>
//             <Navbar />
//             <main className="container py-10">{children}</main>
//           </Providers>
//         </body>
//       </html>
//     </ClerkProvider>
//   );
// }
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/navbar/Navbar';
import Providers from './Providers';
import { ClerkProvider } from '@clerk/nextjs';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'TravelNest',
  description:
    'TravelNest offers easy hotel and resort bookings. Explore a wide range of accommodations to suit your needs, from budget hotels to luxury resorts.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={inter.className}>
          <Providers>
            <Navbar />
            <main className="container py-10">{children}</main>
          </Providers>
        </body>
      </html>
    </ClerkProvider>
  );
}
