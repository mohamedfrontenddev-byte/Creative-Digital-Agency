
(function (global) {
  "use strict";

 
  const translations = {
    en: {
      // Navigation
      nav_home: "Home",
      nav_about: "About",
      nav_services: "Services",
      nav_portfolio: "Portfolio",
      nav_blog: "Blog",
      nav_contact: "Contact",
      nav_getStarted: "Get Started",

      // Hero Section (index.html)
      hero_title_part1: "Digital Experiences That ",
      hero_title_highlight: "Transform",
      hero_title_part2: " Brands",
      hero_description: "We craft innovative digital solutions that captivate audiences, drive engagement, and accelerate growth. Let's bring your vision to life.",
      hero_btn_project: "Start Your Project",
      hero_btn_viewWork: "View Our Work",

      // Index services
      services_title: "Our Services",
      services_subtitle: "We offer comprehensive digital solutions to help your brand thrive in the modern digital landscape.",
      service_webDesign: "Web Design",
      service_webDesign_desc: "Beautiful, responsive websites that engage visitors and convert them into customers.",
      service_branding: "Branding",
      service_branding_desc: "Strategic brand identity that communicates your values and resonates with your audience.",
      service_marketing: "Digital Marketing",
      service_marketing_desc: "Data-driven campaigns that increase visibility, drive traffic, and boost conversions.",
      service_seo: "SEO Optimization",
      service_seo_desc: "Strategic SEO that improves rankings and drives organic traffic to your website.",
      service_mobileApps: "Mobile Apps",
      service_mobileApps_desc: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
      service_uiux: "UI/UX Design",
      service_uiux_desc: "User-centered design that creates intuitive, engaging digital experiences.",
      service_content: "Content Strategy",
      service_content_desc: "Compelling content that tells your story and connects with your audience.",
      service_social: "Social Media",
      service_social_desc: "Strategic social media management that builds communities and drives engagement.",
      service_learnMore: "Learn More",

      // Portfolio
      portfolio_title: "Our Work",
      portfolio_subtitle: "Explore our latest projects and see how we've helped brands achieve their digital goals.",
      portfolio_viewAll: "View All Projects",
      portfolio_filter_all: "All",
      portfolio_filter_webDesign: "Web Design",
      portfolio_filter_branding: "Branding",
      portfolio_filter_marketing: "Marketing",
      portfolio_filter_development: "Development",
      portfolio_loadMore: "Load More Projects",
      portfolio_view_project: "View Project",

      // Testimonials
      testimonials_title: "What Clients Say",
      testimonials_subtitle: "Don't just take our word for it. Here's what our clients have to say about working with us.",

      // Team
      team_title: "Meet Our Team",
      team_subtitle: "Passionate creatives, strategists, and developers working together to bring your vision to life.",

      // Stats
      stats_projects: "Projects Completed",
      stats_clients: "Happy Clients",
      stats_team: "Team Members",
      stats_experience: "Years Experience",

      // CTA
      cta_project: "Ready to Start Your Project?",
      cta_project_desc: "Let's work together to create something amazing. Get in touch and let's discuss your next big idea.",
      cta_project_btn: "Get in Touch",
      cta_team: "Want to Join Our Team?",
      cta_team_desc: "We're always looking for talented individuals who share our passion for creating exceptional digital experiences.",
      cta_team_btn: "View Open Positions",
      cta_project_mind: "Have a Project in Mind?",
      cta_project_mind_desc: "Let's collaborate and create something extraordinary together. Your vision + our expertise = success.",
      cta_transform: "Ready to Transform Your Digital Presence?",
      cta_transform_desc: "Let's discuss your project and create a custom strategy that delivers real results.",

      // About Page
      about_hero_badge: "Who We Are",
      about_hero_title1: "Crafting Digital Stories",
      about_hero_title2: "That Move People",
      about_hero_subtitle: "A decade of turning bold ideas into measurable outcomes. We're a 50+ team of designers, engineers, and storytellers building the future of digital brands.",
      about_hero_cta1: "Start a Conversation",
      about_hero_cta2: "Read Our Story",
      about_stat_years: "Years of Impact",
      about_stat_team: "Team Members",
      about_stat_projects: "Projects Delivered",
      about_title: "About Us",
      about_subtitle: "We're passionate about creating digital experiences that inspire, engage, and deliver results.",
      about_story: "Our Story",
      about_story_p1: "Founded in 2014, Creative Digital Agency started with a simple mission: to help businesses thrive in the digital age. What began as a small team of three passionate designers has grown into a full-service digital agency with over 50 clients worldwide.",
      about_story_p2: "We've always believed that great design is about more than aesthetics—it's about solving problems, telling stories, and creating meaningful connections between brands and their audiences.",
      about_story_p3: "Today, we combine strategic thinking with creative execution to deliver digital experiences that not only look beautiful but also drive real business results. From startups to Fortune 500 companies, we've helped organizations across industries transform their digital presence.",
      about_workWithUs: "Work With Us",
      about_mission: "Our Mission & Values",
      about_mission_subtitle: "The principles that guide everything we do and every decision we make.",
      about_value_innovation: "Innovation",
      about_value_innovation_desc: "We push boundaries and challenge conventions to deliver cutting-edge solutions that keep our clients ahead of the curve.",
      about_value_integrity: "Integrity",
      about_value_integrity_desc: "We believe in transparency, honesty, and building trust through every interaction and deliverable.",
      about_value_collaboration: "Collaboration",
      about_value_collaboration_desc: "We work closely with our clients as partners, ensuring their vision remains at the heart of every project.",
      about_value_excellence: "Excellence",
      about_value_excellence_desc: "We strive for perfection in everything we do, never settling for good enough when great is possible.",
      about_value_efficiency: "Efficiency",
      about_value_efficiency_desc: "We value your time and resources, delivering high-quality work on schedule without compromising on quality.",
      about_value_passion: "Passion",
      about_value_passion_desc: "We genuinely love what we do, and that enthusiasm shines through in our work and client relationships.",
      about_team_title: "Meet Our Team",
      about_team_subtitle: "The talented individuals who bring your visions to life every day.",
      about_trusted: "Trusted By",
      about_trusted_subtitle: "We're proud to work with some of the world's leading brands.",

      // Services Page
      services_hero_badge: "What We Do",
      services_hero_title1: "Services Built for",
      services_hero_title2: "Bold Brands",
      services_hero_subtitle: "From strategy to ship — full-stack digital services that scale with your ambition and turn complex challenges into elegant experiences.",
      services_hero_cta1: "Explore Services",
      services_hero_cta2: "Get Custom Quote",
      services_page_title: "Our Services",
      services_page_subtitle: "Comprehensive digital solutions to help your brand thrive in the modern digital landscape.",
      services_process: "Our Process",
      services_process_subtitle: "A systematic approach that ensures quality results and client satisfaction at every stage.",
      process_discovery: "Discovery",
      process_discovery_desc: "We start by understanding your business, goals, and target audience through in-depth research and consultation.",
      process_strategy: "Strategy",
      process_strategy_desc: "We develop a comprehensive plan that outlines the approach, timeline, and deliverables for your project.",
      process_design: "Design",
      process_design_desc: "Our creative team brings your vision to life with stunning designs that align with your brand identity.",
      process_development: "Development",
      process_development_desc: "We build robust, scalable solutions using the latest technologies and best practices.",
      process_testing: "Testing",
      process_testing_desc: "Rigorous quality assurance ensures your project is pixel-perfect and functions flawlessly across all devices.",
      process_launch: "Launch & Support",
      process_launch_desc: "We deploy your project and provide ongoing support to ensure continued success.",
      services_pricing: "Pricing Plans",
      services_pricing_subtitle: "Transparent pricing structures designed to fit your budget and project requirements.",
      pricing_starter: "Starter",
      pricing_professional: "Professional",
      pricing_enterprise: "Enterprise",
      pricing_mostPopular: "Most Popular",
      pricing_perProject: "/project",
      pricing_5pages: "5 Page Website",
      pricing_10pages: "10 Page Website",
      pricing_unlimited: "Unlimited Pages",
      pricing_responsive: "Responsive Design",
      pricing_custom: "Custom Design",
      pricing_ecommerce: "E-commerce Ready",
      pricing_basicSEO: "Basic SEO Setup",
      pricing_advancedSEO: "Advanced SEO",
      pricing_fullSEO: "Full SEO Package",
      pricing_contact: "Contact Form",
      pricing_cms: "CMS Integration",
      pricing_customFeatures: "Custom Features",
      pricing_2weeks: "2 Weeks Delivery",
      pricing_email: "Email Support",
      pricing_analytics: "Analytics Setup",
      pricing_priority: "Priority Support",
      pricing_1month: "1 Month Support",
      pricing_3months: "3 Months Support",
      pricing_getStarted: "Get Started",
      pricing_contactUs: "Contact Us",
      services_faq: "Frequently Asked Questions",
      services_faq_subtitle: "Find answers to common questions about our services and process.",
      faq_duration: "How long does a typical project take?",
      faq_duration_answer: "Project timelines vary based on scope and complexity. A standard website typically takes 4-8 weeks, while more complex projects can take 3-6 months. We'll provide a detailed timeline during the discovery phase.",
      faq_packages: "What's included in your web design packages?",
      faq_packages_answer: "Our packages include custom design, responsive development, basic SEO optimization, contact forms, and post-launch support. Higher-tier packages include additional features like CMS integration, e-commerce functionality, and extended support periods.",
      faq_maintenance: "Do you offer ongoing maintenance and support?",
      faq_maintenance_answer: "Yes! We offer various maintenance plans to keep your website secure, updated, and performing optimally. Our plans include security updates, backups, performance monitoring, and content updates.",
      faq_guidelines: "Can you work with existing brand guidelines?",
      faq_guidelines_answer: "Absolutely. We can adapt our design process to work within your existing brand framework or help you develop new brand guidelines if needed. We believe in flexibility to meet your specific requirements.",
      faq_payment: "What's your payment structure?",
      faq_payment_answer: "We typically require a 50% deposit to begin work, with the remaining 50% due upon project completion. For larger projects, we can arrange milestone-based payments. We accept bank transfers, credit cards, and PayPal.",
      faq_hosting: "Do you provide hosting services?",
      faq_hosting_answer: "Yes, we offer reliable hosting solutions optimized for speed and security. We also provide domain registration services and can help you choose the best hosting plan for your specific needs.",
      services_cta: "Ready to Get Started?",
      services_cta_desc: "Let's discuss your project and create a custom solution that meets your unique needs and goals.",
      services_cta_btn: "Request a Quote",

      // Portfolio Page
      portfolio_hero_badge: "Selected Work",
      portfolio_hero_title1: "Brands We've",
      portfolio_hero_title2: "Brought to Life",
      portfolio_hero_subtitle: "250+ projects, 50+ industries, one obsession: shipping work that earns attention, drives results, and stands the test of time.",
      portfolio_hero_cta1: "View Case Studies",
      portfolio_hero_cta2: "Start Your Project",
      portfolio_tag_1: "Web Design",
      portfolio_tag_2: "Branding",
      portfolio_tag_3: "Marketing",
      portfolio_tag_4: "Development",
      portfolio_bento_1: "Projects Shipped",
      portfolio_bento_2: "Countries",
      portfolio_bento_3: "Client Retention",
      portfolio_bento_4: "Industry Awards",
      portfolio_page_title: "Our Portfolio",
      portfolio_page_subtitle: "A showcase of our finest work across web design, branding, marketing, and development.",

      // Contact Page
      contact_title: "Let's Work Together",
      contact_subtitle: "Have a project in mind? We'd love to hear about it. Send us a message and let's create something amazing.",
      contact_getInTouch: "Get in Touch",
      contact_getInTouch_desc: "We're here to help and answer any questions you might have. We look forward to hearing from you and typically respond within 24 hours.",
      contact_office: "Our Office",
      contact_phone: "Phone Number",
      contact_email: "Email Address",
      contact_hours: "Business Hours",
      contact_hours_value: "Monday – Friday: 9:00 AM – 6:00 PM PST",
      contact_sendMessage: "Send Us a Message",
      contact_firstName: "First Name",
      contact_lastName: "Last Name",
      contact_email_label: "Email Address",
      contact_phone_optional: "Phone Number (optional)",
      contact_service: "Service of Interest",
      contact_selectService: "Select a service…",
      contact_webDev: "Web Design & Development",
      contact_branding: "Branding & Identity",
      contact_digital: "Digital Marketing",
      contact_seo: "SEO Optimization",
      contact_mobile: "Mobile App Development",
      contact_uiux: "UI/UX Design",
      contact_other: "Other / Not Sure",
      contact_budget: "Project Budget",
      contact_selectBudget: "Select a range…",
      contact_under5k: "Under $5,000",
      contact_5to10k: "$5,000 – $10,000",
      contact_10to25k: "$10,000 – $25,000",
      contact_25to50k: "$25,000 – $50,000",
      contact_over50k: "$50,000+",
      contact_message: "Project Details",
      contact_message_placeholder: "Tell us about your project goals, timeline, and any specific requirements…",
      contact_send: "Send Message",
      contact_findUs: "Find Us",
      contact_findUs_desc: "We're located in the heart of San Francisco. Drop by for a coffee and a conversation.",
      contact_address: "123 Creative Street",
      contact_city: "San Francisco, CA 94102",
      contact_faq: "Frequently Asked Questions",
      contact_faq_subtitle: "Quick answers to common questions before we connect.",
      contact_faq_response: "How quickly do you respond to inquiries?",
      contact_faq_response_answer: "We respond to all inquiries within 24 business hours. For urgent matters, feel free to call us directly. Once we receive your message, we'll schedule a free discovery call to learn more about your project.",
      contact_faq_international: "Do you work with international clients?",
      contact_faq_international_answer: "Absolutely! We work with clients all around the world. We're comfortable working across time zones and use collaborative tools like Slack, Notion, and Figma to keep projects running smoothly regardless of location.",
      contact_faq_quote: "What information do you need to provide a quote?",
      contact_faq_quote_answer: "The more detail you can provide, the more accurate our estimate will be. Helpful details include: your goals, target audience, preferred timeline, budget range, and any examples of work you admire. Don't worry if you don't have all of this — we'll guide you through it.",
      contact_faq_onboarding: "What does your onboarding process look like?",
      contact_faq_onboarding_answer: "After our initial call, we'll prepare a custom proposal outlining scope, timeline, and investment. Once approved, we kick off with a detailed discovery session to align on goals and strategy. From there, we begin the creative process with regular check-ins throughout.",
      contact_faq_payment: "Do you offer payment plans?",
      contact_faq_payment_answer: "Yes! We typically structure payments as 50% upfront and 50% upon completion. For larger projects, we're happy to arrange milestone-based payment schedules to make the investment more manageable.",

      // Blog Page
      blog_hero_category: "Featured",
      blog_hero_title: 'Ideas Worth <span class="title-gradient">Reading</span>',
      blog_hero_subtitle: "Honest, in-depth essays on design, engineering, and the business of building digital products. No fluff. No clickbait.",
      blog_featured_badge: "Editor's Pick",
      blog_featured_title: "The Future of Design Systems: Where Component Libraries Are Heading in 2026",
      blog_featured_excerpt: "Component libraries have evolved far beyond simple UI kits. We break down the trends shaping the next generation of design systems — and what it means for your team.",
      blog_tag_design: "Design",
      blog_tag_branding: "Branding",
      blog_tag_marketing: "Marketing",
      blog_tag_seo: "SEO",
      blog_tag_development: "Development",
      blog_author_role: "Creative Director",
      blog_trending_title: "Trending",
      blog_trending_1: "AI in UX Research",
      blog_trending_2: "Headless Commerce",
      blog_trending_3: "Brand Storytelling",
      blog_newsletter_title: "Get Weekly Insights",
      blog_newsletter_text: "Join 5,000+ designers and developers who read our newsletter.",
      blog_newsletter_btn: "Subscribe Free",
      blog_title: "Our Blog",
      blog_subtitle: "Insights, strategies, and inspiration for the modern digital landscape.",
      blog_latest: "Latest Articles",
      blog_latest_subtitle: "Stay informed with our latest thinking on design, development, and digital strategy.",
      blog_readArticle: "Read Article",
      blog_readMore: "Read More",
      blog_stayLoop: "Stay in the Loop",
      blog_stayLoop_desc: "Get our latest insights delivered straight to your inbox. No spam — just thoughtful content, once a week.",
      blog_enterEmail: "Enter your email address",
      blog_subscribe: "Subscribe",
      blog_subscribed: "Subscribed! ✓",
      blog_minRead: "min read",

      // Footer
      footer_about: "We're a passionate team of designers, developers, and strategists dedicated to creating exceptional digital experiences that drive results.",
      footer_quickLinks: "Quick Links",
      footer_services: "Services",
      footer_contactInfo: "Contact Info",
      footer_address: "123 Creative Street",
      footer_address2: "San Francisco, CA 94102",
      footer_copyright: "Creative Digital Agency. All rights reserved.",
      footer_home: "Home",
      footer_aboutUs: "About Us",

      // Services List (for footer and services)
      service_webDesign_title: "Web Design",
      service_branding_title: "Branding",
      service_marketing_title: "Marketing",
      service_seo_title: "SEO",
      service_mobileApps_title: "Mobile Apps",
      service_uiux_title: "UI/UX",

      // Forms
      form_success: "Message sent! We'll be in touch within 24 hours.",
      form_error: "Please fill in all required fields.",
      newsletter_success: "Thank you for subscribing!",
      newsletter_error: "Please enter a valid email address.",

      // Accessibility
      scroll_top: "Scroll to top",
      toggle_dark_mode: "Toggle dark mode",
      close_menu: "Close menu",
      open_menu: "Open menu",
    },

    ar: {
      // Navigation
      nav_home: "الرئيسية",
      nav_about: "من نحن",
      nav_services: "خدماتنا",
      nav_portfolio: "أعمالنا",
      nav_blog: "المدونة",
      nav_contact: "تواصل معنا",
      nav_getStarted: "ابدأ الآن",

      // Hero Section (index.html)
      hero_title_part1: "تجارب رقمية ",
      hero_title_highlight: "تُحوّل",
      hero_title_part2: " العلامات التجارية",
      hero_description: "نصمم حلولاً رقمية مبتكرة تجذب الجماهير وتعزز التفاعل وتدفع النمو. لنحوّل رؤيتك إلى واقع.",
      hero_btn_project: "ابدأ مشروعك",
      hero_btn_viewWork: "شاهد أعمالنا",

      // Index services
      services_title: "خدماتنا",
      services_subtitle: "نقدم حلولاً رقمية شاملة لمساعدة علامتك التجارية على الازدهار في المشهد الرقمي الحديث.",
      service_webDesign: "تصميم المواقع",
      service_webDesign_desc: "مواقع جميلة ومتجاوبة تجذب الزوار وتحولهم إلى عملاء.",
      service_branding: "هوية بصرية",
      service_branding_desc: "هوية علامة تجارية استراتيجية تنقل قيمك وتتواصل مع جمهورك.",
      service_marketing: "التسويق الرقمي",
      service_marketing_desc: "حملات مبنية على البيانات تزيد الظهور وتدفع الزيارات وتعزز التحويلات.",
      service_seo: "تحسين محركات البحث",
      service_seo_desc: "تحسين استراتيجي لمحركات البحث يحسّن ترتيبك ويجلب زيارات عضوية.",
      service_mobileApps: "تطبيقات الجوال",
      service_mobileApps_desc: "تطبيقات جوال أصلية ومتعددة المنصات تقدم تجارب استخدام استثنائية.",
      service_uiux: "تصميم UI/UX",
      service_uiux_desc: "تصميم يركز على المستخدم ليقدم تجارب رقمية بديهية وجذابة.",
      service_content: "استراتيجية المحتوى",
      service_content_desc: "محتوى مقنع يروي قصتك ويربطك بجمهورك.",
      service_social: "وسائل التواصل",
      service_social_desc: "إدارة استراتيجية لوسائل التواصل تبني مجتمعات وتعزز التفاعل.",
      service_learnMore: "اعرف المزيد",

      // Portfolio
      portfolio_title: "أعمالنا",
      portfolio_subtitle: "استكشف أحدث مشاريعنا وشاهد كيف ساعدنا العلامات التجارية على تحقيق أهدافها الرقمية.",
      portfolio_viewAll: "عرض كل المشاريع",
      portfolio_filter_all: "الكل",
      portfolio_filter_webDesign: "تصميم مواقع",
      portfolio_filter_branding: "هوية بصرية",
      portfolio_filter_marketing: "تسويق",
      portfolio_filter_development: "تطوير",
      portfolio_loadMore: "تحميل المزيد",
      portfolio_view_project: "عرض المشروع",

      // Testimonials
      testimonials_title: "ماذا يقول عملاؤنا",
      testimonials_subtitle: "لا تأخذ كلمتنا فقط. إليك ما يقوله عملاؤنا عن العمل معنا.",

      // Team
      team_title: "تعرف على فريقنا",
      team_subtitle: "مبدعون متحمسون واستراتيجيون ومطورون يعملون معاً لتحويل رؤيتك إلى واقع.",

      // Stats
      stats_projects: "مشروع مكتمل",
      stats_clients: "عميل سعيد",
      stats_team: "عضو فريق",
      stats_experience: "سنوات خبرة",

      // CTA
      cta_project: "هل أنت مستعد لبدء مشروعك؟",
      cta_project_desc: "لنعمل معاً على إنشاء شيء رائع. تواصل معنا ولنتناقش فكرتك الكبيرة القادمة.",
      cta_project_btn: "تواصل معنا",
      cta_team: "هل تريد الانضمام إلى فريقنا؟",
      cta_team_desc: "نبحث دائماً عن أفراد موهوبين يشاركوننا شغفنا بصنع تجارب رقمية استثنائية.",
      cta_team_btn: "عرض الوظائف المتاحة",
      cta_project_mind: "هل لديك مشروع في ذهنك؟",
      cta_project_mind_desc: "لنتعاون ونصنع شيئاً استثنائياً معاً. رؤيتك + خبرتنا = نجاح.",
      cta_transform: "هل أنت مستعد لتحويل حضورك الرقمي؟",
      cta_transform_desc: "لنناقش مشروعك ونضع استراتيجية مخصصة تحقق نتائج حقيقية.",

      // About Page
      about_hero_badge: "من نحن",
      about_hero_title1: "نصنع قصصاً رقمية",
      about_hero_title2: "تأسر القلوب",
      about_hero_subtitle: "عقد من الزمن نحوّل الأفكار الجريئة إلى نتائج قابلة للقياس. نحن فريق من 50+ مصمماً ومهندساً وراوي قصة نبني بهم مستقبل العلامات التجارية الرقمية.",
      about_hero_cta1: "ابدأ محادثة",
      about_hero_cta2: "اقرأ قصتنا",
      about_stat_years: "سنوات من التأثير",
      about_stat_team: "عضو في الفريق",
      about_stat_projects: "مشروع منجز",
      about_title: "من نحن",
      about_subtitle: "نحن شغوفون بصنع تجارب رقمية تلهم وتُشرك وتحقق النتائج.",
      about_story: "قصتنا",
      about_story_p1: "تأسست Creative Digital Agency في عام 2014 بمهمة بسيطة: مساعدة الشركات على الازدهار في العصر الرقمي. ما بدأ كفريق صغير من ثلاثة مصممين شغوفين نما ليصبح وكالة رقمية متكاملة الخدمات تضم أكثر من 50 عميلاً حول العالم.",
      about_story_p2: "آمنّا دائماً أن التصميم الرائع لا يتعلق فقط بالجماليات — بل بحل المشكلات وسرد القصص وبناء علاقات ذات معنى بين العلامات التجارية وجمهورها.",
      about_story_p3: "اليوم، نجمع بين التفكير الاستراتيجي والتنفيذ الإبداعي لتقديم تجارب رقمية لا تبدو جميلة فحسب، بل تحقق أيضاً نتائج أعمال حقيقية. من الشركات الناشئة إلى شركات Fortune 500، ساعدنا مؤسسات في مختلف الصناعات على تحويل حضورها الرقمي.",
      about_workWithUs: "اعمل معنا",
      about_mission: "مهمتنا وقيمنا",
      about_mission_subtitle: "المبادئ التي توجه كل ما نفعله وكل قرار نتخذه.",
      about_value_innovation: "الابتكار",
      about_value_innovation_desc: "ندفع الحدود ونتحدى الأعراف لتقديم حلول متطورة تبقى عملاءنا في المقدمة.",
      about_value_integrity: "النزاهة",
      about_value_integrity_desc: "نؤمن بالشفافية والأمانة وبناء الثقة من خلال كل تفاعل وكل ما نسلّمه.",
      about_value_collaboration: "التعاون",
      about_value_collaboration_desc: "نعمل عن كثب مع عملائنا كشركاء، لضمان أن تبقى رؤيتهم في قلب كل مشروع.",
      about_value_excellence: "التميز",
      about_value_excellence_desc: "نسعى للكمال في كل ما نفعله، ولا نقبل بالجيد عندما يكون العظيم ممكناً.",
      about_value_efficiency: "الكفاءة",
      about_value_efficiency_desc: "نقدّر وقتك ومواردك، ونقدم عملاً عالي الجودة في الوقت المحدد دون التنازل عن الجودة.",
      about_value_passion: "الشغف",
      about_value_passion_desc: "نحب فعلاً ما نفعله، وهذا الحماس يظهر في عملنا وعلاقاتنا مع عملائنا.",
      about_team_title: "تعرف على فريقنا",
      about_team_subtitle: "الأفراد الموهوبون الذين يحولون رؤى عملائنا إلى واقع كل يوم.",
      about_trusted: "يثق بنا",
      about_trusted_subtitle: "نفتخر بالعمل مع بعض أكبر العلامات التجارية في العالم.",

      // Services Page
      services_hero_badge: "ماذا نفعل",
      services_hero_title1: "خدمات مبنية لـ",
      services_hero_title2: "علامات جريئة",
      services_hero_subtitle: "من الاستراتيجية إلى الإطلاق — خدمات رقمية متكاملة تنمو مع طموحك وتحوّل التحديات المعقدة إلى تجارب أنيقة.",
      services_hero_cta1: "استكشف الخدمات",
      services_hero_cta2: "احصل على عرض سعر",
      services_page_title: "خدماتنا",
      services_page_subtitle: "حلول رقمية شاملة لمساعدة علامتك التجارية على الازدهار في المشهد الرقمي الحديث.",
      services_process: "عمليتنا",
      services_process_subtitle: "منهج منظم يضمن جودة النتائج ورضا العميل في كل مرحلة.",
      process_discovery: "الاكتشاف",
      process_discovery_desc: "نبدأ بفهم عملك وأهدافك وجمهورك المستهدف من خلال بحث واستشارة معمقة.",
      process_strategy: "الاستراتيجية",
      process_strategy_desc: "نطور خطة شاملة توضح النهج والجدول الزمني والمخرجات لمشروعك.",
      process_design: "التصميم",
      process_design_desc: "فريقنا الإبداعي يحول رؤيتك إلى واقع بتصاميم مذهلة تتماشى مع هوية علامتك التجارية.",
      process_development: "التطوير",
      process_development_desc: "نبني حلولاً قوية وقابلة للتوسع باستخدام أحدث التقنيات وأفضل الممارسات.",
      process_testing: "الاختبار",
      process_testing_desc: "ضمان جودة صارم يضمن أن مشروعك مثالي ويعمل بسلاسة عبر جميع الأجهزة.",
      process_launch: "الإطلاق والدعم",
      process_launch_desc: "ننشر مشروعك ونقدم دعماً مستمراً لضمان نجاحه المتواصل.",
      services_pricing: "خطط الأسعار",
      services_pricing_subtitle: "هياكل أسعار شفافة مصممة لتناسب ميزانيتك ومتطلبات مشروعك.",
      pricing_starter: "الأساسية",
      pricing_professional: "الاحترافية",
      pricing_enterprise: "للمؤسسات",
      pricing_mostPopular: "الأكثر شعبية",
      pricing_perProject: "/مشروع",
      pricing_5pages: "موقع 5 صفحات",
      pricing_10pages: "موقع 10 صفحات",
      pricing_unlimited: "صفحات غير محدودة",
      pricing_responsive: "تصميم متجاوب",
      pricing_custom: "تصميم مخصص",
      pricing_ecommerce: "جاهز للتجارة الإلكترونية",
      pricing_basicSEO: "إعداد SEO أساسي",
      pricing_advancedSEO: "SEO متقدم",
      pricing_fullSEO: "حزمة SEO كاملة",
      pricing_contact: "نموذج تواصل",
      pricing_cms: "تكامل CMS",
      pricing_customFeatures: "ميزات مخصصة",
      pricing_2weeks: "تسليم خلال أسبوعين",
      pricing_email: "دعم بالبريد الإلكتروني",
      pricing_analytics: "إعداد التحليلات",
      pricing_priority: "دعم ذو أولوية",
      pricing_1month: "دعم لمدة شهر",
      pricing_3months: "دعم لمدة 3 أشهر",
      pricing_getStarted: "ابدأ الآن",
      pricing_contactUs: "تواصل معنا",
      services_faq: "الأسئلة الشائعة",
      services_faq_subtitle: "إجابات على الأسئلة الشائعة حول خدماتنا وعمليتنا.",
      faq_duration: "كم يستغرق المشروع النموذجي؟",
      faq_duration_answer: "تختلف الجداول الزمنية للمشاريع حسب النطاق والتعقيد. يستغرق الموقع القياسي عادةً 4-8 أسابيع، بينما قد تستغرق المشاريع الأكثر تعقيداً 3-6 أشهر. سنقدم جدولاً زمنياً مفصلاً خلال مرحلة الاكتشاف.",
      faq_packages: "ماذا تتضمن حزم تصميم المواقع لديكم؟",
      faq_packages_answer: "تتضمن حزمنا تصميم مخصص وتطوير متجاوب وتحسين SEO أساسي ونماذج تواصل ودعم ما بعد الإطلاق. تتضمن الحزم الأعلى ميزات إضافية مثل تكامل CMS ووظائف التجارة الإلكترونية وفترات دعم ممتدة.",
      faq_maintenance: "هل تقدمون صيانة ودعم مستمر؟",
      faq_maintenance_answer: "نعم! نقدم خطط صيانة متنوعة للحفاظ على أمان موقعك وتحديثه وأدائه الأمثل. تتضمن خططنا تحديثات الأمان والنسخ الاحتياطي ومراقبة الأداء وتحديثات المحتوى.",
      faq_guidelines: "هل يمكنكم العمل مع إرشادات علامة تجارية موجودة؟",
      faq_guidelines_answer: "بالتأكيد. يمكننا تكييف عملية التصميم لدينا للعمل ضمن إطار علامتك التجارية الحالية أو مساعدتك في تطوير إرشادات علامة تجارية جديدة إذا لزم الأمر. نؤمن بالمرونة لتلبية متطلباتك المحددة.",
      faq_payment: "ما هيكل الدفع لديكم؟",
      faq_payment_answer: "نطلب عادةً 50% كعربون لبدء العمل، مع الـ 50% المتبقية عند اكتمال المشروع. للمشاريع الأكبر، يمكننا ترتيب مدفوعات مرحلية. نقبل التحويلات البنكية وبطاقات الائتمان وPayPal.",
      faq_hosting: "هل تقدمون خدمات الاستضافة؟",
      faq_hosting_answer: "نعم، نقدم حلول استضافة موثوقة محسّنة للسرعة والأمان. نقدم أيضاً خدمات تسجيل النطاقات ويمكننا مساعدتك في اختيار أفضل خطة استضافة لاحتياجاتك الخاصة.",
      services_cta: "هل أنت مستعد للبدء؟",
      services_cta_desc: "لنناقش مشروعك ونصنع حلاً مخصصاً يلبي احتياجاتك وأهدافك الفريدة.",
      services_cta_btn: "اطلب عرض سعر",

      // Portfolio Page
      portfolio_hero_badge: "أعمال مختارة",
      portfolio_hero_title1: "علامات تجارية",
      portfolio_hero_title2: "أحيونا رؤيتها",
      portfolio_hero_subtitle: "أكثر من 250 مشروع و50+ صناعة — هوس واحد: تقديم عمل يستحق الاهتمام ويحقق النتائج ويصمد أمام الزمن.",
      portfolio_hero_cta1: "استعرض المشاريع",
      portfolio_hero_cta2: "ابدأ مشروعك",
      portfolio_tag_1: "تصميم مواقع",
      portfolio_tag_2: "هوية بصرية",
      portfolio_tag_3: "تسويق",
      portfolio_tag_4: "تطوير",
      portfolio_bento_1: "مشروع منجز",
      portfolio_bento_2: "دولة",
      portfolio_bento_3: "احتفاظ بالعملاء",
      portfolio_bento_4: "جائزة صناعية",
      portfolio_page_title: "أعمالنا",
      portfolio_page_subtitle: "عرض لأفضل أعمالنا في تصميم المواقع والهوية البصرية والتسويق والتطوير.",

      // Contact Page
      contact_title: "لنعمل معاً",
      contact_subtitle: "هل لديك مشروع في ذهنك؟ نحب أن نسمع عنه. أرسل لنا رسالة ولنصنع شيئاً مذهلاً.",
      contact_getInTouch: "تواصل معنا",
      contact_getInTouch_desc: "نحن هنا للمساعدة والإجابة على أي أسئلة قد تكون لديك. نتطلع لسماع منك ونرد عادةً خلال 24 ساعة.",
      contact_office: "مكتبنا",
      contact_phone: "رقم الهاتف",
      contact_email: "البريد الإلكتروني",
      contact_hours: "ساعات العمل",
      contact_hours_value: "الإثنين – الجمعة: 9:00 صباحاً – 6:00 مساءً بتوقيت المحيط الهادئ",
      contact_sendMessage: "أرسل لنا رسالة",
      contact_firstName: "الاسم الأول",
      contact_lastName: "اسم العائلة",
      contact_email_label: "البريد الإلكتروني",
      contact_phone_optional: "رقم الهاتف (اختياري)",
      contact_service: "الخدمة المطلوبة",
      contact_selectService: "اختر خدمة…",
      contact_webDev: "تصميم وتطوير المواقع",
      contact_branding: "هوية بصرية وتمييز",
      contact_digital: "تسويق رقمي",
      contact_seo: "تحسين محركات البحث",
      contact_mobile: "تطوير تطبيقات الجوال",
      contact_uiux: "تصميم UI/UX",
      contact_other: "أخرى / غير متأكد",
      contact_budget: "ميزانية المشروع",
      contact_selectBudget: "اختر نطاقاً…",
      contact_under5k: "أقل من $5,000",
      contact_5to10k: "$5,000 – $10,000",
      contact_10to25k: "$10,000 – $25,000",
      contact_25to50k: "$25,000 – $50,000",
      contact_over50k: "$50,000+",
      contact_message: "تفاصيل المشروع",
      contact_message_placeholder: "أخبرنا عن أهداف مشروعك والجدول الزمني وأي متطلبات محددة…",
      contact_send: "إرسال الرسالة",
      contact_findUs: "موقعنا",
      contact_findUs_desc: "نتواجد في قلب سان فرانسيسكو. تفضل بزيارتنا لتناول قهوة ومحادثة.",
      contact_address: "123 شارع الإبداع",
      contact_city: "سان فرانسيسكو، كاليفورنيا 94102",
      contact_faq: "الأسئلة الشائعة",
      contact_faq_subtitle: "إجابات سريعة على الأسئلة الشائعة قبل أن نتواصل.",
      contact_faq_response: "كم تستغرقون للرد على الاستفسارات؟",
      contact_faq_response_answer: "نرد على جميع الاستفسارات خلال 24 ساعة عمل. للأمور العاجلة، لا تتردد في الاتصال بنا مباشرة. بمجرد استلام رسالتك، سنحدد مكالمة اكتشاف مجانية لمعرفة المزيد عن مشروعك.",
      contact_faq_international: "هل تعملون مع عملاء دوليين؟",
      contact_faq_international_answer: "بالتأكيد! نعمل مع عملاء من جميع أنحاء العالم. نرتاح للعمل عبر المناطق الزمنية ونستخدم أدوات تعاونية مثل Slack وNotion وFigma للحفاظ على سلاسة المشاريع بغض النظر عن الموقع.",
      contact_faq_quote: "ما المعلومات التي تحتاجونها لتقديم عرض سعر؟",
      contact_faq_quote_answer: "كلما زودتنا بمزيد من التفاصيل، أصبح تقديرنا أكثر دقة. التفاصيل المفيدة تشمل: أهدافك وجمهورك المستهدف والجدول الزمني المفضل ونطاق الميزانية وأي أمثلة على الأعمال التي تعجبك. لا تقلق إذا لم يكن لديك كل هذا — سنرشدك خلاله.",
      contact_faq_onboarding: "كيف تبدو عملية الانضمام لديكم؟",
      contact_faq_onboarding_answer: "بعد مكالمتنا الأولية، سنعد عرضاً مخصصاً يوضح النطاق والجدول الزمني والاستثمار. بمجرد الموافقة، نبدأ بجلسة اكتشاف مفصلة لمحاذاة الأهداف والاستراتيجية. من هناك، نبدأ العملية الإبداعية مع نقاط تفتيش منتظمة طوال المشروع.",
      contact_faq_payment: "هل تقدمون خطط دفع؟",
      contact_faq_payment_answer: "نعم! نرتب المدفوعات عادةً كـ 50% مقدم و50% عند الاكتمال. للمشاريع الأكبر، يسعدنا ترتيب جداول مدفوعات مرحلية لجعل الاستثمار أكثر سهولة.",

      // Blog Page
      blog_hero_category: "مميز",
      blog_hero_title: 'أفكار تستحق <span class="title-gradient">القراءة</span>',
      blog_hero_subtitle: "مقالات صادقة ومعمّقة عن التصميم والهندسة وأعمال بناء المنتجات الرقمية. بلا حشو. بلا عناوين خادعة.",
      blog_featured_badge: "اختيار المحرر",
      blog_featured_title: "مستقبل أنظمة التصميم: إلى أين تتجه مكتبات المكونات في 2026",
      blog_featured_excerpt: "تطورت مكتبات المكونات إلى ما هو أبعد من مجرد مجموعات UI. نحلل الاتجاهات التي تشكل الجيل القادم من أنظمة التصميم — وما تعنيه لفريقك.",
      blog_tag_design: "تصميم",
      blog_tag_branding: "هوية بصرية",
      blog_tag_marketing: "تسويق",
      blog_tag_seo: "SEO",
      blog_tag_development: "تطوير",
      blog_author_role: "المدير الإبداعي",
      blog_trending_title: "الأكثر قراءة",
      blog_trending_1: "الذكاء الاصطناعي في أبحاث UX",
      blog_trending_2: "التجارة بدون واجهة",
      blog_trending_3: "سرد قصة العلامة التجارية",
      blog_newsletter_title: "احصل على رؤى أسبوعية",
      blog_newsletter_text: "انضم إلى أكثر من 5,000 مصمم ومطور يقرؤون نشرتنا الإخبارية.",
      blog_newsletter_btn: "اشترك مجاناً",
      blog_title: "مدونتنا",
      blog_subtitle: "رؤى واستراتيجيات وإلهام للمشهد الرقمي الحديث.",
      blog_latest: "أحدث المقالات",
      blog_latest_subtitle: "ابق على اطلاع بأحدث أفكارنا في التصميم والتطوير والاستراتيجية الرقمية.",
      blog_readArticle: "اقرأ المقال",
      blog_readMore: "اقرأ المزيد",
      blog_stayLoop: "ابق على اطلاع",
      blog_stayLoop_desc: "احصل على أحدث رؤانا مباشرة في بريدك. بدون مزعجات — فقط محتوى مدروس، مرة في الأسبوع.",
      blog_enterEmail: "أدخل بريدك الإلكتروني",
      blog_subscribe: "اشترك",
      blog_subscribed: "تم الاشتراك! ✓",
      blog_minRead: "دقائق قراءة",

      // Footer
      footer_about: "نحن فريق شغوف من المصممين والمطورين والاستراتيجيين ملتزمون بصنع تجارب رقمية استثنائية تحقق النتائج.",
      footer_quickLinks: "روابط سريعة",
      footer_services: "الخدمات",
      footer_contactInfo: "معلومات التواصل",
      footer_address: "123 شارع الإبداع",
      footer_address2: "سان فرانسيسكو، كاليفورنيا 94102",
      footer_copyright: "Creative Digital Agency. جميع الحقوق محفوظة.",
      footer_home: "الرئيسية",
      footer_aboutUs: "من نحن",

      // Services List (for footer and services)
      service_webDesign_title: "تصميم المواقع",
      service_branding_title: "هوية بصرية",
      service_marketing_title: "تسويق",
      service_seo_title: "SEO",
      service_mobileApps_title: "تطبيقات الجوال",
      service_uiux_title: "UI/UX",

      // Forms
      form_success: "تم الإرسال! سنتواصل معك خلال 24 ساعة.",
      form_error: "يرجى ملء جميع الحقول المطلوبة.",
      newsletter_success: "شكراً لاشتراكك!",
      newsletter_error: "يرجى إدخال بريد إلكتروني صحيح.",

      // Accessibility
      scroll_top: "التمرير للأعلى",
      toggle_dark_mode: "تبديل الوضع الداكن",
      close_menu: "إغلاق القائمة",
      open_menu: "فتح القائمة",
    },
  };

  // -------- Core functions --------
  function applyTranslations(lang) {
    if (!translations[lang]) return;

    // data-lang (text content)
    const langNodes = document.querySelectorAll("[data-lang]");
    for (let i = 0; i < langNodes.length; i++) {
      const el = langNodes[i];
      const key = el.getAttribute("data-lang");
      const value = translations[lang][key];
      if (value === undefined) continue;
      if (/<[a-z][\s\S]*>/i.test(value)) {
        el.innerHTML = value;
      } else {
        el.textContent = value;
      }
    }

    // data-lang-placeholder
    const placeholderNodes = document.querySelectorAll("[data-lang-placeholder]");
    for (let i = 0; i < placeholderNodes.length; i++) {
      const el = placeholderNodes[i];
      const key = el.getAttribute("data-lang-placeholder");
      const value = translations[lang][key];
      if (value !== undefined) el.setAttribute("placeholder", value);
    }

    // data-lang-aria
    const ariaNodes = document.querySelectorAll("[data-lang-aria]");
    for (let i = 0; i < ariaNodes.length; i++) {
      const el = ariaNodes[i];
      const key = el.getAttribute("data-lang-aria");
      const value = translations[lang][key];
      if (value !== undefined) el.setAttribute("aria-label", value);
    }

    // data-lang-title (for <option> elements etc.)
    const titleNodes = document.querySelectorAll("[data-lang-title]");
    for (let i = 0; i < titleNodes.length; i++) {
      const el = titleNodes[i];
      const key = el.getAttribute("data-lang-title");
      const value = translations[lang][key];
      if (value !== undefined) el.setAttribute("title", value);
    }

    // Direction + lang
    document.documentElement.setAttribute("lang", lang);
    document.documentElement.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");

    // Save
    try {
      localStorage.setItem("selectedLanguage", lang);
    } catch (e) {
      /* localStorage may be blocked */
    }
  }

  function getCurrentLanguage() {
    try {
      return localStorage.getItem("selectedLanguage") || "en";
    } catch (e) {
      return "en";
    }
  }

  function setLanguage(lang) {
    applyTranslations(lang);
    // Update all language toggle buttons on the page (desktop + mobile drawer)
    const btns = document.querySelectorAll("[data-language-toggle], #language-toggle");
    for (let i = 0; i < btns.length; i++) {
      btns[i].textContent = lang === "en" ? "EN" : "AR";
    }
  }

  function toggleLanguage() {
    const next = getCurrentLanguage() === "en" ? "ar" : "en";
    setLanguage(next);
  }

  function bindToggleButtons() {
    const btns = document.querySelectorAll("[data-language-toggle], #language-toggle");
    for (let i = 0; i < btns.length; i++) {
      // Avoid double binding
      if (btns[i].__langBound) continue;
      btns[i].__langBound = true;
      btns[i].addEventListener("click", function (e) {
        e.preventDefault();
        toggleLanguage();
      });
    }
  }

  function init() {
    bindToggleButtons();
    const lang = getCurrentLanguage();
    if (lang === "ar") {
      setLanguage("ar");
    } else {
      // Even when EN, sync button label
      const btns = document.querySelectorAll("[data-language-toggle], #language-toggle");
      for (let i = 0; i < btns.length; i++) {
        btns[i].textContent = "EN";
      }
    }
  }

  // Run on DOM ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    // DOM already ready
    init();
  }

  // Expose for debugging / external triggers
  global.i18n = {
    setLanguage: setLanguage,
    toggle: toggleLanguage,
    current: getCurrentLanguage,
  };
})(window);
