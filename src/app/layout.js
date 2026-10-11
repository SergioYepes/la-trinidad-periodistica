import './globals.css';

export const metadata = {
  title: 'La Trinidad Periodística y el Idioma | 10 Años del Acuerdo de Paz (2016-2026)',
  description: 'Plataforma digital de periodismo convergente con 4 investigaciones sobre la década del Acuerdo de Paz en Colombia, recursos multimedia y plan de social media.',
  keywords: ['Periodismo Digital', 'Acuerdo de Paz Colombia 2016-2026', 'Justicia Transicional', 'JEP', 'Reforma Rural', 'La Trinidad Periodística', 'Periodismo Convergente'],
  authors: [{ name: 'Equipo Editorial La Trinidad Periodística' }],
  openGraph: {
    title: 'La Trinidad Periodística y el Idioma | 10 Años del Acuerdo de Paz (2016-2026)',
    description: 'Medio digital con 4 informes periodísticos convergentes, podcast testimonial, microdocumental y plan de social media.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" suppressHydrationWarning style={{ backgroundColor: '#0a0d14', colorScheme: 'dark' }}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@600;700;900&family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,600;0,6..72,700;1,6..72,400&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body suppressHydrationWarning style={{ backgroundColor: '#0a0d14', color: '#f8fafc', margin: 0, padding: 0 }}>
        {children}
      </body>
    </html>
  );
}
