import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import logo from "./images/estate logo no-bg.png";
import apartment from "./images/apartment.jpg";
import { useEffect, useState } from "react";
import img1 from "./images/ai-generated-8699185_1280.jpg";
import img2 from "./images/house-8372418_1280.jpg";
import img3 from "./images/residence-2219972_1280.jpg";
import img4 from "./images/villa-4555818_1280.jpg";
import img5 from "./images/villa-6482427_1280.jpg";
import img6 from "./images/villa-7303286_1280.jpg";
import pfp1 from "./images/download.jfif";
import pfp2 from "./images/download (2).jfif";
import pfp3 from "./images/download (1).jfif";
function App() {
  const projectImgs = [
    { img: img1, id: 1 },
    { img: img2, id: 2 },
    { img: img3, id: 3 },
    { img: img4, id: 4 },
    { img: img5, id: 5 },
    { img: img6, id: 6 },
  ];
  // const feedbackImages = [
  //   { pfp: pfp1, id: 7 },
  //   { pfp: pfp2, id: 8 },
  //   { pfp: pfp3, id: 9 },
  // ];
  const [counter, setCounter] = useState(0);
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
  // const projectElements = document.querySelectorAll(".projectImg");
  function right() {
    if (counter >= 2) return null;
    else setCounter((p) => p + 1);
  }
  function left() {
    if (counter <= 0) return null;
    else setCounter((p) => p - 1);
  }
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
        <section className="brand pop-left capitalize w-[70%] my-15 mx-auto translate-x-[20%]">
          <div className="title flex flex-col items-center mb-3">
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
        <section className="projects pop-left capitalize w-[70%] my-40 mx-auto translate-x-[20%]">
          <div className="title flex flex-col items-center mb-3">
            <h2>
              <b>projects</b>
              <span className="border-b-1 ml-3">Completed</span>
            </h2>
            <p className="mt-3 w-70 text-center text-slate-500 text-sm">
              crafting spaces, building legacies-explore our portfolio
            </p>
          </div>
          <div className="wraper">
            <div className="galery-controles font-bold">
              <span
                className=" py-1 px-2 rounded-md text-sky-600 text-xl bg-white cursor-pointer"
                onClick={left}
              >
                &lt;
              </span>
              <span
                className="galery-controles py-1 px-2 rounded-md text-sky-600 text-xl bg-white cursor-pointer ml-2"
                onClick={right}
              >
                &gt;
              </span>
            </div>
            <div className="img-container flex gap-4 overflow-hidden pt-7">
              {projectImgs.map((img) => {
                return (
                  <>
                    <img
                      className="w-60 object-cover object-center projectImg transition blur-[2px] hover:blur-none cursor-pointer"
                      src={img.img}
                      alt="project image"
                      key={img.id}
                      style={{ translate: `${-120 * counter}%` }}
                    />
                  </>
                );
              })}
            </div>
          </div>
        </section>
        <section className="feedback pop-left capitalize w-[70%] my-15 mx-auto translate-x-[20%] min-h-[100vh]">
          <div className="title flex flex-col items-center mb-10">
            <h2>
              <b>customer</b>
              <span className="border-b-1 ml-3">Testimonials</span>
            </h2>
            <p className="mt-3 w-70 text-center text-slate-500 text-sm">
              real stories from those who found home with us
            </p>
          </div>
          <div className="wraper flex gap-5">
            <div className="card bg-white rounded-xs flex flex-col items-center justify-center px-5 py-13 shadow-xl">
              <img
                src={pfp1}
                alt=""
                className="pp w-17 h-17 rounded-[50%] object-cover mb-3"
              />
              <h3 className="text-lg font-bold">lora jackman</h3>
              <span className="text-xs font-medium text-slate-600">
                marketing manager
              </span>
              <div className="stars text-sky-600 text-sm my-3 flex gap-2">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>
              <p className=" text-[0.9rem] text-center font-medium text-slate-600">
                from the very first meeting, they understood my vision and
                helped me find the perfect property. their attention to detail
                and commitlent to client satisfaction is unmatched
              </p>
            </div>
            <div className="card bg-white rounded-xs flex flex-col items-center justify-center px-5 py-13 shadow-xl">
              <img
                src={pfp2}
                alt=""
                className="pp w-17 h-17 rounded-[50%] object-cover mb-3"
              />
              <h3 className="text-lg font-bold">richard nelson</h3>
              <span className="text-xs font-medium text-slate-600">
                marketing manager
              </span>
              <div className="stars text-sky-600 text-sm my-3 flex gap-2">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>
              <p className=" text-[0.9rem] text-center font-medium text-slate-600">
                from the very first meeting, they understood my vision and
                helped me find the perfect property. their attention to detail
                and commitlent to client satisfaction is unmatched
              </p>
            </div>
            <div className="card bg-white rounded-xs flex flex-col items-center justify-center px-5 py-13 shadow-xl">
              <img
                src={pfp3}
                alt=""
                className="pp w-17 h-17 rounded-[50%] object-cover mb-3"
              />
              <h3 className="text-lg font-bold">nicole washington</h3>
              <span className="text-xs font-medium text-slate-600">
                marketing manager
              </span>
              <div className="stars text-sky-600 text-sm my-3 flex gap-2">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>
              <p className=" text-[0.9rem] text-center font-medium text-slate-600">
                from the very first meeting, they understood my vision and
                helped me find the perfect property. their attention to detail
                and commitlent to client satisfaction is unmatched
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
