import React from "react";

const Home = () => {
  return (
    <>
      <section className="bg-Black">
        <div className="container py-5">
          <p className="text-center text-light pb-4">we need</p>
          <div className="row pb-3 font-s">
            <div className=" col-6 d-flex justify-content-md-end justify-content-center">
              <div className="mr ">
                <div className="mb-3 mb-md-0 ">
                  <input type="checkbox"  className="me-3 check-box1" />
                  <label htmlFor="" className="text-light  d-inline ">graphic designer</label>
                </div>
                <div className="mb-3 mb-md-0">
                  <input type="checkbox" className="me-3" />
                  <label htmlFor="" className="text-light  d-inline ">video editor</label>
                </div>
                <div className="mb-3 mb-md-0">
                  <input type="checkbox" className="me-3" />
                  <label htmlFor="" className="text-light  d-inline ">work crew</label>
                </div>
                <div className="mb-3 mb-md-0">
                  <input type="checkbox" className="me-3" />
                  <label htmlFor="" className="text-light  d-inline ">application developer</label>
                </div>
                <div className="mb-3 mb-md-0">
                  <input type="checkbox" className="me-3" />
                  <label htmlFor="" className="text-light  d-inline ">mobile developer</label>
                </div>
                <div className="mb-3 mb-md-0">
                  <input type="checkbox" className="me-3" />
                  <label htmlFor="" className="text-light  d-inline ">web developer</label>
                </div>
                <div className="mb-3 mb-md-0">
                  <input type="checkbox" className="me-3" />
                  <label htmlFor="" className="text-light  d-inline ">creative directors</label>
                </div>
              </div>
            </div>

            <div className=" col-6 d-flex justify-content-md-start justify-content-center">
              <div className="ml mb-3 mb-md-0">
                <div className="mb-3 mb-md-0">
                  <input type="checkbox" className="me-3" />
                  <label htmlFor="" className="text-light  d-inline ">3D designer</label>
                </div>
                <div className="mb-3 mb-md-0">
                  <input type="checkbox" className="me-3" />
                  <label htmlFor="" className="text-light  d-inline ">vfx artist</label>
                </div>
                <div className="mb-2">
                  <input type="checkbox" className="me-3" />
                  <label htmlFor="" className="text-light  d-inline ">sound engineer</label>
                </div>
                <div className="mb-3 mb-md-0">
                  <input type="checkbox" className="me-3" />
                  <label htmlFor="" className="text-light  d-inline ">videographer</label>
                </div>
                <div className="mb-3 mb-md-0">
                  <input type="checkbox" className="me-3" />
                  <label htmlFor="" className="text-light  d-inline ">photographer</label>
                </div>
                <div className="mb-3 mb-md-0">
                  <input type="checkbox" className="me-3" />
                  <label htmlFor="" className="text-light  d-inline ">investors</label>
                </div>
                <div className="mb-3 mb-md-0">
                  <input type="checkbox" className="me-3" />
                  <label htmlFor="" className="text-light  d-inline ">producers</label>              
                </div>
              </div>
            </div>
          </div>

          <p className="text-center text-light pt-2 pb-3">any experience level</p>
          <p className="text-center text-light py-3">once our vaccancy are full we will tick the boxs above</p>
        </div>
      </section>
    </>
  );
};

export default Home;
