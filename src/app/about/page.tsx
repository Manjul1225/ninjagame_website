import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

const AboutPage = () => {
  return (
    <>
      <div className="h-lvh align-middle justify-center flex flex-col w-full text-center ">
        <p className="text-[#F4B13E] text-[24px]">
          For support, or any bug reporting, please join our discord and reach out to us. 
        </p>
        <a className="text-blue-600 text-[24px] p-2" target="_blank" href="https://discord.gg/ninjastake">https://discord.gg/ninjastake</a>
      </div>
      {/* <Breadcrumb
        pageName="About Page"
        description="BackStory & How to play."
      />
      <AboutSectionOne />
      <AboutSectionTwo /> */}
    </>
  );
};

export default AboutPage;
