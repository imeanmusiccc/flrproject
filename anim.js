document.addEventListener('DOMContentLoaded', () => {
   const elements = document.querySelectorAll(
    'span, h1, h2, h3, p, .stats_card, .services_card, .how-block_step, .event-detail, .button-wrap, nav, header, section, .stats-block_item, .event-detail_feature, .event-blind, .event-lecture, .event-master, .merch_content, .merch_image, .method-col, .history-item, .footer_link, .approach-item, .footer_col, .service-row, .how-block_title, .stats-block, .merch-card'
    );

    elements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(25px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target); 
            }
        });
    },
    {
        threshold: 0.25
    });
    elements.forEach(el => observer.observe(el));
});