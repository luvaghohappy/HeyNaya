import React from "react";
import { BookOpen, Brain, FileText, Download, Apple, Smartphone, ShieldCheck, Lock, Heart } from "lucide-react";

export default function Sources() {
    return (
        <div className="w-full text-white bg-[#0b0f1a] overflow-hidden px-6 md:px-16 py-32">

            {/* HERO */}
            <div className="text-center mb-20 relative">

                <div className="absolute w-[400px] h-[400px] bg-purple-500/20 blur-3xl rounded-full left-1/2 -translate-x-1/2 animate-pulse" />

                <h1 className="text-5xl font-bold mb-6 relative z-10">
                    Sources & <span className="text-purple-400">Resources</span>
                </h1>

                <p className="text-white/60 max-w-xl mx-auto relative z-10">
                    Explore the knowledge and research behind Naya, and discover what can support you in your journey.
                </p>
            </div>

            {/* GRID */}
            <div className="grid md:grid-cols-3 gap-10">

                {/* BOOKS */}
                <SourceCard
                    icon={BookOpen}
                    title="Books"
                    items={[
                        "The Body Keeps the Score",
                        "Emotional Intelligence",
                        "Man’s Search for Meaning",
                    ]}
                />

                {/* ARTICLES */}
                <SourceCard
                    icon={FileText}
                    title="Articles"
                    items={[
                        "AI in Mental Health Care",
                        "Understanding Trauma Response",
                        "Digital Therapy Innovations",
                    ]}
                />

                {/* AI + MENTAL HEALTH */}
                <SourceCard
                    icon={Brain}
                    title="AI & Mental Health"
                    items={[
                        "AI assisted therapy systems",
                        "Ethics of AI in healthcare",
                        "Voice based emotional support",
                    ]}
                />

            </div>

            {/* DOWNLOAD SECTION */}
            <div className="mt-20 text-center">

                <h2 className="text-3xl font-semibold mb-10 text-purple-400">
                    Get Naya
                </h2>

                <div className="flex flex-wrap justify-center gap-6">

                    <DownloadButton icon={Apple} text="App Store" />
                    <DownloadButton icon={Smartphone} text="Google Play" />

                </div>

            </div>

            {/* TRUST SECTION */}
            <section className="flex flex-col items-center justify-center text-center px-6 py-10">

                <div className="px-8 py-6 rounded-2xl border border-white/20 bg-white/5 backdrop-blur-md">

                    <div className="flex flex-wrap justify-center gap-10">

                        <TrustItem icon={ShieldCheck} text="Protected" />
                        <TrustItem icon={Lock} text="Secure" />
                        <TrustItem icon={Brain} text="Trauma-informed" />

                    </div>

                </div>

                {/* Text below */}
                <div className="flex items-center gap-2 text-white/80 text-sm mt-4">
                    <span>Designed with care, privacy, and emotional safety at its core.</span>
                    <Heart className="w-4 h-4 text-purple-400" />
                </div>
            </section>

        </div>
    );
}

/* TRUST ITEM */
function TrustItem({ icon: Icon, text }) {
    return (
        <div className="flex items-center gap-2">
            <Icon className="w-5 h-5 text-purple-400" />
            <span className="text-white/80 text-sm">{text}</span>
        </div>
    );
}


/* SOURCE CARD */
function SourceCard({ icon: Icon, title, items }) {
    return (
        <div className="relative p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:scale-105 transition shadow-lg">

            {/* Glow */}
            <div className="absolute w-[200px] h-[200px] bg-purple-500/10 blur-2xl rounded-full top-0 right-0" />

            <div className="relative z-10">

                <div className="flex items-center gap-3 mb-4">
                    <Icon className="w-6 h-6 text-purple-400" />
                    <h3 className="text-lg font-semibold">{title}</h3>
                </div>

                <ul className="space-y-3 text-white/70 text-sm">
                    {items.map((item, index) => (
                        <li key={index} className="hover:text-white transition cursor-pointer">
                            • {item}
                        </li>
                    ))}
                </ul>

            </div>
        </div>
    );
}

/* DOWNLOAD BUTTON */
function DownloadButton({ icon: Icon, text }) {
    return (
        <button className="flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 hover:opacity-90 transition shadow-lg">

            <Icon className="w-5 h-5" />
            <span>{text}</span>

        </button>
    );
}