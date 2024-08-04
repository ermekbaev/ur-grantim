import type { NextPage } from '~/types/components/next';
import { AboutSection } from './sections/About';
import { ContactSection } from './sections/Contact';

const IndexPage: NextPage = () => (
  <main>
    <AboutSection />
    <ContactSection />
  </main>
);

export default IndexPage;
