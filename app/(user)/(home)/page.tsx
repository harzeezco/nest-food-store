import { CTA, Categories, FeatureProducts, Features, Hero, HowToCreate, OurPicks } from '@user/home';

export default function Home() {
  return (
    <main className=''>
      <Hero />
      <Categories />
      <FeatureProducts />
      <HowToCreate />
      <Features />
      <OurPicks />
      <CTA />
    </main>
  );
}
