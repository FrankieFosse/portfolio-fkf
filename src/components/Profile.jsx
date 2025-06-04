function Profile() {


    return (
        <>
        <div className="bg-whitePrimary/5 backdrop-blur flex flex-col lg:mx-24 py-4 lg:px-12 rounded-lg mt-8 justify-evenly items-center h-128 xl:flex-row">
            <div className="flex flex-col justify-center items-center xl:flex-row xl:w-1-3">
            <h1 className="text-4xl 2xl:text-5xl font-black bg-gradient-to-r from-greenPrimary to-bluePrimary text-transparent bg-clip-text brightness-200"
            style={{
                textShadow: "2px 4px 8px rgba(0,0,0,0.5)",
              }}>
            FRONTEND <br /> DEVELOPER
            </h1>
            </div>
              <div className="xl:w-1/3 flex flex-col justify-center items-center">
            <img src="/images/User-avatar.png" 
                 className="w-48 h-48"
            />
            </div>

        <div className="flex flex-col justify-center items-center mx-4 xl:w-1/3">
            <h2 className="text-xl lg:text-2xl font-bold">Frank Kristian Fosse</h2>
            <p className="font-light text-whitePrimary/60 text-xs sm:w-2/4 lg:text-sm">
                I'm a Front-End Developer with a passion for crafting modern, responsive, and user-friendly websites and applications.
            </p>
        </div>
        </div>
        </>
    )
}

export default Profile;