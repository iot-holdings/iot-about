// IoT Holdings Technologies LLC - Site Configuration
// Edit these values to customize your site content

const siteConfig = {
    // Company Information
    company: {
        name: "IoT Holdings Technologies LLC",
        tagline: "Innovating the future of connected technology",
        description: "IoT Holdings Technologies LLC provides cutting-edge IoT solutions for businesses. Connect with us for innovative technology solutions."
    },

    // Contact Information
    contact: {
        email: "info@iotholdings.com",
        phone: "+1 (555) 123-4567",
        address: "Innovation District, Tech City",
        social: {
            linkedin: "#",
            twitter: "#",
            github: "#"
        }
    },

    // Hero Section
    hero: {
        title: "Innovative IoT Solutions",
        subtitle: "for the Connected World",
        description: "IoT Holdings Technologies LLC delivers cutting-edge Internet of Things solutions that transform businesses and drive digital innovation.",
        primaryButton: "Get Started",
        secondaryButton: "Learn More"
    },

    // About Section
    about: {
        title: "About IoT Holdings",
        subtitle: "Pioneering the future of connected technology",
        heading: "Your Trusted IoT Partner",
        description: "At IoT Holdings Technologies LLC, we specialize in developing and implementing comprehensive IoT solutions that help businesses thrive in the digital age. Our expertise spans from sensor networks to cloud platforms, enabling real-time data collection, analysis, and actionable insights.",
        stats: [
            { number: "100+", label: "Projects Completed" },
            { number: "50+", label: "Happy Clients" },
            { number: "24/7", label: "Support" }
        ],
        features: [
            { icon: "fas fa-robot", text: "Smart Automation" },
            { icon: "fas fa-chart-line", text: "Data Analytics" },
            { icon: "fas fa-shield-alt", text: "Security First" },
            { icon: "fas fa-bolt", text: "Real-time Processing" }
        ]
    },

    // Services Section
    services: {
        title: "Our Services",
        subtitle: "Comprehensive IoT solutions tailored to your needs",
        items: [
            {
                icon: "fas fa-cogs",
                title: "IoT Platform Development",
                description: "Custom IoT platforms designed to handle your specific use cases, from data collection to advanced analytics."
            },
            {
                icon: "fas fa-network-wired",
                title: "Sensor Networks",
                description: "Deploy and manage comprehensive sensor networks for environmental monitoring, asset tracking, and more."
            },
            {
                icon: "fas fa-cloud",
                title: "Cloud Integration",
                description: "Seamless cloud integration services ensuring your IoT data is secure, scalable, and accessible."
            },
            {
                icon: "fas fa-mobile-alt",
                title: "Mobile Applications",
                description: "Cross-platform mobile apps that provide real-time access to your IoT systems and data."
            },
            {
                icon: "fas fa-chart-bar",
                title: "Data Analytics",
                description: "Advanced analytics and machine learning solutions to extract meaningful insights from your IoT data."
            },
            {
                icon: "fas fa-tools",
                title: "Consulting & Support",
                description: "Expert consulting services and ongoing support to ensure your IoT initiatives succeed."
            }
        ]
    },

    // Contact Section
    contactSection: {
        title: "Get In Touch",
        subtitle: "Ready to transform your business with IoT? Let's discuss your project.",
        heading: "Let's Start a Conversation",
        description: "Whether you're looking to implement IoT solutions, need consulting services, or want to explore new possibilities, we're here to help.",
        formServices: [
            "IoT Platform Development",
            "Sensor Networks",
            "Cloud Integration",
            "Mobile Applications",
            "Data Analytics",
            "Consulting & Support",
            "Other"
        ]
    },

    // Footer
    footer: {
        copyright: "© 2024 IoT Holdings Technologies LLC. All rights reserved.",
        links: {
            services: [
                "IoT Platform Development",
                "Sensor Networks",
                "Cloud Integration",
                "Consulting"
            ],
            company: [
                "About Us",
                "Contact",
                "Privacy Policy",
                "Terms of Service"
            ]
        }
    },

    // Colors (optional - for advanced customization)
    colors: {
        primary: "#2563eb",
        secondary: "#3b82f6",
        accent: "#ffd700",
        dark: "#1f2937",
        light: "#6b7280",
        background: "#f8fafc"
    },

    // Form Configuration
    form: {
        // Set to true to enable form submission to a service
        enabled: false,
        // Service options: 'formspree', 'netlify', 'emailjs', 'custom'
        service: 'formspree',
        // Formspree form ID (if using Formspree)
        formspreeId: 'YOUR_FORM_ID',
        // EmailJS configuration (if using EmailJS)
        emailjs: {
            serviceId: 'YOUR_SERVICE_ID',
            templateId: 'YOUR_TEMPLATE_ID',
            userId: 'YOUR_USER_ID'
        }
    }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = siteConfig;
}
