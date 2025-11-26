import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <a className="absolute top-4 w-36 left-4" href="https://hackclub.com">
        <img src="/hackclub.png" alt="Hack Club Logo" className="w-36 pt-4" />
      </a>

      <div className="flex flex-col pt-4 pb-0 m-0">
        <img src="/fudge.png" alt="Fudge Logo" />
      </div>

      <main className="flex flex-col items-center justify-center">
        <h1
          className="text-cyan-400 font-bold text-xl"
          style={{ fontFamily: "Comic Sans MS, cursive" }}
        >
          you ship: any project you want!
        </h1>
        <h1
          className="text-green-400 font-bold text-xl"
          style={{ fontFamily: "Comic Sans MS, cursive" }}
        >
          we ship: fudge from the shelburne country store! right next to hack club hq!
        </h1>

        {/* --- FIXED: responsive offsets for mobile --- */}
        <div className="relative mt-4 pb-5">
          <img
            src="/kiss.png"
            alt="kiss emoji"
            className="absolute -top-14 w-36 h-auto left-0 md:-left-44"
          />
          <img src="/shelburne.jpg" alt="Shelburne" className="w-200 h-auto" />
          <img
            src="/smiley.png"
            alt="smiley emoji"
            className="absolute -bottom-6 w-36 h-auto right-0 md:-right-44 mb-1"
          />
        </div>

        <div className="relative flex flex-col items-center">
          <img
            src="/chocolate.png"
            alt="submit button"
            className="w-50 h-50 drop-shadow-2xl"
          />
          <p
            className="absolute -ml-12 mt-4 inset-0 flex items-center justify-center text-white font-bold text-xl z-10"
            style={{ fontFamily: "Comic Sans MS, cursive", transform: "rotate(-7deg)" }}
          >
            Hello
          </p>
        </div>

        <div>
          <h1
            style={{ fontFamily: "Comic Sans MS, cursive" }}
            className="text-xl text-center"
          >
            how this works?? Hello
          </h1>
          <div className="flex flex-row overflow-x-auto no-scrollbar">
            <img src="/rainbow.png" alt="rainbow" className="w-100 h-auto mt-4" />
            <img src="/rainbow.png" alt="rainbow" className="w-100 h-auto mt-4" />
            <img src="/rainbow.png" alt="rainbow" className="w-100 h-auto mt-4" />
            <img src="/freak.gif" alt="sonic freak" className="w-100 h-auto mt-4" />
          </div>

          <p
            className="text-xl text-center mt-4 font-extrabold text-cyan-400"
            style={{ fontFamily: "Comic Sans MS, cursive" }}
          >
            So erm. Basiacally. Uhhhhhhhhhh
          </p>

          <div
            className="text-2xl text-center mt-4 text-cyan-400"
            style={{ fontFamily: "Comic Sans MS, cursive" }}
          >
            <p>1. Make a project</p>
            <p>2. Track it with this thing Called Hackatime</p>
            <p>3. Work on it fior liek 3 hours</p>
            <p>4. Get Fudge!</p>
          </div>
          <div className="flex flex-col md:flex-row text-3xl text-pink-400 font-bold gap-4"
            style={{ fontFamily: "Comic Sans MS, cursive" }}
          >
            <img src="/free-smiley1.gif" alt="free smiley" className="w-100 h-auto mt-4 mb-4" />

            <div className="flex flex-col">
              <p className="pt-10 text-green-400">mmffgghhhhhhhhhhh.....</p>
              <img src="/unpleasant.jpeg" alt="unpleasant" className="w-50 h-auto mt-50 ml-30" />
            </div>

            <div className="flex flex-col md:pl-60 pt-4 md:pt-20">
              <p>Work for 3 hours ---&gt; Half a pound of FUDGEr</p>
              <p>Work for 5 hours ---&gt; FULL pound of FUDGE!!D</p>

              <div className="relative">
                <img src="/country-store.png" alt="country store" className="w-200 h-auto mt-4" />
                <img
                  src="/eyeroll-smiley.gif"
                  alt="eyeroll smiley"
                  className="absolute -top-2 right-0 md:-right-8 w-36 h-auto"
                />
                <img
                  src="/heart-smiley.gif"
                  alt="heart smiley"
                  className="absolute -bottom-2 left-0 md:-left-8 w-36 h-auto"
                />
              </div>
            </div>
          </div>
          <p style={{ fontFamily: "Comic Sans MS, cursive" }} className="flex justify-center pt-10 text-2xl text-fuchsia-400 font-bold ">made with Hunger by Reem for hack club!</p>
        </div>
        
      </main>
         <span className="hidden lg:block text-gray-600 text-sm mt-8 absolute right-[-2000px] whitespace-nowrap" style={{ fontFamily: 'Comic Sans MS, cursive' }}>wow, you scrolled all this way? kinda cringe ngl</span>
    </div>
  );
}
