'use client'

import React, { useState } from "react";

const FAQ = () => {
    const [activeFAQ, setActiveFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  const faqs = [
    {
      question: "How secure is my information on Safebox?",
      answer:
        "Your data is protected through multiple layers of security... fine-grained access control, so only the people you choose can see specific data—no one else, not even us.",
    },
    {
      question: "How is Safebox different from DigiLocker?",
      answer:
        "While DigiLocker is a government initiative... enhanced security features.",
    },
    {
      question:
        "What makes Safebox different from cloud storage like Google Drive or Dropbox?",
      answer:
        "Unlike traditional cloud storage, Safebox is built specifically for privacy and security... never used for advertising or sold to third parties.",
    },
    {
      question: "Who is behind Safebox?",
      answer:
        "Safebox is developed by The Beyond Company, a team dedicated to creating privacy-first solutions...",
    },
    {
      question: "Who can I share my information with?",
      answer:
        "You have complete control over who can access your information... You can revoke access at any time.",
    },
  ];
  return (
    <div>
        <section className="bg-gray-50 py-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-green-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600">
              Answers to common questions about Safebox
            </p>
          </div>
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl mb-4 shadow-md transition-all"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 flex justify-between items-center text-left text-green-900 font-semibold text-lg hover:bg-gray-100"
              >
                {faq.question}
                <span
                  className={`text-2xl transition-transform duration-300 ${
                    activeFAQ === index ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>
              {activeFAQ === index && (
                <div className="px-6 pb-6 text-gray-600 animate-fade-in">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
export default FAQ;