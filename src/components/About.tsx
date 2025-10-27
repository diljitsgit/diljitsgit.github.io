export default function About() {
    return (
        <section
            className=" border-darkOutline border-b scroll-m-20"
            id="about"
        >
            <div className="border-[#c9c9c9] bg-darkBackground border-x lg:mx-48 md:mx-16 m-0 gap-4 flex items-center justify-between md:py-12 py-6 lg:px-32 md:px-12 px-4 bg-[linear-gradient(to_right,rgba(69,69,69,0.2)_1px,transparent_1px),linear-gradient(to_bottom,rgba(69,69,69,0.2)_1px,transparent_1px)] bg-[length:24px_24px]">
                <div className="flex flex-col justify-between items-center text-center text-white mx-auto gap-4">
                    <h2 className="text-5xl font-monoHero font-bold">
                        About me.
                    </h2>
                    <div className="font-mono text-md flex flex-col-reverse md:flex-row gap-12 justify-between items-center text-left">
                        <p className="text-justify md:text-left">
                            Hey! I'm Diljit, a design enthusiast who became a
                            frontend developer. I've explored visuals, editing,
                            and 3D projects. Eventually, I shifted my focus to
                            creating functional web experiences.
                            <br />
                            <br /> Now, I concentrate on clean, interactive
                            interfaces with some personality. I enjoy learning,
                            no matter the challenge. I often break things just
                            to improve them, and I'm always trying to pick up
                            new tools or methods.
                            <br />
                            <br /> Whether my work is creative or technical,
                            even a little messy, I'm open to trying it all.
                        </p>
                        <img
                            src="/Picture.png"
                            alt="For now this is a logo"
                            className="h-56 rounded-full"
                        ></img>
                    </div>
                </div>
            </div>
        </section>
    );
}
