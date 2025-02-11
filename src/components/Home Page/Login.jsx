import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
// import { FiMail, FiLock } from 'lucide-react';

const testimonials = [
  {
    text: "With Realto, we have been able to move to another country in 4 weeks. Incredible!",
    author: "- Eliska Trebalska",
  },
  {
    text: "First touch with Realto has been amazing; the platform works effortlessly and delivers results.",
    author: "- Jurek Jakowski",
  },
  {
    text: "Realto made our dreams come true; highly recommend to anyone looking for seamless service.",
    author: "- Alex Doe",
  },
];

const Login = ({ openRegisterModal, closeLoginModal }) => {
  // const [currentIndex, setCurrentIndex] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [role, setRole] = useState("student");
  // const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Handle from submission
  const handleLogin = async (e) => {
    e.preventDefault();

    //Input Validation
    if (!email || !password) {
      setError("Please fill all fields");
      return;
    }

    const openRegisterModal = () => {
      navigate("/register"); // This will navigate to the register page
    };

    try {
      const response = await axios.post(
        // "https://upto-skills.onrender.com/api/auth/login",
        {
          email,
          password,
          role,
        }
      );
      localStorage.setItem("token", response.data.token);
      alert("Login Successful");

      closeLoginModal();
    } catch (err) {
      setError(err.response?.data?.msg || "An error occurred");
    }
  };

  return (
    <div className="flex items-center justify-center  bg-transparent p-4">
      <div className="flex flex-col sm:flex-row border border-black bg-white rounded-2xl shadow-lg overflow-hidden w-full max-w-3xl justify-center">
        {/* Left Panel */}
        <div className="w-[400px] p-5 bg-[#03BCA5] text-white rounded-l-2xl flex flex-col">
          {/* <div className="bg-white p-4 pt-2 rounded-3xl">
          </div> */}
          <img src="/UptoSkills.png" alt="UptoSkills" className="w-full" />

          <h2 className="text-2xl font-bold mt-8">
            Start your remarkable <br />
            journey with us!
          </h2>
          <p className="text-sm mt-4 font-light">
            Step into a world where potential meets possibility welcome to
            UptoSkills, where your journey to mastery begins!
          </p>

          {/* <div className="mt-16 relative">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`absolute w-full transform transition-all duration-500 ${
                  index === currentIndex
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-full"
                }`}
              >
                <div className="bg-white rounded-xl p-6 text-gray-800 shadow-lg">
                  <p className="text-sm italic mb-2">{testimonial.text}</p>
                  <span className="text-sm font-semibold">
                    {testimonial.author}
                  </span>
                </div>
              </div>
            ))}
          </div> */}

          {/* <div className="flex justify-center gap-2 mt-32">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  index === currentIndex ? "bg-[#FF6D34]" : "bg-gray-400"
                }`}
              />
            ))}
          </div> */}
        </div>

        {/* Right Panel */}
        <div className="w-full p-6 bg-white rounded-r-2xl flex flex-col items-center justify-center md:w-1/2">
          <div className="relavite">
            <button
              onClick={closeLoginModal}
              className="absolute -mt-7 ml-[160px] text-2xl hover:text-orange-500"
            >
              ×
            </button>
          </div>

          <div className="w-full max-w-[350px]">
            <div className="flex  justify-center mb-4 h-12 ">
              <img src="/UptoSkills.png" alt="UptoSkills" />
            </div>

            <div className="flex justify-center mb-2  ">
              <div className="flex bg-gray-200 rounded-lg  mb-3 ">
                {["student", "hr", "faculty"].map((r) => (
                  <button
                    key={r}
                    className={`px-4 py-2 rounded-lg h-[38px] justify-center  ${
                      role === r ? "bg-blue-600 text-white" : "bg-transparent"
                    }`}
                    onClick={() => setRole(r)}
                  >
                    {r.charAt(0).toUpperCase() + r.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            <form
              onSubmit={handleLogin}
              className="space-y-4 w-full border border-gray-400 shadow-2xl rounded-lg p-4  max-w-sm"
            >
              <p className="text-sm text-[#414143] font-normal text-center">
                Empower your experience, sign up for a free account today
              </p>

              {error && <div className="text-red-500 text-sm">{error}</div>}
              <div className="flex flex-col gap-2">
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    aria-label="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-1 border border-gray-400 rounded-lg focus:border-[#FF6D34] outline-none"
                    required
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
                    <img src="/Email-Icon.png" alt="Email-Icon" />
                  </span>
                </div>

                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    value={password}
                    aria-label="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full p-1 border border-gray-400 rounded-lg focus:border-[#FF6D34] outline-none"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 bg-transparent border-none"
                  >
                    {showPassword ? "🐵" : "🙈"}{" "}
                  </button>
                </div>

                <div className="text-right -mt-1">
                  <a
                    href="#"
                    className="text-sm text-[#FF6D34] hover:text-[#ff5722]"
                  >
                    🔒 Forgot Password?
                  </a>
                </div>

                <button
                  type="submit"
                  className="w-full bg-orange-500 text-white p-2 rounded hover:bg-orange-600 cursor-pointer"
                >
                  Login
                </button>
              </div>
            </form>
            {/* <Link to="/Register"> */}
            <button
              type="button"
              onClick={openRegisterModal}
              className=" mt-4 w-full max-w-sm p-2  border border-gray-400 shadow-2xl rounded-lg focus:border-[#FF6D34] outline-none text-black-600 hover:border-orange-500"
            >
              Don't hvae an Account{" "}
              <span className="text-orange-500">Sign Up</span>
            </button>
            {/* </Link> */}

            <div className="mt-4 ">
              <div className="flex items-center">
                <div className="flex-1 h-px bg-gray-300"></div>
                <span className="px-4 text-sm text-gray-500">
                  Or Continue With
                </span>
                <div className="flex-1 h-px bg-gray-300"></div>
              </div>

              <div className="flex flex-col md:flex-row justify-center gap-4 mt-4 w-full">
                <button
                  className="flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:border-[#FF6D34] hover:bg-[#fef3ec] transition-colors bg-transparent w-full md:w-auto"
                  aria-label="Sign in with Google"
                >
                  <img src="/google.png" alt="Google" className="w-6 h-6" />
                  <span className="text-gray-700">Google</span>
                </button>

                <button
                  className="flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:border-[#FF6D34] hover:bg-[#fef3ec] transition-colors bg-transparent w-full md:w-auto"
                  aria-label="Sign in with LinkedIn"
                >
                  <img
                    src="/LinkedIn-2.png"
                    alt="LinkedIn"
                    className="w-6 h-6"
                  />
                  <span className="text-gray-700">LinkedIn</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
