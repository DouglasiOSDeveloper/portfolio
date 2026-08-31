// src/app/layout.tsx
import "./globals.css";

export const metadata = {
  title: "Douglas Figueirôa – Mobile Software Engineer | iOS, Flutter & Full-Stack",
  description:
    "Mobile Software Engineer specializing in native iOS, with Flutter, full-stack and AWS experience.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
