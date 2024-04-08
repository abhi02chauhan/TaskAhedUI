import { Container } from "@mui/material";

const Vacancies = () => {
  return (
    <>
      <div className="h-screen py-20">
        <h1 className="text-5xl leading-loose font-bold pl-10  ml-24">
          Open Vacancies
        </h1>
        <div className="flex justify-center gap-5  p-10">
          <Container className=" bg-pink-50 rounded-2xl ">
            <div className="m-4 p-5">
              <h2 className="text-xl font-bold">Senior Full-Stack Engineer</h2>
              <ul className="list-disc	font-medium p-6">
                <li>Full-time position</li>
                <li>Berlin or remote</li>
                <li>$65-85k,0.5-1.50% equity share options</li>
              </ul>
              <button class="bg-black hover:bg-black text-white font-bold py-2 px-4 rounded-full">
                See Details
              </button>
            </div>
          </Container>
          <Container className="bg-pink-50 rounded-2xl ">
            <div className="m-4 p-5">
              <h2 className="text-xl font-bold">Senior Designer</h2>
              <ul className="list-disc font-medium p-6">
                <li>Full-time position</li>
                <li>Berlin or remote</li>
                <li>$65-85k,0.5-1.50% equity share options</li>
              </ul>
              <button class="bg-black hover:bg-black text-white font-bold py-2 px-4 rounded-full">
                See Details
              </button>
            </div>
          </Container>
          <Container className="bg-pink-50 rounded-2xl ">
            <div className="m-4 p-5">
              <h2 className="text-xl font-bold">Superstar Intern</h2>
              <ul className="list-disc font-medium p-6">
                <li>Full-time position</li>
                <li>Berlin or remote</li>
                <li>$65-85k,0.5-1.50% equity share options</li>
              </ul>
              <button class="bg-black hover:bg-black text-white font-bold py-2 px-4 rounded-full">
                See Details
              </button>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
};

export default Vacancies;
