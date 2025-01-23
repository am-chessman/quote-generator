import "./globals.css"

export const metadata = {
  title: "Quotes",
  description: "Most famous quotes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Merienda:wght@300..900&display=swap" rel="stylesheet" />
        <link rel="icon" type="image/ico" sizes="32x32" href="favicon-32x32.ico"/>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
