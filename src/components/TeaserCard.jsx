import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MdArrowRight } from "react-icons/md";

const teaserCardsData = [
  {
    id: 1,
    title: "Holidaze",
    image: "/images/Holidaze.png",
    description:
      "Holidaze is a React app for browsing, creating, and booking venues with user auth, profiles, and routing via React Router.",
    link: "https://holidaze-fkf.netlify.app/",
  },
  {
    id: 2,
    title: "Social Media App",
    image:
      "/images/SocialMediaApp.png",
    description:
      "Social Media App is a JavaScript + Tailwind app where users can register, post content, and follow others.",
    link: "https://tailwind-ca.netlify.app/dist/index.html",
  },
  {
    id: 3,
    title: "Delekat",
    image: "/images/Delekat.png",
    description:
      "Delekat is a React + Firebase app for sharing recipes, with user auth and admin tools for managing content and users.",
    link: "https://delekat.netlify.app/",
  },
];

function TeaserCard() {
  return (
    <>
                <h1 className="text-2xl sm:text-4xl font-black bg-gradient-to-r from-greenPrimary to-bluePrimary text-transparent bg-clip-text brightness-200 border-t-1 border-whitePrimary/15 mx-4 lg:mx-24 pt-8"
            style={{
                textShadow: "2px 4px 8px rgba(0,0,0,0.5)",
              }}>PORTFOLIO</h1>
    <div className="grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-3 xl:grid-cols-6 gap-6 px-4 lg:mx-24 mt-4">
  {teaserCardsData.map((card, index) => (
    <motion.div
      key={card.id}
      className={`bg-whitePrimary/5 backdrop-blur rounded-2xl shadow-lg overflow-hidden sm:col-span-2 lg:col-span-1 xl:col-span-2
        ${index === 0 ? 'xl:col-start-2' : ''}
        ${index === teaserCardsData.length - 1 ? 'sm:col-start-2 xl:row-start-2 xl:col-start-3' : ''}
      `}
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, delay: index * 0.2 }}
    >
          <img
            src={card.image}
            alt={card.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2">{card.title}</h2>
            <p className="text-whitePrimary/75 font-light text-xs mb-4 sm:min-h-16 2xl:mx-24">{card.description}</p>
            <div className="flex flex-row gap-2 items-center justify-between 2xl:mx-20">
            <a
              href={card.link}
              target="_blank"
              rel="noopener noreferrer"
              className="underline-center-expand text-xs 2xl:text-sm"
            >
              Visit website
            </a>
              <Link
                to={`/article/${card.id}`}
                className="inline-flex items-center gap-1 justify-between pl-2 pr-0 sm:pl-4 sm:gap-4 py-2 border-3 border-bluePrimary bg-bluePrimary rounded-lg text-sm 2xl:text-lg font-medium duration-150 hover:bg-bluePrimary/75 hover:scale-105 hover:border-3 hover:border-whitePrimary/10"
              >
                View Project <MdArrowRight size={24}/>
              </Link>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
    </>
  );
}

export default TeaserCard;
