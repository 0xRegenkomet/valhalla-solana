export function ChartSection() {
  return (
    <section className="py-20 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance drop-shadow-lg">
            {"📊 Battle "}
            <span className="text-primary bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Charts</span>
            {" 📊"}
          </h2>
          <p className="text-xl text-foreground text-pretty drop-shadow-md">
            {"Watch our Viking army conquer the markets in real-time!"}
          </p>
        </div>

        <div className="bg-card/80 backdrop-blur-sm rounded-xl border-2 border-primary/30 overflow-hidden shadow-2xl hover:shadow-primary/25 transition-all duration-300">
          <div className="p-6 bg-gradient-to-r from-primary/10 to-secondary/10 border-b border-primary/30">
            <h3 className="text-2xl font-bold text-center text-primary drop-shadow-md">{"⚡ $VALHALLA Live Trading Chart ⚡"}</h3>
          </div>

          <div className="relative">
            <style
              dangerouslySetInnerHTML={{
                __html: `
                #dexscreener-embed{position:relative;width:100%;padding-bottom:125%;}
                @media(min-width:1400px){#dexscreener-embed{padding-bottom:65%;}}
                #dexscreener-embed iframe{position:absolute;width:100%;height:100%;top:0;left:0;border:0;}
              `,
              }}
            />
            <div id="dexscreener-embed">
              <iframe
                src="https://dexscreener.com/solana/kQzCKjZQRWneayApGTXNcoPPgipvM3P7doSNMHJ6hRN?embed=1&loadChartSettings=0&trades=0&tabs=0&chartLeftToolbar=0&chartDefaultOnMobile=1&chartTheme=dark&theme=dark&chartStyle=0&chartType=usd&interval=15"
                title="VALHALLA Trading Chart"
              />
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-lg font-semibold text-secondary drop-shadow-lg animate-pulse">{'🏴‍☠️ "To the Moon and Beyond Midgard!" 🏴‍☠️'}</p>
        </div>
      </div>
    </section>
  )
}
