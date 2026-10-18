import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqData = [
    {
        question: "What is your Minimum Order Quantity (MOQ) for industrial fragrances?",
        answer: "Our standard Minimum Order Quantity (MOQ) for wholesale industrial and concentrated fragrances starts at 5kg, depending on the specific formulation. We also offer 500g and 1kg sizes for initial sampling and testing."
    },
    {
        question: "Do you provide safety documentation (MSDS, COA, IFRA)?",
        answer: "Yes, all our fragrance oils are manufactured under strict compliance. We provide Material Safety Data Sheets (MSDS), Certificates of Analysis (COA), and IFRA compliance certificates along with every bulk B2B order upon request."
    },
    {
        question: "Can I request custom fragrance formulation for my soap/detergent brand?",
        answer: "Absolutely. We specialize in custom scent creation. Our perfumery team can reverse-engineer or build a bespoke fragrance profile tailored strictly to the base and pH level of your liquid detergents, soaps, or cosmetics."
    },
    {
        question: "How do I request fragrance samples?",
        answer: "You can easily request a sample by using the 'Request Sample' button on our pages, or by contacting our B2B sales team directly via email. We typically dispatch sample kits within 2-3 business days globally."
    }
];

const FAQItem = ({ faq, isOpen, toggleOpen }) => {
    return (
        <div className="border hover:border-leaf-300 transition-colors bg-white">
            <button
                className="w-full text-left px-6 py-4 flex justify-between items-center focus:outline-none"
                onClick={toggleOpen}
            >
                <span className="font-serif font-medium text-lg text-forest-900 pr-4">{faq.question}</span>
                {isOpen ? (
                    <ChevronUp className="text-leaf-500 flex-shrink-0" size={20} />
                ) : (
                    <ChevronDown className="text-forest-300 flex-shrink-0" size={20} />
                )}
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                    >
                        <div className="px-6 pb-4 pt-2 text-gray-600 bg-mint-50/30">
                            {faq.answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <section className="py-24 bg-mint-50">
            <div className="max-w-4xl mx-auto px-4">
                <div className="text-center mb-16">
                    <span className="inline-block py-1 px-3 rounded-full bg-leaf-100 text-leaf-800 font-sans text-xs tracking-widest uppercase mb-4 font-bold">
                        B2B Inquiries
                    </span>
                    <h2 className="text-3xl md:text-5xl font-serif text-forest-900 mb-6">Frequently Asked Questions</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        Common queries from our wholesale and industrial manufacturing partners.
                    </p>
                </div>

                <div className="flex flex-col gap-4">
                    {faqData.map((faq, index) => (
                        <FAQItem
                            key={index}
                            faq={faq}
                            isOpen={openIndex === index}
                            toggleOpen={() => setOpenIndex(index === openIndex ? -1 : index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
