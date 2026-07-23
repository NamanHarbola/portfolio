'use client';
import SectionTitle from '@/components/SectionTitle';
import { MY_CERTIFICATES } from '@/lib/data';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Image from 'next/image';
import { useRef } from 'react';
import { ExternalLink } from 'lucide-react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Certificates = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            gsap.from('.certificate-item', {
                y: 30,
                opacity: 0,
                stagger: 0.2,
                duration: 0.8,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 85%',
                    toggleActions: 'play none none reverse',
                },
            });
        },
        { scope: containerRef }
    );

    return (
        <section className="pb-24" id="my-certificates">
            <div className="container" ref={containerRef}>
                <SectionTitle title="Certificates" />

                <div className="flex flex-col mt-10">
                    {MY_CERTIFICATES.map((cert) => (
                        <div
                            key={cert.title}
                            className="certificate-item flex flex-col md:flex-row items-start md:items-center justify-between py-8 border-b border-white/10"
                        >
                            <div className="flex-1 pr-4">
                                <p className="text-sm md:text-base text-muted-foreground font-medium uppercase tracking-wider">
                                    {cert.issuer}
                                </p>
                                <h3 className="text-2xl md:text-4xl font-anton mt-2 text-white">
                                    {cert.title}
                                </h3>
                                <p className="text-sm md:text-base text-muted-foreground mt-2">
                                    Issued: {cert.year}
                                </p>
                            </div>

                            {/* Corrected Image Container */}
                            <div className="mt-6 md:mt-0 w-full md:w-auto relative overflow-hidden rounded-md border border-white/10 bg-white/5 p-1 shadow-xl">
                                <div className="relative w-full aspect-[1.41/1] md:w-[220px] lg:w-[280px] overflow-hidden rounded-sm group">
                                    <Image
                                        src={cert.image}
                                        alt={cert.title}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 280px, 220px"
                                    />
                                    
                                    <a 
                                        href={cert.image} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="absolute top-2 right-2 p-2 bg-black/50 rounded-full text-white opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                        title="View Full Certificate"
                                    >
                                        <ExternalLink size={16} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certificates;
