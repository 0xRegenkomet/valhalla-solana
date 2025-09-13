"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import Image from "next/image"

export function MemesSection() {
  const memes = [
    {
      id: 1,
      title: "Viking Businessman",
      description: "When you're ready for Valhalla but have a meeting at 3 PM",
      image: "/memes/G0qiILjbcAMacE3.png",
      alt: "Viking businessman meme"
    },
    {
      id: 2,
      title: "Chicken Warrior",
      description: "The mightiest weapon in all the nine realms",
      image: "/memes/G0r_fEbWQAAXOvX.jpg", 
      alt: "Viking warrior with rubber chicken"
    },
    {
      id: 3,
      title: "Alliance of Warriors",
      description: "When two Vikings shake hands in Valhalla",
      image: "/memes/G0rL3iCbcAE4eDT.jpg",
      alt: "Vikings shaking hands"
    },
    {
      id: 4,
      title: "Journey to Valhalla",
      description: "The path to eternal glory awaits",
      image: "/memes/G0rva2JWQAAwjaU.jpg",
      alt: "Viking walking to Valhalla gate"
    },
    {
      id: 5,
      title: "Welcome to Valhalla",
      description: "When you finally make it to the promised land",
      image: "/memes/G0siFR9WEAImNz9.jpg",
      alt: "Welcome to Valhalla meme"
    },
    {
      id: 6,
      title: "Epic Viking Battle",
      description: "The final showdown for eternal glory",
      image: "/memes/G0suKV9aAAAgFa5.jpg",
      alt: "Epic Viking battle meme"
    }
  ]

  const handleDownload = (imageUrl: string, title: string) => {
    const link = document.createElement('a')
    link.href = imageUrl
    link.download = `${title.replace(/\s+/g, '-').toLowerCase()}.jpg`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section className="py-20 px-4 bg-card/20 backdrop-blur-sm relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance drop-shadow-lg">
            {"😂 Memes that will send you to "}
            <span className="text-primary bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Valhalla</span>
            {" 😂"}
          </h2>
          <p className="text-xl text-foreground text-pretty drop-shadow-md">
            {"Laugh your way to eternal glory with these legendary Viking memes!"}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {memes.map((meme) => (
            <Card
              key={meme.id}
              className="group hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 border-primary/30 hover:border-primary bg-card/80 backdrop-blur-sm shadow-xl hover:shadow-primary/25 overflow-hidden"
            >
              <div className="relative">
                <div className="aspect-square relative overflow-hidden">
                  <Image
                    src={meme.image}
                    alt={meme.alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="absolute top-2 right-2 bg-primary/90 text-primary-foreground px-2 py-1 rounded-full text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {"⚔️"}
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="text-lg font-bold text-primary mb-2">{meme.title}</h3>
                <p className="text-muted-foreground text-sm text-pretty mb-4">{meme.description}</p>
                <Button
                  onClick={() => handleDownload(meme.image, meme.title)}
                  className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download Meme
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg font-semibold text-secondary drop-shadow-lg animate-pulse">
            {'🏴‍☠️ "A Viking without memes is like a ship without sails!" 🏴‍☠️'}
          </p>
        </div>
      </div>
    </section>
  )
}
