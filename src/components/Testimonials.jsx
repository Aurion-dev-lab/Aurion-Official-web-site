function Testimonials() {
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
        <section id="testimonials" className="py-20 bg-white dark:bg-[#120909]">
            <div className="mx-auto max-w-6xl px-7">
                <div className="mb-12 max-w-2xl">
                    <p className="mb-3 text-xs uppercase tracking-[0.3em] text-accent-bright">
                        Trust
                    </p>
                    <h2 className="mb-4 font-display text-[clamp(2rem,4vw,3.2rem)] text-gray-900 dark:text-text">
                        Trusted by visionaries
                    </h2>
                    <p className="text-[1.05rem] text-gray-600 dark:text-muted">
                        We build long-term partnerships with companies that value engineering excellence.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-3">
                    {testimonials.map((item, idx) => (
                        <div
                            key={idx}
                            className="rounded-3xl bg-white dark:bg-[#181818] p-8 border border-gray-200 dark:border-[#222] transition hover:shadow-lg dark:hover:shadow-none"
                        >
                            <div className="mb-6">
                                {[...Array(5)].map((_, i) => (
                                    <span key={i} className="text-accent-bright text-lg">★</span>
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
