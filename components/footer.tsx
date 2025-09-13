export function Footer() {
  return (
    <footer className="bg-card/30 backdrop-blur-sm border-t border-primary/30 py-12 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold mb-4 drop-shadow-lg">
            {"🛡️ "}
            <span className="text-primary bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">$VALHALLA</span>
            {" 🛡️"}
          </h3>
          <p className="text-foreground text-pretty drop-shadow-md">
            {"The legendary memecoin of the Viking warriors. May your bags be heavy and your gains eternal!"}
          </p>
        </div>

        <div className="border-t border-primary/30 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            {"Website crafted by "}
            <a
              href="https://regenkomet.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 font-semibold transition-colors drop-shadow-md"
            >
              regenkomet.dev
            </a>
          </p>
          <p className="text-xs text-muted-foreground mt-2 animate-pulse">{'⚔️ "In Code We Trust, In Valhalla We Feast!" ⚔️'}</p>
        </div>
      </div>
    </footer>
  )
}
