import Image from "next/image";

const About = () => {
  return (
    <div
      id="about"
      className="w-full h-full md:h-screen flex flex-col-reverse md:flex-row justify-center items-center"
    >
      {/* About Image */}
      <div className="w-full h-full md:w-1/2 md:p-3">
        <Image
          src="/images/casa17.jpg"
          alt="casa lalla main"
          width={1000}
          height={1000}
          className="w-full h-full object-cover"
        />
      </div>

      {/* About Text */}
      <div className="w-full h-full md:w-1/2 flex flex-col justify-center items-center text-center px-5 md:px-10 py-10">
        <span className="font-semibold text-lg md:text-xl tracking-widest">
          ABOUT US
        </span>
        <p className="mb-5 text-base md:text-lg">
          {`The restaurant Casa Lalla Takerkoust  is a destination in itself. The menus fuse global gastronomy with local, organic ingredients. Holidaymakers alike are invited to take a seat on the bright, airy terrace for lunch, soaking up the magical Mediterranean ambience and those spectacular Takerkoust Lake.
            Lunchs relax to a soundtrack of live artists and DJs playing chillout music with a world influence twist while sipping on cocktails served from the  bar.`}
        </p>
      </div>
    </div>
  );
};

export default About;
