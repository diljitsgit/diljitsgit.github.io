export default function About() {
  return (
    <section className=" border-darkOutline border-b">
      <div className="border-[#c9c9c9] bg-darkBackground border-x lg:mx-48 md:mx-16 m-0 gap-4 flex items-center justify-between md:py-12 py-6 lg:px-32 md:px-12 px-4">
        <div className="flex flex-col justify-between items-center text-center text-white mx-auto gap-4">
          <h2 className="text-5xl font-monoHero font-bold">About me.</h2>
          <div className="font-mono text-md flex flex-col-reverse md:flex-row gap-12 justify-between items-center text-left">
            <p className="text-justify md:text-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              non augue sed sapien malesuada malesuada. Nulla facilisi. Morbi ac
              lectus vitae lacus egestas rhoncus. Praesent facilisis, felis non
              ultricies dictum, odio neque euismod justo, vel bibendum lectus ex
              nec lorem.
            </p>
            <img
              src="/favicon.svg"
              alt="For now this is a logo"
              className="h-56 rounded-full"
            ></img>
          </div>
        </div>
      </div>
    </section>
  );
}
