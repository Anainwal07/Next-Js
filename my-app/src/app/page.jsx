import LearnCSSModule from "@/components/LearnCSSModule";
import LearnDataFetching from "@/components/LearnDataFetching";
import LearnLink from "@/components/LearnLink";
import LearnUseGlobalCss from "@/components/LearnUseGlobalCss";
import LearnUseRouter from "@/components/LearnUseRouter";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* <LearnLink/> */}
      {/* <LearnUseRouter/> */}
      {/* <LearnUseGlobalCss/> */}
      {/* <LearnCSSModule/> */}
      <LearnDataFetching/>
    </main>
  );
}
