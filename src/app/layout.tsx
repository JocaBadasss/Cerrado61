import type { Metadata } from 'next';

import './globals.css';

export const metadata: Metadata = {
  title: 'Cerrado61',
  description:
    'Produtora audiovisual em Brasília especializada em videos institucionais, coberturas de eventos e ensaios fotograficos. Qualidade e criatividade para seu projeto.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        <link
          rel='stylesheet'
          href='https://use.typekit.net/tcg6klc.css'
        ></link>
      </head>
      <body className={'antialiased'}>{children}</body>
    </html>
  );
}
