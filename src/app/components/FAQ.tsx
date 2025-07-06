'use client';

import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

const faqs = [
  {
    question: 'Do you accept insurance?',
    answer: 'No, but a superbill is provided for self-submission.',
  },
  {
    question: 'Are online sessions available?',
    answer: 'Yes — all virtual sessions are conducted via Zoom.',
  },
  {
    question: 'What is your cancellation policy?',
    answer: '24-hour notice is required for all cancellations.',
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="FAQ" className="py-20 px-6 bg-white text-gray-800">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-lg overflow-hidden shadow-sm"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full text-left px-6 py-4 bg-gray-100 flex justify-between items-center"
              >
                <span className="text-lg font-medium">{faq.question}</span>
                <FaChevronDown
                  className={`transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-white text-gray-700 border-t">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
