import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink, Users, BookOpen, TrendingUp } from "lucide-react"

export function SocialsSection() {
  const socials = [
    {
      name: "X Community",
      description: "Join our Viking warriors on X!",
      icon: Users,
      url: "https://x.com/i/communities/1966547733981937845",
      emoji: "🐦",
    },
    {
      name: "Lore",
      description: "Discover the legendary tales of $VALHALLA",
      icon: BookOpen,
      url: "https://x.com/LeadingReport/status/1966507420202553398",
      emoji: "📜",
    },
    {
      name: "DexScreener",
      description: "Track our conquest on the charts",
      icon: TrendingUp,
      url: "https://dexscreener.com/solana/kqzckjzqrwneayapgtxncoppgipvm3p7dosnmhj6hrn",
      emoji: "📈",
    },
  ]

  return (
    <section className="py-20 px-4 bg-card/20 backdrop-blur-sm relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance drop-shadow-lg">
            {"⚔️ Join the "}
            <span className="text-primary bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Viking Army</span>
            {" ⚔️"}
          </h2>
          <p className="text-xl text-foreground text-pretty drop-shadow-md">
            {"Connect with fellow warriors and stay updated on our legendary journey!"}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {socials.map((social) => {
            const IconComponent = social.icon
            return (
              <Card
                key={social.name}
                className="group hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 border-primary/30 hover:border-primary bg-card/80 backdrop-blur-sm shadow-xl hover:shadow-primary/25"
              >
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center group-hover:from-primary/30 group-hover:to-secondary/30 transition-all duration-300 border border-primary/30">
                    <span className="text-2xl">{social.emoji}</span>
                  </div>
                  <CardTitle className="text-xl font-bold text-primary">{social.name}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground mb-6 text-pretty">{social.description}</p>
                  <Button
                    asChild
                    className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <IconComponent className="w-4 h-4" />
                      {"Visit"}
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg font-semibold text-secondary drop-shadow-lg animate-pulse">{'🛡️ "United We Raid, Divided We Fall!" 🛡️'}</p>
        </div>
      </div>
    </section>
  )
}
