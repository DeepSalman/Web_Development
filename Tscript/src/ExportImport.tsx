type CardProps = {
  title: string;
  views?: number; // optional
};

function Card({ title, views }: CardProps) {
  return (
    <div>
      <h1>{title}</h1>
      <p>{views}</p>
    </div>
  );
}


