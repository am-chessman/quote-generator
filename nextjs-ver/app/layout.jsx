import "./globals.css"

export const metadata = {
  title: "Quotes",
  description: "Most famous quotes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
