import { fetchAllApps } from "@/lib/appStore";
import portfolioData from "@/data/portfolio.json";
import { PortfolioData } from "@/types";

import GradientBackground from "@/components/effects/GradientBackground";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Portfolio from "@/components/sections/Portfolio";
import Experience from "@/components/sections/Experience";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";

// Revalidate every 24 hours
export const revalidate = 86400;

async function getPortfolioData() {
  const data = portfolioData as PortfolioData;

  // Fetch app store data for all apps
  const appsWithStoreData = await fetchAllApps(data.apps);

  return {
    ...data,
    apps: appsWithStoreData,
  };
}

export default async function Home() {
  const data = await getPortfolioData();

  return (
    <>
      <GradientBackground />
      <Header />

      <main>
        <Hero data={data.hero} />
        <About data={data.about} />
        <Portfolio apps={data.apps} />
        <Experience experience={data.experience} />
        <Testimonials testimonials={data.testimonials} />
        <Contact data={data.contact} />
      </main>

      <Footer />
    </>
  );
}
