import type { NextPage } from '~/types/components/next';
import { AboutUsSection } from './sections/AboutUs';
// import { AdditionalServicesSection } from './sections/AdditionalServices';
import { ContactsSection } from './sections/Contacts';
import { SimpleAndCheapSection } from './sections/SimpleAndCheap';
import { WorkStagesSection } from './sections/WorkStages';

const IndexPage: NextPage = () => (
  <main>
    <AboutUsSection />
    <SimpleAndCheapSection />
    {/* <AdditionalServicesSection /> */}
    <WorkStagesSection />
    <ContactsSection />
  </main>
);

export default IndexPage;
