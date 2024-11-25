import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import ScrollingText from "@/components/Scrolling";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ScrollingText
        text="Wills, Contracts, Acts of Donation, Simple Successions - Power of Attorney: The Nice Notary has you covered!"
        speed={20}
      />
      <Testimonials />
    </>
  );
}
