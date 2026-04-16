    import { IProject } from '@/types';

    export const GENERAL_INFO = {
        email: 'namanharbola3@gmail.com',

        emailSubject: "Let's collaborate on a project",
        emailBody: 'Hi Naman, I am reaching out to you because...',

        oldPortfolio: 'https://portfolio-swart-eight-80.vercel.app/',
        upworkProfile: "https://wa.me/918178946367?text=Hi%20Naman,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20chat%20about%20a%20project!",
    };

    export const SOCIAL_LINKS = [
        { name: 'github', url: 'https://github.com/NamanHarbola' },
        { name: 'linkedin', url: 'https://www.linkedin.com/in/naman-harbola-3106a6322/' },
        { name: 'Instagram', url: 'https://www.instagram.com/naman_harbola3/' },
        { name: 'Old Version', url: GENERAL_INFO.oldPortfolio },
    ];

    export const MY_STACK = {
        frontend: [
            {
                name: 'JavaScript',
                icon: '/logo/js.png',
            },
            {
                name: 'TypeScript',
                icon: '/logo/ts.png',
            },
            {
                name: 'React',
                icon: '/logo/react.png',
            },
            {
                name: 'Next.js',
                icon: '/logo/next.png',
            },
            {
                name: 'Angular',
                icon: '/logo/angular.jpg',
            },
            {
                name: 'Redux',
                icon: '/logo/redux.png',
            },
            {
                name: 'Tailwind CSS',
                icon: '/logo/tailwind.png',
            },
            {
                name: 'GSAP',
                icon: '/logo/gsap.png',
            },
            {
                name: 'Framer Motion',
                icon: '/logo/framer-motion.png',
            },
            {
                name: 'Sass',
                icon: '/logo/sass.png',
            },
            {
                name: 'Bootstrap',
                icon: '/logo/bootstrap.svg',
            },
        ],
        backend: [
            {
                name: 'Node.js',
                icon: '/logo/node.png',
            },
            {
                name: 'NestJS',
                icon: '/logo/nest.svg',
            },
            {
                name: 'Express.js',
                icon: '/logo/express.png',
            },
            {
                name: 'Python',
                icon: '/logo/python.png',
            },
            {
                name: 'C++',
                icon: '/logo/cpp.png',
            },
            {
                name: 'Apex',
                icon: '/logo/apex.png',
            },
        ],
        database: [
            {
                name: 'MySQL',
                icon: '/logo/mysql.svg',
            },
            {
                name: 'PostgreSQL',
                icon: '/logo/postgreSQL.png',
            },
            {
                name: 'MongoDB',
                icon: '/logo/mongodb.svg',
            },
            {
                name: 'Prisma',
                icon: '/logo/prisma.png',
            },
        ],
        tools: [
            {
                name: 'Git',
                icon: '/logo/git.png',
            },
            {
                name: 'GitHub',
                icon: '/logo/github.png',
            },
            {
                name: 'Figma',
                icon: '/logo/figma.png',
            },
            {
                name: 'Docker',
                icon: '/logo/docker.svg',
            },
            {
                name: 'AWS',
                icon: '/logo/aws.png',
            },
        ],
    };

    export const PROJECTS: IProject[] = [
        {
            title: 'Madan Store',
            slug: 'mti-electronics',
            liveUrl: 'https://www.madanstore.in/',
            year: 2026,
            description: `
        A fully responsive E-commerce store for family business<br/> <br/>
        
        Key Features:<br/>
        <ul>
            <li>🛍️ E-Commerce Storefront: Full-featured online store with product listings and cart functionality</li>
            <li>🔍 Product Search & Filter: Advanced filtering and search for seamless product discovery</li>
            <li>💳 Secure Checkout: Integrated payment gateway with smooth checkout flow</li>
            <li>📱 Fully Responsive: Optimized for all device sizes including mobile and tablet</li>
            <li>⚡ Fast Performance: Optimized storefront with lazy loading and image compression</li>
        </ul><br/>
        
        Technical Highlights:
        <ul>
            <li>Built custom React components integrated with the Shopify Storefront API</li>
            <li>Implemented dynamic product filtering and real-time search using React state management</li>
            <li>Developed reusable UI components with Tailwind CSS for design consistency</li>
            <li>Configured efficient data fetching strategies using GraphQL and the Storefront API</li>
        </ul>
        `,
            role: `
        Full-Stack Developer <br/>
        Owned the entire development lifecycle:
        <ul>
            <li>✅ Backend: Integrated Shopify Storefront API with custom GraphQL queries for products and collections</li>
            <li>🎨 Frontend: Built all UI components using React, Tailwind CSS and custom CSS</li>
            <li>🔄 State Management: Implemented client-side cart state and data fetching with React Context</li>
            <li>🖥️ Theme Customization: Created and customized storefront sections for content editors</li>
        </ul>
        `,
            techStack: [
                'React',
                'JavaScript',
                'Shopify Storefront API',
                'GraphQL',
                'Tailwind CSS',
                'Liquid',
                'REST API',
            ],
            thumbnail: '/projects/thumbnail/madanstore.png',
            longThumbnail: '/projects/long/madanstore.png',
            images: [
                '/projects/images/madanstore1.png',
                '/projects/images/madanstore2.png',
                '/projects/images/madanstore3.png',
            ],
        },
        {
            title: 'MedSchedule',
            slug: 'medschedule',
            techStack: [
                'React',
                'Redux',
                'MERN',
                'Tailwind CSS',
                'Razorpay',
                'Figma',
                'Api Integration',
            ],
            thumbnail: '/projects/thumbnail/medschedule.png',
            longThumbnail: '/projects/long/medschedule.png',
            images: [
                '/projects/images/epikcart-1.png',
                '/projects/images/epikcart-2.png',
                '/projects/images/epikcart-3.png',
                '/projects/images/epikcart-4.png',
                '/projects/images/epikcart-5.png',
            ],
            liveUrl: 'https://medschedule-fullstack-frontend.onrender.com/',
            year: 2025,
            description: `MedSchedule - Online Doctor Appointment Booking Website`,
            role: `As the full-stack developer in a team of two, I: <br/>
            - Built the frontend/backend from scratch using React, Redux,and Tailwind CSS.<br/>
            - Developed Fully responsive medical website.<br/>
            - Admin dashboard to manage bookings and availability.<br/>
            - Razorpay integration for consultation fee payment.`,
        },
        {
        title: 'Rack Management System',
        slug: 'rack-management',
        techStack: [
            'React',
            'Node.js',
            'Express.js',
            'MongoDB',
            'Tailwind CSS',
        ],
        thumbnail: '/projects/thumbnail/rack-management.png',
        longThumbnail: '/projects/long/rack-management.png',
        images: [
            '/projects/images/rack-management-1.png',
            '/projects/images/rack-management-2.png',
            '/projects/images/rack-management-3.png',
        ],
        liveUrl: 'https://rack-management-frontend.onrender.com/',
        year: 2024,
        description:
            'Rack Management System is a web application built for Madan Store to streamline the organization and tracking of store inventory across physical racks. It enables staff to assign products to specific rack locations, monitor stock placement, and quickly locate items within the store. Built with React, Node.js, Express, and MongoDB, the system provides a clean and intuitive interface for day-to-day inventory management.',
        role: `As the sole developer, I:<br/>
        - Designed and developed the full-stack application using React, Node.js, Express.js, and MongoDB.<br/>
        - Built RESTful APIs for managing racks, products, and their assignments.<br/>
        - Developed an intuitive frontend dashboard for store staff to manage rack and product data efficiently.`,
    },
        {
        title: 'GreenCart',
        slug: 'greencart',
        techStack: [
            'React.js',
            'Redux Toolkit',
            'Tailwind CSS',
            'Node.js',
            'Express.js',
            'MongoDB',
            'JWT',
            'Axios',
        ],
        thumbnail: '/projects/thumbnail/greencart.png',
        longThumbnail: '/projects/long/greencart.png',
        images: [
            '/projects/images/greencart-1.png',
            '/projects/images/greencart-2.png',
            '/projects/images/greencart-3.png',
        ],
        liveUrl: 'https://my-store-deploy.vercel.app/',
        year: 2024,
        description:
            'GreenCart is a fast grocery delivery web app inspired by Blinkit, built entirely in JavaScript. Users can browse categorized grocery products, manage their cart, and place orders through a clean and responsive interface. The platform features JWT-based authentication, real-time cart sync, and a fully functional order management flow — all powered by a vanilla JS stack from frontend to backend.',
        role: `As the full-stack JavaScript developer, I:<br/>
        - 🛒 Built the frontend using React.js with Redux Toolkit for global cart and auth state management.<br/>
        - ⚙️ Developed the backend REST APIs using Node.js and Express.js for products, users, and orders.<br/>
        - 🗄️ Used MongoDB with Mongoose for flexible data modeling of products and orders.<br/>
        - 🔐 Implemented JWT-based authentication for secure login and protected routes.<br/>
        - 🌐 Handled all API communication via Axios with centralized error handling.`,
    },
        {
        title: 'AI Resume Builder',
        slug: 'jioresume',
        techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'OpenAI API', 'JWT', 'Axios'],
        thumbnail: '/projects/thumbnail/jioresume.png',
        longThumbnail: '/projects/long/jioresume.png',
        images: [
            '/projects/images/jioresume-1.png',
            '/projects/images/jioresume-2.png',
            '/projects/images/jioresume-3.png',
            '/projects/images/jioresume-4.png',
        ],
        liveUrl: 'https://jioresume.com/',
        year: 2024,
        description:
            'JioResume is an AI-powered resume builder that helps users create professional resumes in minutes. The platform leverages OpenAI to generate tailored resume content based on user input, with support for multiple templates and real-time preview. Built entirely in JavaScript, it offers a smooth and intuitive experience from filling details to downloading a job-ready resume.',
        role: `As the full-stack JavaScript developer, I:<br/>
        - 🤖 Integrated OpenAI API to generate AI-powered resume content based on user profile and job role.<br/>
        - 🎨 Built a dynamic resume editor with real-time preview using React.js and Tailwind CSS.<br/>
        - ⚙️ Developed backend APIs with Node.js and Express.js for user management and resume storage.<br/>
        - 🗄️ Used MongoDB to store user data, resume drafts, and generated content.<br/>
        - 🔐 Implemented JWT-based authentication for secure account access.`,
    },
    ];

    export const MY_EXPERIENCE = [
        {
            title: 'Software Developer',
            company: 'TECH M FLNCE',
            duration: 'Dec 2025 - Present',
        },
        {
            title: 'E-commerce Developer',
            company: 'Homesake Pvt Ltd',
            duration: 'Apr 2024 - June 2025',
        },
        {
            title: 'UI/UX Developer',
            company: 'Team Pumpkin',
            duration: 'Oct 2023 - Feb 2024',
        },
        {
            title: 'Frontend Developer (Part-time)',
            company: 'Atlys',
            duration: 'Jan 2023 - Apr 2023',
        },
    ];

    export const MY_CERTIFICATES = [
    {
        title: 'Project Fortius',
        issuer: 'Tech Mahindra',
        year: '2026',
        image: '/certificates/certificate 1.jpg',
    },
    {
        title: 'E-Commerce Executive',
        issuer: 'Homesake Pvt Ltd',
        year: '2025',
        image: '/certificates/1753945593907.jpg',
    },      // add more as needed
];
