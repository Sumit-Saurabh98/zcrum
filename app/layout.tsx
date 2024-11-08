import { ThemeProvider } from "@/components/theme-provider"
import { ClerkProvider} from '@clerk/nextjs'
import {shadesOfPurple} from '@clerk/themes'
import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/Header";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "TaskTab",
  description: "A task manager for the web."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
    appearance={{
      baseTheme: shadesOfPurple,
      variables: {
        colorPrimary: "#3b82f6",
        colorBackground: "#1a202c",
        colorInputBackground: "#2D3748",
        colorInputText: "#F3F4F6"
      },
      elements: {
        formButtonPrimary: "text-white",
        card: "bg-gray-800",
        headerTitle: "text-blue-400",
        headerSubtitle: "text-gary-400"
      }
    }}
    >
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} dotted-background`}
        suppressHydrationWarning
      >
        <ThemeProvider 
          attribute="class" 
          defaultTheme="dark"
          enableSystem={true}
          disableTransitionOnChange
        >
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <footer className="bg-gray-900 py-12">
            <div className="container mx-auto px-4 text-center text-gray-200">
              <p>Made with 💖 by Sumit</p>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
    </ClerkProvider>
  );
}