export default async function PortfolioDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  console.log("slug:", slug);

  return <div>Portfolio page: {slug}</div>;
}
