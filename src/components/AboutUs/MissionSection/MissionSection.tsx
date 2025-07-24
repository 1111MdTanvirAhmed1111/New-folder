import Container from '@/components/Reusable/Container/Container';
import React from 'react';

export const details = [
  {
    title: "We believe ",
    description:
      "that financial freedom should not be a privilege, but a possibility — for everyone.",
  },
  {
    title: "We see a ",
    description:
      "world shifting towards decentralization, where technology replaces gatekeepers.",
  },
  {
    title: "We build ",
    description:
      "C3 to empower individuals with tools to create, grow, and preserve wealth — transparently.",
  },
  {
    title: "We grow ",
    description:
      "as a community, not through speculation, but through shared value and mutual support.",
  },
];

const MissionSection = () => {
    const textClassNames="text-white text-sm md:text-xl leading-relaxed";
  return (
    <div>
      <Container>
        <div className="bg-neutral-10 px-[10px] py-6 md:py-[30px] md:px-[50px] flex flex-col gap-6 mt-6 md:mt-13 mb-12 md:mb-25">
          {details.map((item, index) => (
            <div key={index} className={`${textClassNames}`}>
              <p>
                <span className="font-bold text-primary-10">{item.title}</span>
                {item.description}
              </p>
            </div>
          ))}
          <p className={`${textClassNames}`}>Join the generation that’s redefining wealth. Join C3 Global Crypto Alliance.
</p>
<div>
    <p className={`${textClassNames}`}>C3 Global Crypto Alliance</p>
    <p className={`${textClassNames}`}>Terms & Conditions – Privacy Policy</p>
</div>
        </div>
      </Container>
    </div>
  );
};

export default MissionSection;
