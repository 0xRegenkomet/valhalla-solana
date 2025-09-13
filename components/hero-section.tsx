"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Copy, Check, ExternalLink } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  const [copied, setCopied] = useState(false)
  const contractAddress = "8Zjt4vxYbpEP7GiFDgjyQseTLnrMbY7ec11qLX64pump"

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(contractAddress)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy:", err)
    }
  }

  return (
    <section className="pt-20 pb-12 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="relative max-w-2xl mx-auto mb-8">
          <div className="relative overflow-hidden rounded-xl shadow-2xl">
            <Image
              src="/viking-chicken.jpg"
              alt="VALHALLA Viking Warrior with Rubber Chicken"
              width={800}
              height={600}
              className="w-full h-auto transform hover:scale-105 transition-transform duration-500"
              priority
              quality={100}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>

          {/* Floating warrior badge */}
          <div className="absolute top-4 right-4 bg-gradient-to-r from-primary to-secondary text-primary-foreground px-6 py-3 rounded-full font-bold text-sm animate-bounce shadow-2xl border border-primary/30 backdrop-blur-sm">
            {"🐔 CHICKEN WARRIOR 🐔"}
          </div>
        </div>

        <div className="text-center relative z-20">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-balance drop-shadow-2xl">
            <span className="text-primary bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent animate-pulse">
              $VALHALLA
            </span>
          </h1>

          <p className="text-2xl md:text-3xl font-bold mb-4 text-secondary drop-shadow-lg animate-pulse">
            {"⚡ SEE YOU IN VALHALLA! ⚡"}
          </p>


          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground font-bold text-lg px-8 py-6 shadow-2xl hover:shadow-primary/25 transition-all duration-300 transform hover:scale-105"
            >
              <a
                href="https://pump.fun/coin/8Zjt4vxYbpEP7GiFDgjyQseTLnrMbY7ec11qLX64pump"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                {"🚀 BUY HERE 🚀"}
                <ExternalLink className="w-5 h-5" />
              </a>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground font-bold text-lg px-8 py-6 bg-transparent backdrop-blur-sm shadow-xl hover:shadow-secondary/25 transition-all duration-300 transform hover:scale-105"
            >
              <a
                href="https://dexscreener.com/solana/kqzckjzqrwneayapgtxncoppgipvm3p7dosnmhj6hrn"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                {"📊 VIEW CHART 📊"}
                <ExternalLink className="w-5 h-5" />
              </a>
            </Button>
          </div>

          <p className="text-lg font-semibold text-primary mb-8 drop-shadow-lg animate-pulse">
            {'🏴‍☠️ "In Crypto We Trust, In Valhalla We Feast!" 🏴‍☠️'}
          </p>
        </div>
      </div>
    </section>
  )
}
