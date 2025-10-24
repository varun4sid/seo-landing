import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

import faqPairs from "@/constants/faq";

function FAQ() {
    return (
        <div id="faq-container">
            <Accordion type="single" className="w-full" collapsible>
                {faqPairs.map((qna, index) => (
                    <AccordionItem value={"item-" + index}>
                        <AccordionTrigger>{qna.question}</AccordionTrigger>
                        <AccordionContent>
                            <p>{qna.answer}</p>
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    );
}

export default FAQ;
