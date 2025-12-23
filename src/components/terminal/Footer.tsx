export const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground font-mono">
          <p>
            <span className="text-primary">©</span> {new Date().getFullYear()} Matan Grady
            <span className="text-muted-foreground/50 mx-2">|</span>
            Built with passion & late nights
          </p>
          <p className="flex items-center gap-2">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span>status: shipping</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
