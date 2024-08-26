import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "@/styles/globals.css";
import ScreenContainer from "@/components/ScreenContainer";
import SplashScreen from "@/components/SplashScreen";
import Header from "@/components/Header";
import BottomNavigation from "@/components/BottomNavigation/BottomNavigation";
import MainContainer from "@/components/MainContainer/MainContainer";

const openSans = Open_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Lunch Overflow",
  description: "점심 메뉴를 추천해드립니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={openSans.className}>
        <ScreenContainer>
          <Header />
          <SplashScreen>
            <MainContainer>{children}</MainContainer>
          </SplashScreen>
          <BottomNavigation />
        </ScreenContainer>
      </body>
    </html>
  );
}
