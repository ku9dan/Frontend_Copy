// import React, { useState, useEffect } from "react";
// import styles from "./Register.module.css"; // Reusing the styles from Login
// import SignInButton from "./SignInButton";
// import axios from "axios";
// import PhoneInput from "react-phone-input-2";
// import "react-phone-input-2/lib/style.css";
// import { px } from "framer-motion";

// const testimonials = [
//   {
//     text: "Realto's user-friendly interface made the process of relocating a breeze.",
//     author: "- Emily Smith",
//   },
//   {
//     text: "From start to finish, the registration process was seamless. Highly recommend!",
//     author: "- John Doe",
//   },
//   {
//     text: "I never thought it would be this easy to get started with Realto. Exceptional service!",
//     author: "- Anna Lee",
//   },
// ];

// const Register = ({ closeRegisterModal, openloginModal }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//   const [isVerified, setIsVerified] = useState(false);
//   const [email, setEmail] = useState("");
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [error, setError] = useState("");
//   const [isLoading, setIsLoading] = useState(false);
//   const [phone, setPhone] = useState("");
//   const [role, setRole] = useState("student");
//   const [isChecked, setIsChecked] = useState(false);

//   // Testimonial slider logic
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
//     }, 5000);

//     return () => clearInterval(interval);
//   }, []);

//   // Mobile verification listener
//   useEffect(() => {
//     window.phoneEmailListener = function (userObj) {
//       console.log("Verification success:", userObj.user_json_url);
//       setIsVerified(true);
//     };

//     return () => {
//       window.phoneEmailListener = null;
//     };
//   }, []);

//   // Toggle password visibility
//   const togglePasswordVisibility = () => setShowPassword((prev) => !prev);
//   const toggleConfirmPasswordVisibility = () =>
//     setShowConfirmPassword((prev) => !prev);

//   // Handle form submission
//   const handleRegister = async (e) => {
//     e.preventDefault();

//     // Check if mobile number is verified
//     if (!isVerified) {
//       setError("Please verify your mobile number before registering.");
//       return;
//     }

//     // Check if passwords match
//     if (password !== confirmPassword) {
//       setError("Passwords do not match");
//       return;
//     }

//     setIsLoading(true); // Start loading

//     try {
//       const response = await axios.post(
//         "https://upto-skills.onrender.com/api/auth/register",
//         {
//           username,
//           email,
//           password,
//         }
//       );

//       // Save the token to localStorage
//       localStorage.setItem("token", response.data.token);

//       // Close the registration modal
//       closeRegisterModal();
//     } catch (err) {
//       setError(err.response?.data?.msg || "An error occurred");
//     } finally {
//       setIsLoading(false); // Stop loading
//     }
//   };

//   return (
//     <div className={styles.loginContainer}>
//       {/* Left Panel */}
//       <div className={styles.leftPanel}>
//         <div className={styles.brandContainer}>
//           <img
//             className={styles.brandLogo}
//             src="/UptoSkills.png"
//             alt="UptoSkills"
//           />
//         </div>
//         <h2 className={styles.headline}>
//           Start your remarkable <br />
//           journey with us!
//         </h2>
//         <div className={styles.leftContainerParagraph}>
//           Step into a world where potential meets possibility welcome to
//           UptoSkills, where your journey to mastery begins!
//         </div>
//         <div className={styles.testimonialsSlider}>
//           {testimonials.map((testimonial, index) => (
//             <div
//               key={index}
//               className={`${styles.testimonialCard} ${
//                 index === currentIndex ? styles.active : ""
//               }`}
//             >
//               <p>{testimonial.text}</p>
//               <span>{testimonial.author}</span>
//             </div>
//           ))}
//         </div>
//         {/* Navigation Dots */}
//         <div className={styles.dotsContainer}>
//           {testimonials.map((_, index) => (
//             <span
//               key={index}
//               className={`${styles.dot} ${
//                 index === currentIndex ? styles.activeDot : ""
//               }`}
//               onClick={() => setCurrentIndex(index)}
//             />
//           ))}
//         </div>
//       </div>

//       {/* Right Panel */}
//       <div className={styles.rightPanel}>
//         <div className={styles.cross}>
//           <button onClick={closeRegisterModal}>×</button>
//         </div>
//         <div className={styles.brandContainer}>
//           <img
//             className={styles.brandLogo}
//             src="/UptoSkills.png"
//             alt="UptoSkills"
//           />
//         </div>
//         <div className={styles.welcomeContainer}>
//           <div className={styles.roleToggle}>
//             <button
//               className={`${styles.toggleButton} ${
//                 role === "student" ? styles.active : ""
//               }`}
//               onClick={() => setRole("student")}
//             >
//               Student
//             </button>
//             <button
//               className={`${styles.toggleButton} ${
//                 role === "hr" ? styles.active : ""
//               }`}
//               onClick={() => setRole("hr")}
//             >
//               HR
//             </button>
//             <button
//               className={`${styles.toggleButton} ${
//                 role === "faculty" ? styles.active : ""
//               }`}
//               onClick={() => setRole("faculty")}
//             >
//               Faculty
//             </button>
//           </div>
//         </div>
//         <div className={styles.rightPanelContainer}>
//           <div className={styles.loginFormContainer}>
//             <p className={styles.loginDescription}>
//               Empower your experience, sign up for a free account today.
//             </p>

