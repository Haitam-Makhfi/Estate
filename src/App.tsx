import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faStar, faX } from "@fortawesome/free-solid-svg-icons";
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
  const [bool, setBool] = useState(false);
  const [counter, setCounter] = useState(0);
  const observer1 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show1");
      }
    });
  });
  const observer2 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show2");
      }
    });
  });
  useEffect(() => {
    const hiddenElements1 = document.querySelectorAll(".pop-left");
    const hiddenElements2 = document.querySelectorAll(".pop-right");
    hiddenElements1.forEach((el) => {
      observer1.observe(el);
    });
    hiddenElements2.forEach((el) => {
      observer2.observe(el);
    });
  });
  useEffect(() => {
    if (bool) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [bool]);
  function right() {
    if (window.innerWidth <= 768) {
      if (counter >= 5) return null;
      else setCounter((p) => p + 1);
    } else {
      if (counter >= 3) return null;
      else setCounter((p) => p + 1);
    }
  }
  function left() {
    if (counter <= 0) return null;
    else setCounter((p) => p - 1);
  }
  return (
    <div className="overflow-x-hidden w-full">
      <header className="w-full h-[100vh] text-white capitalize relative">
        <nav className=" px-3 sm:px-10  flex justify-between items-center">
          <img src={logo} alt="logo image" className="w-20" />
          <ul className=" gap-5 cursor-pointer hidden sm:flex">
            <a className="hover:text-slate-400" href="#">
              home
            </a>
            <a className="hover:text-slate-400" href="#brand">
              about
            </a>
            <a className="hover:text-slate-400" href="#projects">
              projects
            </a>
            <a className="hover:text-slate-400" href="#feedback">
              testimonials
            </a>
          </ul>
          <button className="cursor-pointer bg-white text-black px-5 py-2 rounded-3xl hidden sm:block">
            Sign up
          </button>
          <button
            className="text-3xl mr-3 cursor-pointer sm:hidden"
            onClick={() => {
              setBool(true);
              console.log(bool);
            }}
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
        </nav>
        <div
          className={`modal w-[80%] translate-x-[100%] animate-[nav-left_0.6s] bg-white h-full absolute right-0 top-0 z-10 
            `}
          style={bool ? { display: "block" } : { display: "none" }}
        >
          <div
            className="flex justify-end mr-6.5 mt-7 text-black font-bold  text-2xl cursor-pointer"
            onClick={() => {
              setBool(false);
            }}
          >
            <FontAwesomeIcon icon={faX} />
          </div>
          <ul className=" gap-5 flex flex-col font-bold items-center ">
            <a
              className="text-black cursor-pointer hover:text-slate-400 "
              onClick={() => {
                setBool(false);
              }}
            >
              home
            </a>
            <a
              className="text-black cursor-pointer hover:text-slate-400"
              href="#brand"
              onClick={() => {
                setBool(false);
              }}
            >
              about
            </a>
            <a
              className="text-black cursor-pointer hover:text-slate-400"
              href="#projects"
              onClick={() => {
                setBool(false);
              }}
            >
              projects
            </a>
            <a
              className="text-black cursor-pointer hover:text-slate-400"
              href="#feedback"
              onClick={() => {
                setBool(false);
              }}
            >
              testimonials
            </a>
          </ul>
        </div>
        <section className="hero-text w-full absolute top-[50%] left-[50%] translate-x-[-50%] animate-[pop-up_1s] flex flex-col items-center">
          <h1 className="w-[90%] sm:w-[20ch] text-4xl lg:text-6xl font-bold text-center ">
            explore homes that fit your dreams
          </h1>
          <div className="flex gap-5 justify-center items-center pt-7">
            <button className="cursor-pointer border-2 rounded-lg px-5 h-12 ">
              projects
            </button>
            <button className="cursor-pointer bg-sky-600 px-5  h-12 rounded-lg text-nowrap">
              contact us
            </button>
          </div>
        </section>
      </header>
      <main>
        <section
          className="brand pop-right capitalize w-[70%] my-15 mx-auto translate-x-[-20%]"
          id="brand"
        >
          <div className="title flex flex-col items-center mb-3">
            <h2>
              <b>about</b>
              <span className="border-b-1 ml-3">Our brand</span>
            </h2>
            <p className="mt-3 w-70 text-center text-slate-500 text-sm">
              passionate about properties ,dedicated to your vision
            </p>
          </div>
          <div className="wrapper flex flex-wrap md:flex-nowrap items-center  justify-center md:justify-between">
            <div className="brand-content md:w-[48%] grid grid-cols-2 items-center order-2 md:order-1">
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
                <p>mn.sq.ft. delivered</p>
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
              className="apartment-img md:w-[48%] md:h-[30rem] object-cover object-center order-1 md:order-2"
            />
          </div>
        </section>
        <section
          className="projects pop-left capitalize w-[70%] my-40 mx-auto translate-x-[20%]"
          id="projects"
        >
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
                className=" py-1 px-2 rounded-md text-sky-600 text-xl select-none bg-white cursor-pointer"
                onClick={left}
              >
                &lt;
              </span>
              <span
                className="galery-controles py-1 px-2 rounded-md text-sky-600 text-xl bg-white cursor-pointer ml-2 select-none"
                onClick={right}
              >
                &gt;
              </span>
            </div>
            <div className="img-container flex md:gap-4 overflow-hidden pt-7">
              {projectImgs.map((img) => {
                return (
                  <>
                    <img
                      className="w-full md:w-60 object-cover object-center projectImg transition  hover:blur-[2px] cursor-pointer"
                      src={img.img}
                      alt="project image"
                      key={img.id}
                      style={
                        window.innerWidth <= 768
                          ? { translate: `${-100 * counter}%` }
                          : { translate: `${-120 * counter}%` }
                      }
                    />
                  </>
                );
              })}
            </div>
          </div>
        </section>
        <section
          className="feedback pop-right capitalize w-[70%] mb-40 mx-auto translate-x-[-20%]"
          id="feedback"
        >
          <div className="title flex flex-col items-center mb-10">
            <h2>
              <b>customer</b>
              <span className="border-b-1 ml-3">Testimonials</span>
            </h2>
            <p className="mt-3 w-70 text-center text-slate-500 text-sm">
              real stories from those who found home with us
            </p>
          </div>
          <div className="wraper flex flex-wrap lg:flex-nowrap gap-5">
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
        <footer className="bg-blue-950 min-h-[30vh] grid grid-cols-1 lg:grid-cols-[2fr_1fr_2fr] px-15 capitalize">
          <div className="footer-main-content pt-2">
            <img src={logo} alt="logo" className="w-18 h-18 -ml-5" />
            <p className="text-slate-300 text-[13px] font-medium lg:pl-5 lg:w-[60ch]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
              harum, quo id minus illo recusandae dolorem vel voluptatum
              assumenda ad.
            </p>
          </div>
          <div className="links pt-5 ">
            <span className="text-white text-lg font-bold">company</span>
            <ul className="capitalize text-slate-400 font-bold mt-3  text-sm leading-7 ">
              <li>home</li>
              <li>about us</li>
              <li>contact us</li>
              <li>privacy policy</li>
            </ul>
          </div>
          <div className="subscription pt-5 hidden lg:block">
            <span className="text-white text-lg font-bold">
              subscribe to our newsletter
            </span>
            <p className="text-slate-300 text-[13px] w-[40ch] font-medium mt-3">
              the latest news,articles,and resources,sent to your inbox weekly
            </p>
            <div className="wrap mt-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-2 py-1 rounded-xs font-bold bg-blue-900 text-slate-100 outline-0"
              />
              <button className="cursor-pointer bg-sky-600 px-3 h-9 ml-3 text-white rounded-sm font-light">
                Subscribe
              </button>
            </div>
          </div>
          <div className="cr text-center lg:col-span-3 text-white text-sm font-light pt-5">
            copyright 2024&copy;greatStack.all rights reserved
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
