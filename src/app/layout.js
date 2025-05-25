import './globals.css';
import { Karla } from 'next/font/google';

const karla = Karla({
  subsets: ['latin'],
  weight: ['400', '500', '700'], // adjust as needed
  variable: '--font-karla',
});

export const metadata = {
  title: 'Priya Mohan | Portfolio',
  description: 'Computer Science Portfolio',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={karla.variable}>
      <body>{children}</body>
    </html>
  );
}