//             <form className={styles.loginForm} onSubmit={handleRegister}>
//               {error && <div className={styles.errorMessage}>{error}</div>}

//               <div className={styles.inputGroup}>
//                 <input
//                   type="text"
//                   placeholder="Full Name"
//                   required
//                   aria-label="Username"
//                   value={username}
//                   onChange={(e) => setUsername(e.target.value)}
//                 />
//               </div>

//               <div className={styles.inputGroup}>
//                 <input
//                   type="email"
//                   placeholder="Email"
//                   required
//                   aria-label="Email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                 />
//               </div>

//               <div className={styles.inputGroup}>
//                 <div style={{ paddingRight: "94px" }}>
//                   <PhoneInput
//                     country={"in"} // Default country set to India
//                     value={phone}
//                     onChange={(phone) => setPhone(phone)}
//                     placeholder=" phone number" // Set placeholder
//                     inputStyle={{
//                       width: "138%", // Full width of parent div
//                       fontSize: "16px",
//                       borderRadius: "8px", // Optional: Add rounded corners
//                       border: "1px solid #ddd",
//                     }}
//                     containerStyle={{
//                       width: "100%", // Adjust the outer container width
//                     }}
//                     dropdownStyle={{ fontSize: "14px" }} // Dropdown styling
//                   />
//                 </div>
//               </div>
//               <div className={styles.inputGroup}>
//                 <input
//                   type={showPassword ? "text" : "password"}
//                   placeholder="Password"
//                   required
//                   aria-label="Password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                 />
//                 <button
//                   type="button"
//                   className={styles.togglePassword}
//                   onClick={togglePasswordVisibility}
//                 >
//                   {showPassword ? "🐵" : "🙈"}
//                 </button>
//               </div>

//               <div className={styles.inputGroup}>
//                 <input
//                   type={showConfirmPassword ? "text" : "password"}
//                   placeholder="Confirm Password"
//                   required
//                   aria-label="Confirm Password"
//                   value={confirmPassword}
//                   onChange={(e) => setConfirmPassword(e.target.value)}
//                 />
//                 <button
//                   type="button"
//                   className={styles.togglePassword}
//                   onClick={toggleConfirmPasswordVisibility}
//                 >
//                   {showConfirmPassword ? "🐵" : "🙈"}
//                 </button>
//               </div>

//               {/* <div className={styles.otpVerification}>
//                 <p>Verify your mobile number:</p>
//                 <div className={styles.signinButtonContainer}>
//                   <SignInButton />
//                 </div>
//                 {isVerified && (
//                   <p className={styles.verifiedMessage}>✔ Verified</p>
//                 )}
//               </div> */}
//               <div className={styles.otpVerification}>
//                 <div className={styles.checkboxContainer}>
//                   <div className={styles.customCheckbox}>
//                     <input
//                       type="checkbox"
//                       id="updatesCheckbox"
//                       checked={isChecked}
//                       onChange={() => setIsChecked(!isChecked)}
//                     />
//                   </div>
//                   <div className={styles.checkboxLabel}>
//                     <p>
//                       Send me important updates & promotions via{" "}
//                       <b>SMS, Email</b>, and <b>WhatsApp</b>.
//                     </p>
//                   </div>
//                 </div>
//                 <div className={styles.term}>
//                   <p>
//                     By clicking Register, You agree to the{" "}
//                     <b style={{ color: "blue" }}>
//                       Terms & Conditions & Privacy Policy
//                     </b>
//                      of Uptoskills.
//                   </p>
//                 </div>
//               </div>

//               <div className={styles.register}>
//                 <button
//                   type="submit"
//                   className={styles.loginButton}
//                   disabled={isLoading}
//                 >
//                   {isLoading ? "Registering..." : "Register"}
//                 </button>
//               </div>
//             </form>

//             <button
//               type="button"
//               className={styles.signupButton}
//               onClick={openloginModal}
//             >
//               <span style={{ color: "black" }}>Back to </span> Login
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Register;

import React, { useState, useEffect } from "react";
// import SignInButton from "./SignInButton";
import axios from "axios";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
// import { Link } from "react-router";

const testimonials = [
  {
    text: "Realto's user-friendly interface made the process of relocating a breeze.",
    author: "- Emily Smith",
  },
  {
    text: "From start to finish, the registration process was seamless. Highly recommend!",
    author: "- John Doe",
  },
  {
    text: "I never thought it would be this easy to get started with Realto. Exceptional service!",
    author: "- Anna Lee",
  },
];

