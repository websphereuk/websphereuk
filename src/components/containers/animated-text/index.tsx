import chroma from "chroma-js";
import Link from "next/link"
import { useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);
interface AnimatedTextProps{
    content : string;
}
const AnimatedText = (props : AnimatedTextProps) => {

    const animatedTextRef = useRef<any>(null);
    const [animatedTextContent, setAnimatedTextContent] = useState("");
    useEffect(() => {
        const animatedChars = document.querySelectorAll(".animated-char");

        if (animatedChars.length > 0) {
            const folksBD = gsap.timeline({
                repeat: -1,
                delay: 0.5,
                scrollTrigger: {
                    trigger: ".animated-text",
                    start: "bottom 100%-=50px",
                },
            });

            const folksGradient = chroma.scale(["#55e6a5", "#ffffff"]);

            animatedChars.forEach((charElement, index) => {
                const delay = index * 0.04;

                folksBD.to(
                    charElement,
                    {
                        duration: 0.5,
                        scaleY: 0.6,
                        ease: "power3.out",
                        transformOrigin: "center bottom",
                    },
                    delay
                );

                folksBD.to(
                    charElement,
                    {
                        yPercent: -20,
                        ease: "elastic",
                        duration: 0.8,
                    },
                    delay + 0.5
                );

                folksBD.to(
                    charElement,
                    {
                        scaleY: 1,
                        ease: "elastic.out(2.5, 0.2)",
                        duration: 1.5,
                    },
                    delay + 0.5
                );

                folksBD.to(
                    charElement,
                    {
                        color: () => {
                            return folksGradient(index / animatedChars.length).hex();
                        },
                        ease: "power2.out",
                        duration: 0.3,
                    },
                    delay + 0.5
                );

                folksBD.to(
                    charElement,
                    {
                        yPercent: 0,
                        ease: "back",
                        duration: 0.8,
                    },
                    delay + 0.7
                );

                folksBD.to(
                    charElement,
                    {
                        color: "#ffffff",
                        duration: 1.4,
                    },
                    delay + 0.9
                );
            });
        }
    }, [animatedTextContent]);

    useEffect(() => {
        const animatedText = animatedTextRef.current;
        const textContent = animatedTextRef.current?.textContent;
        if (textContent) {
            setAnimatedTextContent(textContent);
            animatedText.innerHTML = "";
        }
    }, []);
    return (
        <div>
            <h2>
                <Link
                    href="mailto:info@gmail.com"
                    className="folks-text animated-text"
                    ref={animatedTextRef}
                >
                    {props?.content}
                    {animatedTextContent.split("").map((char, index) => (
                        <span
                            aria-hidden="true"
                            className="animated-char"
                            key={index}
                        >
                            {char}
                        </span>
                    ))}
                </Link>
            </h2>
        </div>
    )
}

export default AnimatedText
