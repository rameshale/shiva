import Img2 from "../assets/images/two.jpg";
const Inspiration = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20  md:mt-24 mt-16">
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-6">
          <img
            src={Img2}
            alt="Inspiration"
            className="w-full h-full object-cover rounded-md"
          />
        </div>

        <div className="flex flex-col gap-4 col-span-12 md:col-span-6 justify-center items-center">
          <div className="text-center md:text-start max-w-screen-lg mx-auto">
            <h5 className="font-semibold text-3xl md:text-4xl leading-normal ">
              Discover the Inspiration Behind Every Unique Piece at MOSHA
              Concepts
            </h5>
          </div>
          <div className="text-center md:text-start">
            <p className="text-base md:text-lg text-gray-500 mt-2">
              At MOSHA Concepts, every creation tells a story, inspired by the
              beauty of art, the elegance of architecture, and the flair of
              fashion. Our products are not just items; they are reflections of
              contemporary culture, crafted with care and creativity. Join us on
              a journey where each piece adds a touch of inspiration to your
              home.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Inspiration;