const Register = ({ closeRegisterModal, openLoginModal }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("student");
  const [isChecked, setIsChecked] = useState(false);
  //Testimonial slider logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  //Toggle password visibility
  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);
  const toggleConfirmPasswordVisibility = () =>
    setConfirmPassword((prev) => !prev);

  // Handel from submission
  const handleRegister = async (e) => {
    e.preventDefault();

    //Check if mobile number is verified
    if (!isVerified) {
      setError("Please verify your mobile number before registering.");
      return;
    }

    //check if Passwords match
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    setIsLoading(true);

    try {
      const response = await axios.post(
        "https://upto-skills.onrender.com/api/auth/register",
        { username, email, password }
      );

      //Save the Token to local storage
      localStorage.setItem("token", response.data.token);

      //Close the registeration model
      closeRegisterModal();
    } catch (err) {
      setError(err.response?.data?.msg || "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-transparent p-4 ">
      <div className="flex flex-col sm:flex-row border border-black bg-white rounded-2xl shadow-lg overflow-hidden w-full max-w-3xl justify-center">
        {/* Left Panel */}
        <div className="w-[400px] p-5 bg-[#03BCA5] text-white rounded-l-2xl flex flex-col">
          {/* <img className="h-12 mb-4" src="/UptoSkills.png" alt="UptoSkills" /> */}
          <h2 className="text-3xl font-bold mb-4">
            Start your remarkable journey with us!
          </h2>
          <p className="mb-6">
            Step into a world where potential meets possibility. Welcome to
            UptoSkills!
          </p>
          <div className="relative h-32">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`absolute transition-opacity duration-500 ease-in-out ${
                  index === currentIndex ? "opacity-100" : "opacity-0"
                }`}
              >
                <p className="italic">{testimonial.text}</p>
                <span className="block text-sm">{testimonial.author}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Panel */}
        <div className="w-full p-6 bg-white rounded-r-2xl flex flex-col items-center justify-center md:w-1/2">
          <div className="relative  ">
            <button
              onClick={closeRegisterModal}
              className="absolute -mt-7 ml-[160px] text-2xl hover:text-orange-500"
            >
              ×
            </button>
          </div>
          <img className="h-12 mb-6 " src="/UptoSkills.png" alt="UptoSkills" />

          <div className="bg-gray-200 h-10 mb-2 border rounded-lg">
            <div className="flex  mb-3 ">
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
            className="space-y-4 w-full border border-gray-400 shadow-2xl rounded-lg p-4  max-w-sm"
            onSubmit={handleRegister}
          >
            <p className="text-sm text-[#414143] font-normal text-center">
              Empower your experience, sign up for a free account today.
            </p>
            {error && <div className="text-red-500 text-sm">{error}</div>}
            <div className="flex flex-col gap-2">
              <div>
                <input
                  type="text"
                  placeholder="Full Name"
                  required
                  aria-label="Username"
                  className="w-full p-1 border border-gray-400 rounded-lg focus:border-[#FF6D34] outline-none"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  required
                  aria-label="Email"
                  className="w-full p-1 border border-gray-400 rounded-lg focus:border-[#FF6D34] outline-none"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <PhoneInput
                  country="in"
                  value={phone}
                  onChange={(phone) => setPhone(phone)}
                  placeholder="Phone number"
                  //   containerClass="w-full"
                  inputstyles="w-full p-1 border border-gray-400 rounded"
                  className="w-[400px] "
                />
              </div>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  required
                  className="w-full p-1 border border-gray-400 rounded-lg focus:border-[#FF6D34] outline-none"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  className="absolute right-3 top-1 cursor-pointer"
                  onClick={togglePasswordVisibility}
                >
                  {" "}
                  {showPassword ? "🐵" : "🙈"}{" "}
                </button>
              </div>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm Password"
                  required
                  aria-label="Confirm Password"
                  className="w-full p-1 border border-gray-400 rounded-lg focus:border-[#FF6D34] outline-none"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <button
                  type="button"
                  className="absolute right-3 top-1 cursor-pointer"
                  onClick={toggleConfirmPasswordVisibility}
                >
                  {" "}
                  {showPassword ? "🐵" : "🙈"}{" "}
                </button>
              </div>
              <div className=" ">
                <div className="flex items-center space-x-2 ">
                  <input
                    type="checkbox"
                    id="updatesCheckbox"
                    checked={isChecked}
                    onChange={() => setIsChecked(!isChecked)}
                  />
                  <div className=" ">
                    <p className="text-xs">
                      Send me updates via <b>SMS, Email,</b> and{" "}
                      <b>WhatsApp.</b>
                    </p>
                  </div>
                </div>
              </div>
              <div className="">
                <p className="text-xs text-center ">
                  By clicking Register, you agree to the{" "}
                  <b className="text-blue-600">Terms & Privacy Policy</b>.
                </p>
              </div>
              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white p-2 rounded cursor-pointer"
                disabled={isLoading}
              >
                {isLoading ? "Registering..." : "Register"}
              </button>
            </div>
          </form>
          {/* <Link to="Login">  */}
          <button
  type="button"
  onClick={() => {
    closeRegisterModal(); // Close Register Modal
    openLoginModal(); // Open Login Modal
  }}
  className="mt-4 w-full max-w-sm p-2 border border-gray-400 shadow-2xl rounded-lg focus:border-[#FF6D34] outline-none text-black-600 hover:border-orange-500"
>
  Back to <span className="text-orange-500">Login</span>
</button>

          {/* </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Register;
