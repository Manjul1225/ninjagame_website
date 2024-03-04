import Image from "next/image";

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          {/* <div className="w-full px-4 lg:w-1/2">
            <div
              className="relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/about/about-image-2.svg"
                alt="about image"
                fill
                className="drop-shadow-three dark:hidden dark:drop-shadow-none"
              />
              <Image
                src="/images/about/about-image-2-dark.svg"
                alt="about image"
                fill
                className="hidden drop-shadow-three dark:block dark:drop-shadow-none"
              />
            </div>
          </div> */}
          <div className="w-full px-4">
            <div className="max-w-[1400px]">
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  How to Play
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  1.  Players will have to interact with this red box/structure/booth.<br />
                  2.  This opens a window that shows how much each player is going to wage.<br />
                  3.	Window will display the username of the person that has interacted with the same red box. <br />
                  4.	Points are entered manually and MUST be equal, otherwise the game cannot start, the box “Points are not equal” will appear flashing, to remind both players that they need to type in the same number of points.<br />
                  5.	Once the same number of points are entered, both players must click the confirm button, for the game to start.<br />
                  6.	If any player changes the point value after one player has confirmed, the confirm buttons will reset and it will require both players to confirm again, after seeing the new point value.<br />
                  7.	If player 1 clicks confirm, it will show “Player 2 pending confirmation” until player 2 clicks his confirm button also.<br />
                  8.	Once both sides have confirmed, the window will close, and both players characters will be AUTOMATICALLY teleported into the game area, as shown below. <br />
                </p>
              </div>
              {/* <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Premier support
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </p>
              </div>
              <div className="mb-1">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Next.js
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt
                  consectetur adipiscing elit setim.
                </p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
