import Link from "next/link";
import Image from "next/image";
const heroContent = {
  text: {
    subheading: "Welcome to FamSec",
    heading: "Protecting Families, Securing Futures",
    description:
      "We understant that protecting your loved ones is of utmost importance. That's why we are didicated to providing comprehensive soulutions tailored to your family's unique needs. Our export team is committed to creating a solid foundation of security and peace of mind of you and your loved ones.",
  },
  images: {
    img1: "/images/hero-img-1-min.jpg",
    img2: "/images/hero-img-2-min.jpg",
    img3: "/images/hero-img-3-min.jpg",
    img4: "/images/hero-img-4-min.jpg",
    img5: "/images/hero-img-5-min.jpg",
  },
};
const Hero = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="lg:flex justify-between items-center">
          <div className="lg:w-5/12 mb-10 lg:mb-0">
            {heroContent.text.subheading && (
              <span className="inline-block py-0.5 pl-3 mb-7 relative before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-2/3 before:bg-yellowLight before:z-[-1]">
                {heroContent.text.subheading}
              </span>
            )}
            {heroContent.text.heading && (
              <h1 className="text-4xl lg:text-5xl font-bold text-heading mb-7">
                {heroContent.text.heading}
              </h1>
            )}
            {heroContent.text.description && (
              <p className="leading-relaxed text-body mb-7">
                {heroContent.text.description}
              </p>
            )}
            <div className="flex space-x-3">
              <Link
                href=""
                className="py-4 px-5 bg-primary rounded-lg text-white hover:bg-[#134761] duration-300 transition-all ease-in-out hover:shadow-lg relative top-0 hover:-top-0.5"
              >
                Get Started
              </Link>
              <Link
                href=""
                className="py-4 px-5 bg-secondary rounded-lg text-white hover:shadow-lg duration-300 transition-all ease-in-out relative top-0 hover:bg-[#179792] hover:-top-0.5"
              >
                How it works?
              </Link>
            </div>
          </div>
          <div className="lg:w-6/12 space-y-2">
            <div className="flex space-x-2 items-stretch">
              <div className="w-8/12">
                {heroContent.images.img1 && (
                  <Image
                    src={heroContent.images.img1}
                    width={397}
                    height={406}
                    alt="heroimg1"
                    className="object-cover h-full w-full  rounded-2xl"
                  />
                )}
              </div>
              <div className="w-4/12">
                <div className="grid grid-cols-2 gap-2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
