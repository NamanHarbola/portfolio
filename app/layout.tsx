import type { Metadata } from 'next';
import { Anton, Roboto_Flex } from 'next/font/google';
import { ReactLenis } from 'lenis/react';
import './globals.css';
import 'lenis/dist/lenis.css';
import Footer from '@/components/Footer';
import ScrollProgressIndicator from '@/components/ScrollProgressIndicator';
import ParticleBackground from '@/components/ParticleBackground';
import Navbar from '@/components/Navbar';
import CustomCursor from '@/components/CustomCursor';
import Preloader from '@/components/Preloader';
import StickyEmail from './_components/StickyEmail';
import { GoogleAnalytics } from '@next/third-parties/google';
import Script from 'next/script';

const antonFont = Anton({
    weight: '400',
    style: 'normal',
    subsets: ['latin'],
    variable: '--font-anton',
});

const robotoFlex = Roboto_Flex({
    weight: ['100', '400', '500', '600', '700', '800'],
    style: 'normal',
    subsets: ['latin'],
    variable: '--font-roboto-flex',
});

export const metadata: Metadata = {
    title: 'Naman Harbola | Full-Stack Developer',
    description:
        'Portfolio of Naman Harbola — Full-Stack Developer with 3+ years of experience building scalable web apps using React, Next.js, Node.js, and more.',
    keywords: [
        'Naman Harbola',
        'Full Stack Developer',
        'React Developer',
        'Next.js Developer',
        'Node.js',
        'Web Developer India',
        'Software Developer Portfolio',
    ],
    authors: [
        {
            name: 'Naman Harbola',
            url: 'https://namanharbola.me', // ✅ updated
        },
    ],
    metadataBase: new URL('https://namanharbola.me'), // ✅ updated

    openGraph: {
        title: 'Naman Harbola | Full-Stack Developer',
        description:
            'Full-Stack Developer with 3+ years of experience. React, Next.js, Node.js, MongoDB and more.',
        url: 'https://namanharbola.me', // ✅ updated
        siteName: 'Naman Harbola Portfolio',
        images: [
            {
                url: '/profile.jpg',
                width: 1200,
                height: 630,
                alt: 'Naman Harbola - Full Stack Developer',
            },
        ],
        locale: 'en_IN',
        type: 'website',
    },

    twitter: {
        card: 'summary_large_image',
        title: 'Naman Harbola | Full-Stack Developer',
        description:
            'Full-Stack Developer with 3+ years of experience. React, Next.js, Node.js, MongoDB and more.',
        images: ['/profile.jpg'],
    },

    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
        },
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <GoogleAnalytics gaId="G-MHLY1LNGY5" />
            <Script id="hotjar" strategy="afterInteractive">
                {`(function(h,o,t,j,a,r){
                h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                h._hjSettings={hjid:6380611,hjsv:6};
                a=o.getElementsByTagName('head')[0];
                r=o.createElement('script');r.async=1;
                r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                a.appendChild(r);
            })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`}
            </Script>
            <body
                className={`${antonFont.variable} ${robotoFlex.variable} antialiased`}
                suppressHydrationWarning
            >
                <ReactLenis
                    root
                    options={{
                        lerp: 0.1,
                        duration: 1.4,
                    }}
                >
                    <Navbar />
                    <main>{children}</main>
                    <Footer />
                    <CustomCursor />
                    <Preloader />
                    <ScrollProgressIndicator />
                    <ParticleBackground />
                    <StickyEmail />
                </ReactLenis>
            </body>
        </html>
    );
}
