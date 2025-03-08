// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import logo from "./images/estate logo no-bg.png";
import apartment from "./images/apartment.jpg";
import { useEffect } from "react";
function App() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  });
  useEffect(() => {
    const hiddenElements = document.querySelectorAll(".pop-left");
    hiddenElements.forEach((el) => {
      observer.observe(el);
    });
  });
  return (
    <>
      <header className="w-full h-[100vh] text-white capitalize relative">
        <nav className="px-10  flex justify-between items-center">
          <img src={logo} alt="logo image" className="w-20" />
          <ul className="flex gap-5 cursor-pointer">
            <li className="hover:text-slate-400">home</li>
            <li className="hover:text-slate-400">about</li>
            <li className="hover:text-slate-400">projects</li>
            <li className="hover:text-slate-400">testimonials</li>
          </ul>
          <button className="cursor-pointer bg-white text-black px-5 py-2 rounded-3xl">
            Sign up
          </button>
        </nav>
        <section className="hero-text absolute top-[50%] left-[50%] translate-x-[-50%] animate-[pop-up_1s]">
          <h1>explore homes that fit your dreams</h1>
          <div className="flex gap-5 justify-center items-center pt-7">
            <button className="cursor-pointer border-2 rounded-lg px-5 h-12 ">
              projects
            </button>
            <button className="cursor-pointer bg-sky-600 px-5  h-12 rounded-lg">
              contact us
            </button>
          </div>
        </section>
      </header>
      <main>
        <section className="brand pop-left capitalize w-[70%] mx-auto pb-80 translate-x-[20%]">
          <div className="title flex flex-col items-center mt-10 mb-3">
            <h2>
              <b>about</b>
              <span className="border-b-1 ml-3">Our brand</span>
            </h2>
            <p className="mt-3 w-70 text-center text-slate-500 text-sm">
              passionate about properties ,dedicated to your vision
            </p>
          </div>
          <div className="wrapper flex items-center justify-between">
            <div className="brand-content w-[48%] grid grid-cols-2">
              <div className="years py-5">
                <b className="text-3xl">10+</b>
                <p>years of excellence</p>
              </div>
              <div className="projects py-5">
                <b className="text-3xl">12+</b>
                <p>projects completed</p>
              </div>
              <div className="delivered py-5">
                <b className="text-3xl">20+</b>
                <p>mn.sq.ft.delivered</p>
              </div>
              <div className="ongoing py-5">
                <b className="text-3xl">25+</b>
                <p>ongoing projects</p>
              </div>
              <p className="col-span-2">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste
                beatae soluta necessitatibus nobis magni aut ab rerum sunt
                doloremque, est illo quae molestiae officia ex, nostrum libero
                voluptates recusandae delectus!
              </p>
              <button className="cursor-pointer bg-sky-600 text-white w-max px-5 h-12 rounded-lg mt-5">
                learn more
              </button>
            </div>
            <img
              src={apartment}
              alt="apartment building"
              className="apartment-img w-[48%] h-[30rem] object-cover object-center"
            />
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
