import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function HomePageBody() {
  return (
    <main>
      <section id="hero-section" className="relative h-[800px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            src="https://storage.googleapis.com/uxpilot-auth.appspot.com/ab95986f41-1ca299a1a8c35da57f2d.png"
            alt="professional football turf field at dusk with dark dramatic lighting, stadium lights glowing, high contrast photography, professional sports venue"
          />
          <div
            className="absolute inset-0 hero-bg"
            style={{
              background:
                "linear-gradient(135deg, rgba(10, 25, 49, 0.85) 0%, rgba(0, 0, 0, 0.7) 100%)",
            }}
          ></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 h-full flex items-center">
          <div className="max-w-4xl">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-primary text-primary-foreground font-bold text-sm uppercase tracking-wider rounded-full">
                Premium Turf Experience
              </span>
            </div>

            <h1 className="text-7xl font-black leading-tight mb-6">
              Own The Turf.
              <br />
              <span className="text-primary">Book Your Slot Now.</span>
            </h1>

            <p className="text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed">
              Experience world-className football on our premium artificial
              turf. State-of-the-art facilities, professional lighting, and
              unmatched playing conditions await.
            </p>

            <div className="flex items-center space-x-6">
              <Link
                to={"/booking"}
                className="bg-primary text-primary-foreground px-12 py-5 rounded-lg font-bold text-xl uppercase tracking-wide hover:bg-white transition-all duration-300 transform hover:scale-105 shadow-2xl"
              >
                <FontAwesomeIcon
                  icon={["fas", "calendar-check"]}
                  className="mr-3"
                />
                Book Now
              </Link>

              <Link
                to={"/availability"}
                className="border-2 border-white px-8 py-5 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary-foreground transition-all duration-300"
              >
                View Availability
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <FontAwesomeIcon
            icon={["fas", "chevron-down"]}
            className="text-primary"
          />
        </div>
      </section>

      <section
        id="features-section"
        className="py-24 bg-linear-to-b from-background to-black"
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">
              Why Choose Radiant Sports?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Experience the difference with our premium facilities and
              professional-grade amenities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div
              id="feature-1"
              className="bg-linear-to-br from-backborder-background to-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-primary transition-all duration-300 transform hover:scale-105"
            >
              <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mb-6">
                <FontAwesomeIcon
                  icon={["fas", "lightbulb"]}
                  className="text-primary-foreground text-2xl"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4">Professional Lighting</h3>
              <p className="text-gray-400 leading-relaxed">
                State-of-the-art LED floodlights ensure perfect visibility for
                day and night matches with uniform illumination.
              </p>
            </div>

            <div
              id="feature-2"
              className="bg-linear-to-br from-backborder-background to-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-primary transition-all duration-300 transform hover:scale-105"
            >
              <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mb-6">
                <FontAwesomeIcon
                  icon={["fas", "seedling"]}
                  className="text-primary-foreground text-2xl"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4">Premium Turf</h3>
              <p className="text-gray-400 leading-relaxed">
                FIFA-approved artificial grass surface providing optimal ball
                roll, bounce, and player safety in all conditions.
              </p>
            </div>

            <div
              id="feature-3"
              className="bg-linear-to-br from-backborder-background to-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-primary transition-all duration-300 transform hover:scale-105"
            >
              <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mb-6">
                <FontAwesomeIcon
                  icon={["fas", "clock"]}
                  className="text-primary-foreground text-2xl"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4">Flexible Booking</h3>
              <p className="text-gray-400 leading-relaxed">
                24/7 online booking system with instant confirmation and
                flexible time slots to fit your schedule.
              </p>
            </div>

            <div
              id="feature-4"
              className="bg-linear-to-br from-backborder-background to-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-primary transition-all duration-300 transform hover:scale-105"
            >
              <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mb-6">
                <FontAwesomeIcon
                  icon={["fas", "shield-halved"]}
                  className="text-primary-foreground text-2xl"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4">Safety First</h3>
              <p className="text-gray-400 leading-relaxed">
                Advanced drainage system, shock-absorbing base, and regular
                maintenance ensure player safety and comfort.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="cta-section"
        className="py-20 bg-linear-to-r from-primary to-green-400"
      >
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-5xl font-black text-primary-foreground mb-6">
            Ready to Play?
          </h2>
          <p className="text-xl text-primary-foreground mb-10 max-w-2xl mx-auto opacity-90">
            Join thousands of players who have chosen Radiant Sports for their
            football experience. Book your slot today and feel the difference.
          </p>

          <div className="flex justify-center space-x-6">
            <Link
              to={"/booking"}
              className="bg-background px-12 py-5 rounded-lg font-bold text-xl uppercase tracking-wide hover:bg-black transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              <FontAwesomeIcon icon={["fas", "rocket"]} className="mr-3" />
              Book Your Slot
            </Link>

            <Link
              to={"tel:911"}
              className="border-2 border-background text-primary-foreground px-8 py-5 rounded-lg font-semibold text-lg hover:bg-background hover:text-foreground hover transition-all duration-300"
            >
              <FontAwesomeIcon icon={["fas", "phone"]} className="mr-3" />
              Call Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
