const Logos = [
    {
        name: "HTML",
        image: "/images/html.png"
    },
    {
        name: "CSS",
        image: "/images/css.png"
    },
    {
        name: "React",
        image: "/images/react.png"
    },
    {
        name: "Firebase",
        image: "/images/firebase.png"
    },
    {
        name: "Git",
        image: "/images/git.png"
    },
    {
        name: "Tailwind",
        image: "/images/tailwind.png"
    },
    {
        name: "JavaScript",
        image: "/images/javascript.png"
    },
    {
        name: "Figma",
        image: "/images/figma.png"
    },
    {
        name: "Adobe",
        image: "/images/adobe.png"
    },
]

function Tools() {
    return (
        <>
        <h1 className="text-2xl sm:text-4xl font-black bg-gradient-to-r from-greenPrimary to-bluePrimary text-transparent bg-clip-text brightness-200 border-t-1 border-whitePrimary/15 mx-4 lg:mx-24 pt-8 flex flex-col sm:flex-row justify-center items-center sm:items-end sm:gap-2"
            style={{
                textShadow: "2px 4px 8px rgba(0,0,0,0.5)",
              }}>
                TOOLS <span className="text-xl sm:text-3xl">AND</span>TECHNOLOGIES
        </h1>
      <div className="flex flex-wrap justify-center gap-6 px-4 mt-4">
        {Logos.map((logo) => (
          <img
            key={logo.name}
            src={logo.image}
            alt={logo.name}
            className="w-12 h-12 object-contain"
          />
        ))}
      </div>
      </>
    );
  }
  
  export default Tools;
  