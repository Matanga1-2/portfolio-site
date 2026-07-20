interface FigureProps {
  src: string;
  alt: string;
  caption?: string;
}

export const Figure = ({ src, alt, caption }: FigureProps) => {
  return (
    <figure className="my-8 not-prose">
      <div className="border border-border rounded overflow-hidden bg-background">
        <img src={src} alt={alt} className="w-full h-auto" loading="lazy" />
      </div>
      {caption && (
        <figcaption className="mt-3 text-sm text-muted-foreground text-center">{caption}</figcaption>
      )}
    </figure>
  );
};
