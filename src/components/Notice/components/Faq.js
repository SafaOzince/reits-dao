import React from "react";
import styled from "styled-components";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "../accordion.css";

const items = [
  {
    q: 'Can "RDF" be converted into cash immediatlely?',
    a: "In the Basic Sale, every user can commit a maximum of about 100 USD worth of RBS-BNB LP Tokens. We calculate the maximum LP amount about 30 minutes before each IFO. The Basic Sale has no participation fee.In the Unlimited Sale, there’s no limit to the amounts of RBS-BNB LP Tokens you can commit. However, there’s a fee for participation: see below.",
  },
  {
    q: 'Is it possible to sell "RDF" tokens immediately after the publich offering closes?',
    a: "You can choose one or both at the same time! If you’re only committing a small amount, we recommend the Basic Sale first.",
  },
  {
    q: "Are the assets invested in Ritz Dao Finance safely operated?",
    a: "There’s only a participation fee for the Unlimited Sale: there’s no fee for the Basic Sale.The fee will start at 1%.The 1% participation fee decreases in cliffs, based on the percentage of overflow from the “Unlimited” portion of the sale.",
  },
  {
    q: 'How is the initial listing price of "RDF" token formed?',
    a: "We burn it. The RBS-BNB LP tokens from the participation fee will be decomposed. We will then use the BNB portion to market buy the RBS equivalent, and finally throw all of the RBS into the weekly token burn.",
  },
];

export const Flex = styled.div`
  display: flex;
  justify-content: center;
  width:100%;
  margin-bottom: 100px;
`;

export default function Faq() {
  return (
    <Flex>
      <Accordion className="aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
        {items.map(({ q, a }) => (
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton color="black">{q}</AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p className="text-purple-900 leading-7">{a}</p>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </Flex>
  );
}