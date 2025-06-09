function Profile() {


    return (
        <>
        <div className="bg-whitePrimary/5 backdrop-blur flex flex-col lg:mx-24 pt-4 lg:px-12 rounded-lg mt-8 justify-evenly items-center h-96 xl:flex-row">
            <div className="flex flex-col justify-center items-center xl:flex-row xl:w-1-3">
            <h1 className="text-4xl 2xl:text-5xl font-black bg-gradient-to-r from-greenPrimary to-bluePrimary text-transparent bg-clip-text brightness-200"
            style={{
                textShadow: "2px 4px 8px rgba(0,0,0,0.5)",
              }}>
            FRONTEND <br /> DEVELOPER
            </h1>
            </div>
              <div className="xl:w-1/3 flex flex-col justify-center items-center">
            <img src="/images/profile.png" 
                 className="absolute h-48 top-48 object-cover top-0 brightness-90 sm:h-64 sm:top-32 sm:left-24 xl:left-0 xl:h-96 xl:top-0 xl:left-54"
            />
            </div>

        <div className="flex flex-col justify-center items-center mx-4 xl:w-1/3 pb-40 sm:pl-64 sm:pb-10 xl:pl-0">
            <h2 className="text-xl lg:text-2xl font-bold">Frank Kristian Fosse</h2>
            <p className="font-light text-whitePrimary/60 text-xs sm:w-2/4 lg:text-sm w-2/4 xl:w-full">
                I'm a Front-End Developer with a passion for crafting modern, responsive, and user-friendly websites and applications.
            </p>
        </div>
        </div>
        </>
    )
}

export default Profile;