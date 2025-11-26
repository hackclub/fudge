import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <a className="absolute top-4 w-36 left-4"href="https://hackclub.com">
        <img src="/hackclub.png" alt="Hack Club Logo" className= "w-36 pt-4" />
      </a>
      <div className="flex flex-col pt-4 pb-0 m-0">
        <img src="/fudge.png" alt="Fudge Logo"  />
  
      </div>
      <main className="flex flex-col items-center justify-center">
    <h1 className="text-cyan-400 font-bold" style={{ fontFamily: 'Comic Sans MS, cursive' }}>you ship: any project you want!</h1>
        <h1 className="text-green-400 font-bold" style={{ fontFamily: 'Comic Sans MS, cursive' }}>we ship: fudge!</h1>
        <div className="relative mt-4 pb-5">
          <img src="/kiss.png" alt="kiss emoji" className="absolute -top-14 -left-44 w-36 h-auto"/>
          <img src="/shelburne.jpg" alt="Shelburne" className="w-200 h-auto"/>
          <img src="/smiley.png" alt="smiley emoji" className="absolute -bottom-6 -right-44 w-36 h-auto mb-1"/>
          </div> 
          <div className="relative flex flex-col items-center">
            <img src="/chocolate.png" alt="submit button" className="w-50 h-50 drop-shadow-2xl" />
            <p className="absolute -ml-12 mt-4 inset-0 flex items-center justify-center text-white font-bold text-xl z-10" style={{ fontFamily: 'Comic Sans MS, cursive', transform: 'rotate(-7deg)' }}>Hello</p>
            </div> 
            <div>
          <h1 style={{ fontFamily: 'Comic Sans MS, cursive' }} className="text-xl text-center">how this works?? Hello</h1>
          <div className="flex flex-row">
          <img src="/rainbow.png" alt="rainbow" className="w-100 h-auto mt-4"/>
          <img src="/rainbow.png" alt="rainbow" className="w-100 h-auto mt-4"/>
          <img src="/rainbow.png" alt="rainbow" className="w-100 h-auto mt-4"/>
          <img src="/freak.gif" alt="sonic freak" className="w-100 h-auto mt-4"/>
        </div>
        <div className="text-xl text-center mt-4 text-cyan-400" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
           <p>So erm. Basiacally. Uhhhhhhhhhh</p>
            <p>Make a project </p>
        </div>
        </div>
        <span style={{ width: '10000px', textAlign: 'right', fontFamily: 'Comic Sans MS, cursive' }}>wow, you scrolled all this way? kinda cringe ngl</span>
      </main>
    </div>
  );
}
