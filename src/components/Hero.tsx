import AsciiRotator from "./ASCIIRotator";

const asciiTexts = [
  String.raw`
    ___  ___   _______    ___        ___        ________   ___   ___   ___
   |\  \|\  \ |\  ___ \  |\  \      |\  \      |\   __  \ |\  \ |\  \ |\  \
   \ \  \\\  \\ \   __/| \ \  \     \ \  \     \ \  \|\  \\ \  \\ \  \\ \  \
    \ \   __  \\ \  \_|/__\ \  \     \ \  \     \ \  \\\  \\ \  \\ \  \\ \  \
     \ \  \ \  \\ \  \_|\ \\ \  \____ \ \  \____ \ \  \\\  \\ \__\\ \__\\ \__\
      \ \__\ \__\\ \_______\\ \_______\\ \_______\\ \_______\\|__| \|__| \|__|
        \|__|\|__| \|_______| \|_______| \|_______| \|_______|    ___   ___   ___
                                                                 |\__\ |\__\ |\__\
                                                                 \|__| \|__| \|__|
  `,
  String.raw`
  ___       __   _______   ___       ________  ________  _____ ______   _______
|\  \     |\  \|\  ___ \ |\  \     |\   ____\|\   __  \|\   _ \  _   \|\  ___ \
 \ \  \    \ \  \ \   __/|\ \  \    \ \  \___|\ \  \|\  \ \  \\\__\ \  \ \   __/|
   \ \  \  __\ \  \ \  \_|/_\ \  \    \ \  \    \ \  \\\  \ \  \\|__| \  \ \  \_|/__
    \ \  \|\__\_\  \ \  \_|\ \ \  \____\ \  \____\ \  \\\  \ \  \    \ \  \ \  \_|\ \
     \ \____________\ \_______\ \_______\ \_______\ \_______\ \__\    \ \__\ \_______\
      \|____________|\|_______|\|_______|\|_______|\|_______|\|__|     \|__|\|_______|
`,
  String.raw`
  ___       __   ___  ___  ________  _________  ________           ___  ___  ________
|\  \     |\  \|\  \|\  \|\   __  \|\___   ___|\   ____\         |\  \|\  \|\   __  \
 \ \  \    \ \  \ \  \\\  \ \  \|\  \|___ \  \_\ \  \___|_        \ \  \\\  \ \  \|\  \
  \ \  \  __\ \  \ \   __  \ \   __  \   \ \  \ \ \_____  \        \ \  \\\  \ \   ____\
   \ \  \|\__\_\  \ \  \ \  \ \  \ \  \   \ \  \ \|____|\  \        \ \  \\\  \ \  \___|
\ \____________\ \__\ \__\ \__\ \__\   \ \__\  ____\_\  \        \ \_______\ \__\
 \|____________|\|__|\|__|\|__|\|__|    \|__| |\_________\        \|_______|\|__|
                        \|_________|
`,
];

export default function Hero() {
  return (
    <section className=" border-[#c9c9c9] border-b">
      <div className="border-[#c9c9c9] bg-white border-x lg:mx-48 md:mx-16 m-0 gap-4 flex items-center justify-between md:py-24 py-6">
        <div className="flex flex-col flex-1 justify-center items-center text-center mx-auto">
          <div className="text-center overflow-x-auto">
            <AsciiRotator texts={asciiTexts} client:only="react" />
          </div>

          <p className="mt-8 text-2xl text-center font-monoHero font-bold md:text-5xl text-gray-600 max-w-2xl mx-auto w-max">
            Ctrl + Alt +{" "}
            <span className=" bg-primary text-white px-2 font-mono text-2xl md:text-5xl hover:bg-gray-800 transition rounded-md outline-2 outline-offset-1 outline-dashed outline-outline">
              <span className="border-[#c9c9c9] bg-[repeating-linear-gradient(135deg,rgba(201,201,201,0.1)_0px,rgba(201,201,201,0.1)_2px,rgba(0,128,255,0.1)_1px,rgba(0,128,255,0.1)_5px)] pl-2 rounded-md ">
                Build.
              </span>
            </span>
          </p>
          <p className="font-monoHero text-sm md:text-md m-4 max-w-3xl">
            I build things that work and sometimes things that almost do. Either
            way, I’m having fun pushing buttons until something cool happens.
          </p>
        </div>
      </div>
    </section>
  );
}
