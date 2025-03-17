
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
    <html
      lang='pt-BR'

    >
      <head>
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap'
        ></link>
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap'
        ></link>
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@100;200;300;400;500;600;700&display=swap'
        ></link>

        <link
          rel='stylesheet'
          href='https://use.typekit.net/tcg6klc.css'
        ></link>
      </head>
      <body className={`antialiased `}>{children}</body>
    </html>
  );
}
