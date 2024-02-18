import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLock,
  faUser,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";
import { BsFacebook, BsGoogle, BsLinkedin, BsTwitter } from "react-icons/bs";
import { InputText } from "primereact/inputtext";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { registerUser } from "../redux/slice/userSlice";

const Register = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigaate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const onSubmit =  (data) => {
    console.log(data);
    const filteredData = Object.fromEntries(
      Object.entries(data).filter(([key, value]) => value !== undefined)
    );

    if (filteredData.password !== filteredData.confirmPassword) {
      return toast.warn('Passwords do not match');
    }

     dispatch(registerUser(filteredData)).unwrap()
      .then(() => {
        toast.success("registered successfully");
        navigate("/Login");
      })
      .catch((backendError) => {
        toast.error(backendError.error);
      });
  
  };
  return (
    <div
      className="col-12 d-flex align-items-center justify-content-center"
      style={{ height: "100vh" }}
    >
      <div
        className="col-9 overflow-hidden"
        style={{
          height: "90vh",
          borderRadius: "15px",
          backgroundColor: "#F7FAFC",
        }}
      >
        <div className="m-auto text-center overflow-hidden pt-5">
          <h4 className="mt-2 h41 fw-bold fs-2">Let's Get Started</h4>
          <h5 className="mt-3 h51 fs-6">Create an new account</h5>
          <form
            className="m-auto col-11 text-center d-flex flex-wrap overflow-hidden"
            // onSubmit={formik.handleSubmit}
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="d-flex flex-wrap col-10 m-auto">
              <div className="position-relative col-12 col-lg-6 m-1 mt-3 m-auto">
                <FontAwesomeIcon
                  className="fs-5 position-absolute inp-name"
                  icon={faUser}
                />
                <InputText
                required
                  type="text"
                  placeholder="User Name"
                  className="col-12 inp1 ps-5 fw-bold"
                  id="username"
                  name="userName"
                  // value={formik.values.userName}
                  // onChange={formik.handleChange}
                  {...register("username")}
                />
              </div>
              <div className="position-relative col-12 col-lg-6 mt-3 m-auto">
                <FontAwesomeIcon
                  className="fs-5 position-absolute inp-name"
                  icon={faEnvelope}
                />
                <InputText
                required
                  type="email"
                  placeholder="Your Email"
                  className="col-12 inp1 ps-5 fw-bold"
                  id="email"
                  name="email"
                  // value={formik.values.email}
                  // onChange={formik.handleChange}
                  {...register("email")}
                />
              </div>
            </div>
            <div className="position-relative col-10 mt-3 m-auto">
              <FontAwesomeIcon
                className="fs-5 position-absolute inp-name"
                icon={faLock}
              />
              <InputText
              required
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="col-12 inp1 ps-5 fw-bold"
                id="password"
                name="password"
                // value={formik.values.password}
                // onChange={formik.handleChange}
                {...register("password")}
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className=" bg-transparent border-0 fs-5 show-password-button"
                style={{
                  position: "absolute",
                  right: "10px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: "#9098b1",
                }}
              >
                <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
              </button>
            </div>
            <div className="position-relative col-10 mt-3 m-auto">
              <FontAwesomeIcon
                className="fs-5 position-absolute inp-name"
                icon={faLock}
              />
              <InputText
              required
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm Password"
                className="col-12 inp1 ps-5 fw-bold"
                id="confirm"
                name="confirmPassword"
                // value={formik.values.confirmPassword}
                // onChange={formik.handleChange}
                {...register("confirmPassword")}
              />
              <button
                type="button"
                onClick={toggleConfirmPasswordVisibility}
                className="bg-transparent border-0 fs-5 show-password-button"
                style={{
                  position: "absolute",
                  right: "10px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: "#9098b1",
                }}
              >
                <FontAwesomeIcon
                  icon={showConfirmPassword ? faEye : faEyeSlash}
                />
              </button>
            </div>
            <button
              type="submit"
              className="col-10 inp2 mt-3 m-auto fs-5 fw-bold text-white"
              id="sign_up"
            >
              Sign Up
            </button>
          </form>
          <h6 className="mt-4 fs-6 h61">
            Have a account ?{" "}
            <a href="#" className="fw-bold" style={{ color: "blue" }}>
              Sign in
            </a>
          </h6>
        </div>
        <div className="m-auto col-10 text-center">
          <h6 className="mt-4 fs-6 h61">Or Sign Up with</h6>
          <h6 className="mt-4 d-flex justify-content-between col-6 col-lg-3 m-auto fs-2 h61">
            <a href="#" style={{ color: "#9098b1" }}>
              <BsFacebook className="fs-1 text-ww" />
            </a>
            <a href="#" style={{ color: "#9098b1" }}>
              <BsTwitter className="fs-1 text-ww" />
            </a>
            <a href="#" style={{ color: "#9098b1" }}>
              <BsLinkedin className="fs-1 text-ww" />
            </a>
            <a href="#" style={{ color: "#9098b1" }}>
              <BsGoogle className="fs-1 text-ww" />
            </a>
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Register;
