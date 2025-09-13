"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ExternalLink, Copy, Check } from "lucide-react"

export function Navbar() {
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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-md border-b border-primary/20 shadow-lg">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-primary drop-shadow-lg">$VALHALLA</span>
          <span className="text-sm animate-pulse">⚔️</span>
        </div>

        <div className="hidden md:flex items-center gap-2 bg-muted/50 backdrop-blur-sm px-3 py-2 rounded-md border border-primary/20">
          <span className="text-xs font-semibold text-muted-foreground">CA:</span>
          <span className="font-mono text-xs text-primary">
            {contractAddress.slice(0, 8)}...{contractAddress.slice(-8)}
          </span>
          <Button onClick={copyToClipboard} variant="ghost" size="sm" className="h-6 w-6 p-0 hover:bg-primary/20">
            {copied ? <Check className="w-3 h-3 text-primary" /> : <Copy className="w-3 h-3 text-primary" />}
          </Button>
        </div>

        <div className="flex items-center gap-4">
          <Button asChild variant="ghost" size="sm" className="text-foreground hover:text-primary hover:bg-primary/20 transition-all duration-300">
            <a
              href="https://x.com/valhallacoin"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              X Community
              <ExternalLink className="w-4 h-4" />
            </a>
          </Button>

          <Button asChild variant="ghost" size="sm" className="text-foreground hover:text-primary hover:bg-primary/20 transition-all duration-300">
            <a
              href="https://dexscreener.com/solana/kqzckjzqrwneayapgtxncoppgipvm3p7dosnmhj6hrn"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              Chart
              <ExternalLink className="w-4 h-4" />
            </a>
          </Button>

          <Button asChild size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <a
              href="https://pump.fun/coin/8Zjt4vxYbpEP7GiFDgjyQseTLnrMbY7ec11qLX64pump"
              target="_blank"
              rel="noopener noreferrer"
            >
              Buy Now
            </a>
          </Button>
        </div>
      </div>
    </nav>
  )
}
