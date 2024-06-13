import type { Metadata } from "next";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { Inter } from "next/font/google";
import "./globals.css";
import Provider from "@/provider/Provider";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Health Care || Subroto Das Health Care Project",
  description: "Protect Your Life And Take Care Of Your Health",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider>
      <html lang="en">
        <body className={inter.className}>
          <AppRouterCacheProvider>
            <>
              <Toaster position="bottom-right" richColors />
              {children}
            </>
          </AppRouterCacheProvider>
        </body>
      </html>
    </Provider>
  );
}
