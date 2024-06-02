"use client"
import Header from "./library/header/header";
import Footer from "./library/footer/footer";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { mainTheme } from "./library/themes/main-theme";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>
        <ThemeProvider theme={mainTheme}>
          <CssBaseline />
            <Header />
              {children}
            <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
