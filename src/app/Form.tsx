"use client";
import { useFormik } from "formik";
import { formschema } from "./schemas";

const initialValues = {
  name: "",
  email: "",
  ph_no: "",
  id_no: "",
  CollegeName: "",
  startup_name: "",
  place: "",
  // cin: "",
  website: "",
  sector: "",
  // file: "",
  student: "",
  description: "",
  checkbox: "",
};

const Form = () => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,

      validationSchema: formschema,

      onSubmit: (values, action) => {
        console.log("form values", values);
        window.confirm(
          "Congratulations you have been registered Sucessfully!!"
        );

        action.resetForm();
      },
    });

  console.log("errors", errors);

  return (
    <div className="w-full pb-16 px-4 py-16 bg-[#0a0b10]" id="form">
      <h1 className="text-2xl text-[#f4cb33] sm:text-3xl font-bold text-center py-4 ">
        Get Started With Registration
      </h1>
      <h1 className="text-2xl text-white sm:text-2xl font-bold text-center py-4 ">
        Participant 1
      </h1>
      <p className="text-white text-center">
        The minimum number of participants is 2 , Max is 4 please fill
        accordingly, Registrations with less than 2 participants will be
        disqalified
      </p>
      <div className="flex justify-center">
        <form onSubmit={handleSubmit}>
          <div className="max-w-[1240px] mt-10 mx-auto grid md:grid-cols-2 gap-8">
            <div className="flex flex-col ">
              <label htmlFor="name" className="text-gray-500 font-bold">
                Full Name*
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                className="bg-gray-200 sm:w-[400px] appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white"
              />
              {errors.name && touched.name ? (
                <p className="text-sm text-red-600">{errors.name}</p>
              ) : null}
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="text-gray-500 font-bold">
                Email*
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className="bg-gray-200 sm:w-[400px] appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white"
              />
              {errors.email && touched.email ? (
                <p className="text-sm text-red-600">{errors.email}</p>
              ) : null}
            </div>
            <div className="flex flex-col">
              <label htmlFor="ph_no" className="text-gray-500 font-bold">
                Contact Number*
              </label>
              <input
                type="tel"
                name="ph_no"
                id="ph_no"
                value={values.ph_no}
                onChange={handleChange}
                onBlur={handleBlur}
                className="bg-gray-200 sm:w-[400px] appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white"
              />
              {errors.ph_no && touched.ph_no ? (
                <p className="text-sm text-red-600">{errors.ph_no}</p>
              ) : null}
            </div>
            <div className="flex flex-col">
              <label htmlFor="id_no" className="text-gray-500 font-bold">
                College Name
              </label>
              <input
                type="tel"
                name="CollegeName"
                id="CollegeName"
                value={values.CollegeName}
                onChange={handleChange}
                onBlur={handleBlur}
                className="bg-gray-200 sm:w-[400px] appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white"
              />
              {errors.id_no && touched.id_no ? (
                <p className="text-sm text-red-600">{errors.id_no}</p>
              ) : null}
            </div>
            {/* <div className="flex flex-col">
              <label htmlFor="startup_name" className="text-gray-500 font-bold">
                Name of your Startup*
              </label>
              <input
                type="text"
                name="startup_name"
                id="startup_name"
                value={values.startup_name}
                onChange={handleChange}
                onBlur={handleBlur}
                className="bg-gray-200 sm:w-[400px] appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white"
              />
              {errors.startup_name && touched.startup_name ? (
                <p className="text-sm text-red-600">{errors.startup_name}</p>
              ) : null}
            </div> */}
            {/* <div className="flex flex-col">
              <label htmlFor="place" className="text-gray-500 font-bold">
                Place*
              </label>
              <input
                type="text"
                name="place"
                id="place"
                value={values.place}
                onChange={handleChange}
                onBlur={handleBlur}
                className="bg-gray-200 sm:w-[400px] appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white"
              />
              {errors.place && touched.place ? (
                <p className="text-sm text-red-600">{errors.place}</p>
              ) : null}
            </div> */}
            {/* <div className="flex flex-col">
              <label htmlFor="cin" className="text-gray-500 font-bold">
                Company Identification number(CIN)*
              </label>
              <input
                type="text"
                name="cin"
                id="cin"
                value={values.cin}
                onChange={handleChange}
                onBlur={handleBlur}
                className="bg-gray-200 sm:w-[400px] appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white"
              />
              {errors.cin && touched.cin ? (
                <p className="text-sm text-red-600">{errors.cin}</p>
              ) : null}
            </div> */}
            {/* <div className="flex flex-col">
              <label htmlFor="website" className="text-gray-500 font-bold">
                Website/LinkedIn of your Startup*
              </label>
              <input
                type="text"
                name="website"
                id="website"
                value={values.website}
                onChange={handleChange}
                onBlur={handleBlur}
                className="bg-gray-200 sm:w-[400px] appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white"
              />
              {errors.website && touched.website ? (
                <p className="text-sm text-red-600">{errors.website}</p>
              ) : null}
            </div>
            <div className="flex flex-col">
              <label htmlFor="sector" className="text-gray-500 font-bold">
                Sector your Startup belong to*
              </label>
              <input
                type="text"
                name="sector"
                id="sector"
                value={values.sector}
                onChange={handleChange}
                onBlur={handleBlur}
                className="bg-gray-200 sm:w-[400px] appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white"
              />
              {errors.sector && touched.sector ? (
                <p className="text-sm text-red-600">{errors.sector}</p>
              ) : null}
            </div> */}

            {/* <div className="flex flex-col">
              <label htmlFor="file" className="text-gray-500 font-bold">
                Proof of your startup*
              </label>
              <input
                type="file"
                name="file"
                id="file"
                
                value={values.file}
                onChange={handleChange}
                onBlur={handleBlur}
                className="bg-gray-200 sm:w-[400px] appearance-none border-2 border-gray-200 rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white"
              />
            </div> */}
            {/* 
            <div className="flex flex-col">
              <label htmlFor="student" className="text-gray-500 font-bold">
                Are you a VNIT, Nagpur Student/Alumni*
              </label>
              <div className="flex mt-3">
                <label htmlFor="Yes" className="text-gray-500 font-bold mr-5">
                  Yes
                </label>
                <input
                  name="student"
                  id="Yes"
                  type="radio"
                  value="yes"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />

                <label htmlFor="no" className="text-gray-500 font-bold mr-5 ml-8">
                  No
                </label>
                <input
                  name="student"
                  id="No"
                  type="radio"
                  value="No"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
              {errors.student && touched.student ? (
                <p className="text-sm text-red-600">{errors.student}</p>
              ) : null}
            </div> */}
          </div>
          {/* <div className="flex flex-col mt-8 col-span-2 gap-0">
            <label htmlFor="description" className="text-gray-500 font-bold">
              Brief description of idea/product/service*
            </label>
            <textarea
              name="description"
              id="description"
              value={values.description}
              onChange={handleChange}
              onBlur={handleBlur}
              className="bg-gray-200 h-44 sm:w-[100%] appearance-none border-2 border-gray-200 rounded py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white"
            ></textarea>
          </div>
          {errors.description && touched.description ? (
            <p className="text-sm text-red-600">{errors.description}</p>
          ) : null}

          <div className="my-5" >
            <input
              type="checkbox"
              name="checkbox"
              id="checkbox"
              value={values.checkbox}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <label htmlFor="checkbox" className="pl-3">
              I hereby declare that i have read the{" "}
              <a href="#broucher" className="font-bold hover:underline">
                Brochure
              </a>{" "}
              and the details furnished above are correct to best of my
              Knowledge.
            </label>
            {errors.checkbox && touched.checkbox ? (
            <p className="text-sm text-red-600">{errors.checkbox}</p>
          ) : null}

          </div> */}

          <h1 className="text-2xl text-white sm:text-2xl font-bold text-center py-4  ">
            Participant 2
          </h1>

          <div className="max-w-[1240px] mt-10 mx-auto grid md:grid-cols-2 gap-8">
            <div className="flex flex-col ">
              <label htmlFor="name" className="text-gray-500 font-bold">
                Full Name*
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                className="bg-gray-200 sm:w-[400px] appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white"
              />
              {errors.name && touched.name ? (
                <p className="text-sm text-red-600">{errors.name}</p>
              ) : null}
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="text-gray-500 font-bold">
                Email*
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className="bg-gray-200 sm:w-[400px] appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white"
              />
              {errors.email && touched.email ? (
                <p className="text-sm text-red-600">{errors.email}</p>
              ) : null}
            </div>
            <div className="flex flex-col">
              <label htmlFor="ph_no" className="text-gray-500 font-bold">
                Contact Number*
              </label>
              <input
                type="tel"
                name="ph_no"
                id="ph_no"
                value={values.ph_no}
                onChange={handleChange}
                onBlur={handleBlur}
                className="bg-gray-200 sm:w-[400px] appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white"
              />
              {errors.ph_no && touched.ph_no ? (
                <p className="text-sm text-red-600">{errors.ph_no}</p>
              ) : null}
            </div>
            <div className="flex flex-col">
              <label htmlFor="id_no" className="text-gray-500 font-bold">
                College Name
              </label>
              <input
                type="tel"
                name="id_no"
                id="id_no"
                value={values.id_no}
                onChange={handleChange}
                onBlur={handleBlur}
                className="bg-gray-200 sm:w-[400px] appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white"
              />
              {errors.id_no && touched.id_no ? (
                <p className="text-sm text-red-600">{errors.id_no}</p>
              ) : null}
            </div>
          </div>
          <h1 className="text-2xl text-white sm:text-2xl font-bold text-center py-4  ">
            Participant 3
          </h1>

          <div className="max-w-[1240px] mt-10 mx-auto grid md:grid-cols-2 gap-8">
            <div className="flex flex-col ">
              <label htmlFor="name" className="text-gray-500 font-bold">
                Full Name*
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                className="bg-gray-200 sm:w-[400px] appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white"
              />
              {errors.name && touched.name ? (
                <p className="text-sm text-red-600">{errors.name}</p>
              ) : null}
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="text-gray-500 font-bold">
                Email*
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className="bg-gray-200 sm:w-[400px] appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white"
              />
              {errors.email && touched.email ? (
                <p className="text-sm text-red-600">{errors.email}</p>
              ) : null}
            </div>
            <div className="flex flex-col">
              <label htmlFor="ph_no" className="text-gray-500 font-bold">
                Contact Number*
              </label>
              <input
                type="tel"
                name="ph_no"
                id="ph_no"
                value={values.ph_no}
                onChange={handleChange}
                onBlur={handleBlur}
                className="bg-gray-200 sm:w-[400px] appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white"
              />
              {errors.ph_no && touched.ph_no ? (
                <p className="text-sm text-red-600">{errors.ph_no}</p>
              ) : null}
            </div>
            <div className="flex flex-col">
              <label htmlFor="id_no" className="text-gray-500 font-bold">
                College Name
              </label>
              <input
                type="tel"
                name="id_no"
                id="id_no"
                value={values.id_no}
                onChange={handleChange}
                onBlur={handleBlur}
                className="bg-gray-200 sm:w-[400px] appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white"
              />
              {errors.id_no && touched.id_no ? (
                <p className="text-sm text-red-600">{errors.id_no}</p>
              ) : null}
            </div>
          </div>
          <h1 className="text-2xl text-white sm:text-2xl font-bold text-center py-4  ">
            Participant 4
          </h1>

          <div className="max-w-[1240px] mt-10 mx-auto grid md:grid-cols-2 gap-8">
            <div className="flex flex-col ">
              <label htmlFor="name" className="text-gray-500 font-bold">
                Full Name*
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                className="bg-gray-200 sm:w-[400px] appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white"
              />
              {errors.name && touched.name ? (
                <p className="text-sm text-red-600">{errors.name}</p>
              ) : null}
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="text-gray-500 font-bold">
                Email*
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className="bg-gray-200 sm:w-[400px] appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white"
              />
              {errors.email && touched.email ? (
                <p className="text-sm text-red-600">{errors.email}</p>
              ) : null}
            </div>
            <div className="flex flex-col">
              <label htmlFor="ph_no" className="text-gray-500 font-bold">
                Contact Number*
              </label>
              <input
                type="tel"
                name="ph_no"
                id="ph_no"
                value={values.ph_no}
                onChange={handleChange}
                onBlur={handleBlur}
                className="bg-gray-200 sm:w-[400px] appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white"
              />
              {errors.ph_no && touched.ph_no ? (
                <p className="text-sm text-red-600">{errors.ph_no}</p>
              ) : null}
            </div>
            <div className="flex flex-col">
              <label htmlFor="id_no" className="text-gray-500 font-bold">
                College Name
              </label>
              <input
                type="tel"
                name="id_no"
                id="id_no"
                value={values.id_no}
                onChange={handleChange}
                onBlur={handleBlur}
                className="bg-gray-200 sm:w-[400px] appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white"
              />
              {errors.id_no && touched.id_no ? (
                <p className="text-sm text-red-600">{errors.id_no}</p>
              ) : null}
            </div>
          </div>

          <div className="flex items-center">
            <button
              type="submit"
              className="text-white w-[200px] rounded-md font-medium my-8 mx-auto  py-3 bg-gray-500 hover:scale-105 hover:bg-[#f4cb33] hover:text-white  duration-200"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
