import useScrollReveal from '../hooks/useScrollReveal';

function Testimonials() {
    const sectionRef = useScrollReveal();

    const testimonials = [
        {
            quote: "Aurion didn't just build our platform; they engineered a scalable foundation that allowed us to secure Series A funding. Their technical expertise is unmatched.",

        },
        {
            quote: "We needed a partner who understood enterprise security constraints. Aurion delivered a compliant, high-performance cloud architecture in record time.",

        },
        {
            quote: "The transition from legacy systems to a modern microservices architecture was seamless. Their team became a true extension of ours.",

        },
    ];

    return (
        <section ref={sectionRef} id="testimonials" className="py-20 bg-white dark:bg-[#0c0c0e]">
            <div className="mx-auto max-w-6xl px-7">
                <div className="mb-12 max-w-2xl">
                    <p className="reveal-blur mb-3 text-xs uppercase tracking-[0.3em] text-accent-bright">
                        Trust
                    </p>
                    <h2 className="reveal-blur stagger-1 mb-4 font-display text-[clamp(2rem,4vw,3.2rem)] text-gray-900 dark:text-text">
                        Trusted by visionaries
                    </h2>
                    <p className="reveal-fade-up stagger-2 text-[1.05rem] text-gray-600 dark:text-muted">
                        We build long-term partnerships with companies that value engineering excellence.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-3">
                    {testimonials.map((item, idx) => (
                        <div
                            key={idx}
                            className={`reveal-fade-up stagger-${idx + 1} group rounded-3xl bg-white dark:bg-[#181818] p-8 border border-gray-200 dark:border-[#222] transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5 dark:hover:shadow-[0_8px_30px_rgba(224,62,62,0.06)]`}
                        >
                            <div className="mb-6">
                                {[...Array(5)].map((_, i) => (
                                    <span key={i} className="star-shimmer text-accent-bright text-lg">★</span>
                                ))}
                            </div>
                            <blockquote className="mb-6 text-lg font-medium text-gray-900 dark:text-text leading-relaxed">
                                "{item.quote}"
                            </blockquote>
                            <div className="border-t border-gray-100 pt-6 dark:border-white/5">
                                <cite className="not-italic">
                                    <span className="block font-semibold text-gray-900 dark:text-text">
                                        {item.author}
                                    </span>
                                    <span className="block text-sm text-gray-500 dark:text-muted">
                                        {item.title}
                                    </span>
                                </cite>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Testimonials;
