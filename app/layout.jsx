import "./globals.css";

export const metadata = {
  title: "Vasudha Group | Spaces for Life",
  description:
    "Thoughtfully imagined spaces. Enduring relationships. A legacy built around the way you live.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}