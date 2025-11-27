export default function TitleAdmin({
  title,
  description,
  className
}: {
  title: string;
  description: string;
  className?:string;
}) {
  return (
    <div className={className}>
      <h1 className="text-xl font-bold">{title}</h1>
      <p className="text-muted-foreground text-sm">{description}</p>
    </div>
  );
}
