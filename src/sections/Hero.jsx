import { Container } from "@mui/material";
import { appleStore } from "../assets/image";
import { rating } from "../assets/icons";

const Hero = () => {
  return (
    <>
      <div>
        <Container fixed className="bg-slate-200 rounded-2xl">
          <div className="grid grid-cols-2 ml-8">
            <div className="left flex flex-col mt-8">
              <p className="mt-8 text-xl font-semibold text-gray-700">
                Ahed App
              </p>
              <h1 className="text-7xl font-bold leading-tight">
                Master your life <br />
                by mastering <br />
                emotions
              </h1>
              <div className="flex">
                <a href="https://www.apple.com/in/app-store/">
                  <img
                    src={appleStore}
                    alt="Downlaod on AppStore"
                    width={140}
                  />
                </a>
                <img
                  src={rating}
                  alt="rating"
                  width={140}
                  height={140}
                  className="ml-4"
                />
              </div>
            </div>
            <div className="right">
            <img src="https://storage.googleapis.com/web-api-media-uploads/media/Image_1_8d38f94793/Image_1_8d38f94793.svg" alt="feature-logo"/>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Hero;
