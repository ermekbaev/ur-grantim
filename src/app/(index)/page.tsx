import { useId } from 'react';

import type { NextPage } from '~/types/components/next';
import { Footer } from './Footer';
import { Header } from './Header';
import { AdditionalServicesSection } from './sections/AdditionalServices';
import { BenefitsSection } from './sections/Benefits';
import { ContactsSection } from './sections/Contacts';
import { IntroSection } from './sections/Intro';
import { OrderSection } from './sections/Order';
import { ServicesSection } from './sections/Services';
import { WorkStagesSection } from './sections/WorkStages';

const IndexPage: NextPage = () => {
  const servicesSectionId = useId();
  const workStagesSectionId = useId();
  const benefitsSectionId = useId();
  const contactsSectionId = useId();

  return (
    <>
      <Header
        {...{
          servicesSectionId,
          workStagesSectionId,
          benefitsSectionId,
          contactsSectionId,
        }}
      />

      <main>
        <IntroSection />
        <ServicesSection id={servicesSectionId} />
        <WorkStagesSection id={workStagesSectionId} />
        <BenefitsSection id={benefitsSectionId} />
        <AdditionalServicesSection />
        <OrderSection />
        <ContactsSection id={contactsSectionId} />
      </main>

      <Footer />
    </>
  );
};

export default IndexPage;
