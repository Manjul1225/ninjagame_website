const AboutSectionTwo = () => {
  return (
    <section className="my-[62px]">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
