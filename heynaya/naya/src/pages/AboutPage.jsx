import React from "react";
import { HeartHandshake, Sparkles, Brain, ShieldCheck, Lock, Heart } from "lucide-react";
import nayaImg from "../assets/images/logo.png";
import mentalImg from "../assets/images/mental.jpg";

export default function AboutUs() {
    return (
        <div className="w-full text-white bg-[#0b0f1a] overflow-hidden">

            <h1 className="text-5xl md:text-5xl font-bold mt-32 relative z-10 text-center">
                About  <span className="text-purple-400"> Naya </span>
            </h1>

            {/* SECTION 1 */}
            <section className="relative py-20 flex items-center px-6 md:px-16 bg-gradient-to-b from-[#0b0f1a] via-purple-500/10 to-[#0b0f1a]">

                {/* Orbital Glow */}
                <div className="absolute w-[500px] h-[500px] bg-purple-500/20 blur-3xl rounded-full -left-40 top-20 animate-pulse" />

                <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center w-full">

                    {/* Image LEFT */}
                    <div className="flex justify-center relative">
                        {/* Orbit ring */}
                        <div className="absolute w-[200px] h-[300px] border border-white/10 rounded-full animate-orbit" />
                        <div className="absolute w-[300px] h-[300px] border border-white/10 rounded-full animate-orbit" />

                        <img
                            src={nayaImg}
                            alt="Mission"
                            className="w-[45%] max-w-xs rounded-full shadow-[0_0_50px_rgba(168,85,247,0.3)]"
                        />
                    </div>

                    {/* Text RIGHT */}
                    <div>
                        <h2 className="text-4xl font-semibold mb-10 text-purple-300">
                            Our Mission
                        </h2>

                        <div className="flex flex-col gap-4">
                            <p className="text-white/70 leading-relaxed">
                                Our mission is to create a safe and accessible space where individuals can express themselves freely without fear of judgment. Naya is designed to provide emotional support through simple, natural conversations, helping users feel heard, understood, and guided. We aim to bridge the gap between technology and human empathy by offering a voice companion that is always available, always patient, and always supportive.
                            </p>

                            <HeartHandshake className="w-6 h-6 text-purple-400 opacity-80" />
                        </div>
                    </div>

                </div>
            </section>

            {/* SECTION 2 */}
            <section className="relative py-20 flex items-center px-6 md:px-16 py-20 bg-gradient-to-b from-[#0b0f1a] via-white/5 to-[#0b0f1a]">

                {/* Orbital Glow */}
                <div className="absolute w-[500px] h-[500px] bg-indigo-500/20 blur-3xl rounded-full right-[-200px] top-40 animate-pulse" />

                <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center w-full">

                    {/* Text LEFT */}
                    <div>
                        <h2 className="text-4xl font-semibold mb-10 text-purple-300">
                            Why Naya Was Created
                        </h2>

                        <div className="flex flex-col gap-4">
                            <p className="text-white/70 leading-relaxed">
                                Naya was created to respond to a growing need for accessible mental and emotional support. Many people struggle silently, unable to find the right words or the right moment to seek help. By combining voice interaction with thoughtful AI responses, Naya provides a gentle first step a place where users can talk openly, release tension, and begin to process their thoughts at their own pace. It is not a replacement for professional care, but a supportive companion that meets you where you are.
                            </p>

                            <Sparkles className="w-6 h-6 text-purple-400 opacity-80" />
                        </div>
                    </div>

                    {/* Image RIGHT */}
                    <div className="flex justify-center relative">

                        {/* Orbit rings */}
                        <div className="absolute w-[200px] h-[200px] border border-white/10 rounded-full animate-orbit" />
                        <div className="absolute w-[300px] h-[300px] border border-white/5 rounded-full animate-orbit-slow" />

                        <img
                            src={nayaImg}
                            alt="Naya"
                            className="w-[45%] max-w-xs rounded-full shadow-[0_0_50px_rgba(168,85,247,0.3)]"
                        />
                    </div>

                </div>
            </section>

            {/* SECTION 3 */}
            <section className="relative py-20 flex items-center px-6 md:px-16 px-50 bg-gradient-to-b from-[#0b0f1a] via-purple-500/10 to-[#0b0f1a]">

                {/* Orbital Glow */}
                <div className="absolute w-[500px] h-[500px] bg-purple-500/20 blur-3xl rounded-full -left-40 bottom-10 animate-pulse" />

                <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center w-full">

                    {/* Image LEFT */}
                    <div className="flex justify-center relative">

                        {/* Orbit ring */}
                        <div className="absolute w-[220px] h-[220px] border border-white/10 rounded-full animate-orbit" />
                        <div className="absolute w-[300px] h-[300px] border border-white/5 rounded-full animate-orbit-slow" />

                        <div className="absolute w-[300px] h-[300px] rounded-full animate-orbit">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-purple-400 rounded-full" />
                        </div>

                        <img
                            src={mentalImg}
                            alt="Mental Health"
                            className="w-[45%] max-w-xs rounded-full shadow-[0_0_50px_rgba(168,85,247,0.3)]"
                        />
                    </div>
                    {/* Text RIGHT */}
                    <div>
                        <h2 className="text-4xl font-semibold mb-10 text-purple-300">
                            Mental Health Matters
                        </h2>

                        <div className="flex flex-col gap-4">
                            <p className="text-white/70 leading-relaxed">
                                Mental health is an essential part of overall well being, yet it is often overlooked or misunderstood. Stress, anxiety, and emotional challenges are part of the human experience, but facing them alone can feel overwhelming. Naya exists to remind users that their feelings are valid and that support can begin with something as simple as a conversation. By encouraging openness and self awareness, Naya helps create a meaningful step toward healing.
                            </p>

                            <Brain className="w-6 h-6 text-purple-400 opacity-80" />
                        </div>
                    </div>

                </div>
            </section>

            {/* TRUST SECTION */}
            <section className="flex flex-col items-center justify-center text-center px-6 py-20">

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