import SectionTitle from "../Common/SectionTitle";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const AboutSectionOne = () => {
  const List = ({ text }) => (
    <p className="mb-5 flex items-center text-lg font-medium text-body-color">
      <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
        {checkIcon}
      </span>
      {text}
    </p>
  );

  return (
    <section id="about" className="my-[62px]">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto max-w-[1400px] text-left">
              <SectionTitle
                title="BackStory"
                paragraph=""
                mb="30px"
              />
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  You are a young ninja, born into a world of shadows and secrets, where mastery of the martial arts and cunning intellect are prized above all else.<br />
                  
                  Raised in the hidden village of Shinobigakure, you have trained diligently under the watchful eyes of your sensei, honing your skills in the ancient arts of stealth, combat, and strategy.<br />

                  As you emerge from your training, the world of ninjas stretches out before you, a vast and dangerous landscape filled with rival clans, treacherous adversaries, and untold mysteries waiting to be unraveled. <br />
                  
                  With your keen senses and quick reflexes, you embark on a journey to prove yourself as the greatest ninja of your generation.<br />

                  Your path is fraught with challenges, from deadly traps and intricate puzzles to fierce battles against other skilled warriors. <br />
                  
                  Along the way, you encounter fellow ninjas who share your ambitions, forming alliances and rivalries that will shape your destiny.<br />

                  In your quest for mastery, you discover the existence of legendary gemstones said to possess unimaginable power. <br />
                  
                  These gemstones are coveted by ninjas far and wide, their secrets guarded by ancient guardians and hidden within the depths of perilous dungeons.<br />

                  Determined to claim these gemstones for yourself, you venture forth into the heart of danger, facing insurmountable odds and testing your skills to their limits. <br />
                  
                  But as you uncover the gemstones, you learn of a crucial caveat: each gemstone can only be consumed once.<br />

                  The realization of this limitation adds a new layer of complexity to your journey. <br />
                  
                  No longer can you simply collect every gemstone you find; instead, you must carefully consider the implications of each choice.<br />
                  
                  Once consumed, the power of the gemstone becomes a permanent part of your being, forever altering the course of your destiny.<br />

                  The decision of which gemstone to consume becomes a weighty one, as you weigh the benefits and consequences of each potential ability.<br /> 
                  
                  Will you choose the Diamond of Shadows, granting you unparalleled mastery of stealth and deception, allowing you to move unseen and strike from the shadows with deadly precision?<br /> 
                  
                  Or perhaps the Ruby of Flames, imbuing you with the fiery power of the elements, unleashing torrents of flame upon your foes and reducing them to ashes in moments?<br />

                  But beware, for you are not alone in your quest.<br /> 
                  
                  Other ninjas, equally skilled and ambitious, seek to claim the same prize, and in the shadowy world of shinobi, trust is a rare commodity indeed.<br /> 
                  
                  As you rise through the ranks and earn renown as a formidable warrior, you must navigate the intricate web of alliances and betrayals that define the ninja s way.<br /> 

                  In the end, only the strongest, smartest, and most cunning ninja will emerge victorious, their name whispered in awe and fear throughout the land.<br /> 
                  
                  Will you rise to the challenge and claim your rightful place among the legends of Shinobigakure, or will you fall prey to the myriad dangers that lurk in the shadows?<br /> 
                  
                  The choice is yours, young ninja. Choose wisely, for your destiny awaits.<br /> 
                </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
