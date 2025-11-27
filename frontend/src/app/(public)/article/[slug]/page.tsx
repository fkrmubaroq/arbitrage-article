
import { articleContent } from "@/data/mock-data";
import MainArticle from "./_components/article-index";
import NewsletterSignup from "./_components/newsletter-signup";
import RelatedArticles from "./_components/related-articles";

const ArticleDetail = async ({
  params,
}: {
  params: Promise<{ slug: string }>
}) => {
  const { slug } = await params

  // Track read progress for analytics
  // const [readProgress, setReadProgress] = useState(0);
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const totalHeight = document.body.scrollHeight - window.innerHeight;
  //     const progress = (window.scrollY / totalHeight) * 100;
  //     setReadProgress(Math.min(progress, 100));

  //     // For analytics tracking - log reading milestones
  //     if (progress >= 25 && readProgress < 25) {
  //       console.log("Analytics event: 25% read");
  //     } else if (progress >= 50 && readProgress < 50) {
  //       console.log("Analytics event: 50% read");
  //     } else if (progress >= 75 && readProgress < 75) {
  //       console.log("Analytics event: 75% read");
  //     } else if (progress >= 90 && readProgress < 90) {
  //       console.log("Analytics event: 90% read");
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, [readProgress]);

  return (
    <>
      <article>
        <MainArticle slug={slug} />

        <NewsletterSignup />
        <RelatedArticles article={articleContent} />
      </article>
    </>
  );
};

export default ArticleDetail;
