import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import ArticleData from '../components/ArticleData';
import Return from '../components/Return';

function Article() {
  const { id } = useParams();
  const article = ArticleData.find((item) => item.id === parseInt(id));

  const [typedTitle, setTypedTitle] = useState('');
  const [loading, setLoading] = useState(true);

  // Show blank page for 300ms
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (article && !loading) {
      let i = 0;
      const interval = setInterval(() => {
        setTypedTitle(article.title.slice(0, i + 1));
        i++;
        if (i === article.title.length) clearInterval(interval);
      }, 10);

      return () => clearInterval(interval);
    }
  }, [article, loading]);

  if (loading) {
    // Full screen blank or background color div
    return (
      <div className="fixed inset-0 z-50"></div>
    );
  }

  if (!article) {
    return <div className="text-red-500 text-xl">Article not found</div>;
  }

  return (
    <>
      <Return />
      <motion.div
        className="p-6 max-w-5xl mx-auto text-left bg-blackPrimary/50 backdrop-blur mt-14 xl:mt-4 sm:rounded-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-3xl font-bold mb-4">{typedTitle}</h1>
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-auto rounded-lg mb-4"
        />
        <motion.p
          className="text-whitePrimary/75 font-light mb-4 whitespace-pre-line text-xs 2xl:text-sm"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          {article.detailedDescription}
        </motion.p>
        <motion.div
          className="flex flex-row justify-between gap-6 mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          <a
            href={article.link}
            target="_blank"
            rel="noopener noreferrer"
            className="underline-center-expand"
          >
            Visit website
          </a>

          {article.github && (
            <a
              href={article.github}
              target="_blank"
              rel="noopener noreferrer"
              className="underline-center-expand text-bluePrimary hover:text-white"
            >
              View GitHub
            </a>
          )}
        </motion.div>


        <motion.div
          className="mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.6 }}
        >
          <h2 className="text-xl font-semibold mb-2">
            Reflections & Improvements
          </h2>
          <p className="text-whitePrimary/75 font-light text-xs 2xl:text-sm">
            {article.reflections}
          </p>
        </motion.div>
      </motion.div>
    </>
  );
}

export default Article;
