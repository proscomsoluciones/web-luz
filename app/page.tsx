import { SubHeader } from "./components/SubHeader";
import { MainContentGrid } from "./components/MainContentGrid";
import { Sidebar } from "./components/Sidebar";
import { MainArticle } from "./components/MainArticle";
import { BigTakeArticle } from "./components/BigTakeArticle";
import { ArticleCard } from "./components/ArticleCard";
import { NewsletterBox } from "./components/NewsletterBox";
import { SurveillanceWidget } from "./components/SurveillanceWidget";
import { TariffTrackerWidget } from "./components/TariffTrackerWidget";
import { TrumponomicsSection } from "./components/TrumponomicsSection";
import { ExplainersSection } from "./components/ExplainersSection";
import { VideoSection } from "./components/VideoSection";
import { NewsStream } from "./components/NewsStream";

export default function Home() {
  const navLinks = [
    "Indicators",
    "Central Banks",
    "Jobs",
    "Trade",
    "Tax & Spend",
    "Inflation & Prices",
  ];

  const trumponomicsItems = [
    { title: "The $2 Trillion Global Arms Race", duration: "26:39" },
    { title: "The Midterms May Hinge on One Thing", duration: "23:30" },
    { title: "What If AI Ruins Your Job, Not Takes It?", duration: "29:01" },
    { title: "Why Oil Didn't Hit $200", duration: "35:39" },
  ];

  const explainers = [
    {
      imageSrc: "/middle_east_friendship.png",
      imageAlt: "SK Hynix",
      title: "How Once-Struggling SK Hynix Became a Trillion-Dollar Company",
    },
    {
      imageSrc: "/federal_reserve.png",
      imageAlt: "Data Centers",
      title: "How Trump and AI Data Centers Are Boosting Nuclear Power",
    },
    {
      imageSrc: "/russian_inflation.png",
      imageAlt: "Hormuz",
      title: "How the Future of Hormuz Is Testing Oman's Balancing Act",
    },
    {
      imageSrc: "/middle_east_friendship.png",
      imageAlt: "Border checks",
      title: "Why Europe's New Digital Border Checks Are Causing Big Delays",
    },
  ];

  const videoItems = [
    {
      imageSrc: "/russian_inflation.png",
      duration: "6:13",
      title: "Delta Travel Demand Withstands Fuel Costs",
    },
    {
      imageSrc: "/federal_reserve.png",
      duration: "4:14",
      title: "Delta Rises on Profit Guidance; EasyJet Moves on Apollo Bid | Stock Movers",
    },
    {
      imageSrc: "/middle_east_friendship.png",
      duration: "2:09",
      title: "SK Hynix Set to Make Record-Setting US Debut",
    },
    {
      imageSrc: "/russian_inflation.png",
      duration: "7:26",
      title: "Nadia Martin Wiggen on Volatile Week in Oil",
    },
  ];

  const moreNews = [
    {
      time: "36 min ago",
      title: "Aston Martin Lender Group Led by Arini, BlackRock, Sculptor",
    },
    {
      time: "2 hr ago",
      title: "Mexico, Peru Open Door To Restoring Relations After Bitter Political Fight",
      imageSrc: "/middle_east_friendship.png",
      imageAlt: "Mexico Peru",
    },
    {
      time: "3 hr ago",
      title: "Why Rogers Rushed to Buy Out Tanenbaum's Stake in Toronto Teams",
      subtitle: "Also: Five US banks report on one day next week",
      imageSrc: "/federal_reserve.png",
      imageAlt: "Rogers Teams",
    },
    {
      time: "3 hr ago",
      title: "The Date Is Set for Farage Versus the Count",
      subtitle: "There's been so much noise of late that it might be useful to end the week with a recap.",
      imageSrc: "/russian_inflation.png",
      imageAlt: "Farage",
    },
    {
      time: "3 hr ago",
      title: "US Eases Export Curbs on UAE, Opening Door for AI Chip Sales",
      imageSrc: "/middle_east_friendship.png",
      imageAlt: "UAE Chips",
    },
    {
      time: "3 hr ago",
      title: "Gasoline Prices Fuel Fresh Acceleration in Russian Inflation",
      imageSrc: "/russian_inflation.png",
      imageAlt: "Russian Gas",
    },
    {
      time: "3 hr ago",
      title: "Miner ERG Weighs Breakup to Split Assets Between Its Owners",
      imageSrc: "/middle_east_friendship.png",
      imageAlt: "Miner ERG",
    },
    {
      time: "3 hr ago",
      title: "Fed Vows to Deliver Price Stability in Monetary Policy Report",
      imageSrc: "/federal_reserve.png",
      imageAlt: "Fed Stability",
    },
    {
      time: "3 hr ago",
      title: "The Stock Market and a \"Phenomena of our Lifetimes\"",
      subtitle: "Something big has changed in the makeup of the US economy.",
      imageSrc: "/middle_east_friendship.png",
      imageAlt: "SK Hynix Stock",
    },
    {
      time: "4 hr ago",
      title: "Sinokor Oil Tankers Wait Near Saudi Arabia as Iran War Reignites",
      imageSrc: "/russian_inflation.png",
      imageAlt: "Sinokor Tankers",
    },
  ];

  return (
    <div className="flex flex-col bg-white text-zinc-950 font-sans flex-1">
      {/* Sub Header Component */}
      <SubHeader title="Economics" links={navLinks} />

      {/* Main Container */}
      <main className="mx-auto w-full max-w-[1280px] px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Grid Component */}
          <MainContentGrid>
            {/* First Row Articles */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-b border-zinc-200 pb-8">
              <MainArticle
                imageSrc="/russian_inflation.png"
                imageAlt="Russian Inflation"
                credit="Alexander Nemenov/AFP/Getty Images"
                title="Gasoline Prices Fuel Fresh Acceleration in Russian Inflation"
              />
              <MainArticle
                imageSrc="/federal_reserve.png"
                imageAlt="Federal Reserve"
                credit="Stefani Reynolds/Bloomberg"
                title="Fed Vows to Deliver Price Stability in Monetary Policy Report"
              />
            </div>

            {/* Big Take Row */}
            <div className="border-b border-zinc-200 pb-8">
              <BigTakeArticle
                category="The Big Take"
                title="The Shattering of the Middle East's Most Unlikely Friendship"
                description="Israeli tech titan Eyal Waldman and Palestinian tycoon Bashar Masri were best pals. The Hamas attack and Israel's response made them bitter enemies."
                imageSrc="/middle_east_friendship.png"
                imageAlt="Middle East Friendship"
              />
            </div>

            {/* Third Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-b border-zinc-200 pb-8">
              <ArticleCard
                imageSrc="/middle_east_friendship.png"
                imageAlt="Relations"
                title="Mexico, Peru Open Door To Restoring Relations After Bitter Political Fight"
                imageOpacity="opacity-80"
              />
              <ArticleCard
                imageSrc="/federal_reserve.png"
                imageAlt="Rogers Teams"
                title="Why Rogers Rushed to Buy Out Tanenbaum's Stake in Toronto Teams"
                imageOpacity="opacity-85"
              />
              <ArticleCard
                imageSrc="/russian_inflation.png"
                imageAlt="AI Chip Sales"
                title="US Eases Export Curbs on UAE, Opening Door for AI Chip Sales"
                imageOpacity="opacity-80"
              />
            </div>

            {/* Fourth Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <ArticleCard
                imageSrc="/russian_inflation.png"
                imageAlt="Russian Inflation"
                title="Gasoline Prices Fuel Fresh Acceleration in Russian Inflation"
              />
              <ArticleCard
                imageSrc="/middle_east_friendship.png"
                imageAlt="Miner ERG"
                title="Miner ERG Weighs Breakup to Split Assets Between Its Owners"
              />
              <ArticleCard
                imageSrc="/federal_reserve.png"
                imageAlt="Federal Reserve Building"
                title="Fed Vows to Deliver Price Stability in Monetary Policy Report"
              />
            </div>
          </MainContentGrid>

          {/* Sidebar Component */}
          <Sidebar>
            <NewsletterBox />
            <SurveillanceWidget />
            <TariffTrackerWidget
              title="Tariff Tracker"
              headline="Tracking Trump's Tariffs Across the Global Economy"
              description="While the unpredictability and risk of weaker economic growth have roiled financial markets, Trump has signaled plans to press ahead with more aggressive moves."
              imageSrc="/russian_inflation.png"
              imageAlt="Trump Tariffs"
            />
          </Sidebar>
        </div>

        {/* Trumponomics Component */}
        <TrumponomicsSection items={trumponomicsItems} />

        {/* Explainers Component */}
        <ExplainersSection title="Explainers" items={explainers} />

        {/* Videos Component */}
        <VideoSection title="Videos" videos={videoItems} />

        {/* News Stream Component */}
        <NewsStream title="More Economics News" items={moreNews} />
      </main>
    </div>
  );
}
