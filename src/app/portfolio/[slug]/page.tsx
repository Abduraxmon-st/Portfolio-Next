export default async function PortfolioDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  return <div>Portfolio page: {slug}</div>;
}