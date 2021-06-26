import HeaderMain from "./HeaderMain";
import HowWeDoSection from "./HowWeDoSection";
import FooterMain from "./FooterMain";

export default function MainPage() {
  return (
    <>
      <HeaderMain />
      <main>
        <HowWeDoSection />
      </main>
      <FooterMain />
    </>
  );
}
