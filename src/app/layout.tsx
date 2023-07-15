import type { Metadata } from "next";
import ThemeRegistry from "./ThemeRegistry";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Staf.ai",
  description: "Browse vetted AI agents, tools, and copilots",
};

export default function RootLayout({
  children,
  auth,
}: {
  children: React.ReactNode;
  auth: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry options={{ key: "joy" }}>
          <Navbar />
          {children}
          {auth}
          <Footer />
        </ThemeRegistry>
      </body>
    </html>
  );
}
