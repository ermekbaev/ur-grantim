import type { NextPage } from '~/types/components/next';
import { AboutUsSection } from './sections/AboutUs';
import { ContactsSection } from './sections/Contacts';
// import { WorkStagesSection } from './sections/WorkStages';

const IndexPage: NextPage = () => (
  <main>
    <AboutUsSection />
    {/* <WorkStagesSection /> */}
    <ContactsSection />
  </main>
);

export default IndexPage;
