export default function PortfolioDetailPage({ params }: { params: { slug: string } }) {
  console.log("Slug:", params.slug);
  
  return <div>{params.slug}</div>;
}
