import { useState } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';

function FAQ() {
    const faqs = [
        {
            question: "What technologies do you use for full-stack web development?",
            answer: "We primarily use React and Next.js for the frontend, backed by Node.js, Python, or Java. We ensure your application is scalable, secure, and SEO-optimized from day one.",
        },
        {
            question: "Do you build native or cross-platform mobile apps?",
            answer: "We specialize in Flutter for efficient cross-platform development, but we also offer native Android (Kotlin) and iOS (Swift) consulting when maximum performance or platform-specific features are required.",
        },
        {
            question: "How can you help with our DevOps & Cloud infrastructure?",
            answer: "We streamline your deployment pipelines using Docker, Kubernetes, and GitHub Actions. We also optimize cloud resources on AWS or Azure to reduce costs and improve reliability.",
        },
        {
            question: "What is your design process?",
            answer: "We start with user-centric wireframes to define flow and structure, then move to high-fidelity UI designs. We ensure a seamless handoff to development with complete design systems.",
        },
        {
            question: "What does your project consulting service include?",
            answer: "We provide strategic scoping, technical risk assessment, and delivery oversight. We help you make informed build-vs-buy decisions and plan tailored roadmaps for your specific business goals.",
        },
    ];

    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="py-20 bg-gray-50 dark:bg-white/5">
            <div className="mx-auto max-w-4xl px-7">
                <div className="mb-12 text-center">
                    <p className="mb-3 text-xs uppercase tracking-[0.3em] text-accent-bright">
                        FAQ
                    </p>
                    <h2 className="mb-4 font-display text-[clamp(2rem,4vw,3.2rem)] text-gray-900 dark:text-text">
                        Common questions
                    </h2>
                    <p className="text-[1.05rem] text-gray-600 dark:text-muted">
                        Details about our specific services and technical approach.
                    </p>
                </div>

                <div className="grid gap-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`overflow-hidden rounded-2xl bg-white transition-all dark:bg-card/40 ring-1 ring-gray-200 dark:ring-white/10 ${openIndex === index ? 'shadow-md dark:shadow-none' : 'shadow-sm'
                                }`}
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="flex w-full items-center justify-between p-6 text-left focus:outline-none"
                            >
                                <span className="font-display text-lg font-semibold text-gray-900 dark:text-text">
                                    {faq.question}
                                </span>
                                <span className="ml-4 text-accent-bright">
                                    {openIndex === index ? <FiMinus size={24} /> : <FiPlus size={24} />}
                                </span>
                            </button>
                            <div
                                className={`transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                    }`}
                            >
                                <div className="px-6 pb-6 text-gray-600 dark:text-muted leading-relaxed border-t border-gray-100 dark:border-white/5 pt-4">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default FAQ;
