import React, { useState } from 'react';

const Works = () => {
    const [file, setfile] = useState();
    const [IsfileSize, setIsfileSize] = useState(false);

    const handleChange = (e) =>{
        setfile(e.target.files[0]);
        setIsfileSize(true)
         
    }
    return (
        <div>
            <div className="container pt-5 pt-lg-0">
                <div className="row">
                    <div className="col-12 py-5">
                        <p className='text-center text-light'>why you?</p>
                        <form action="" className='d-block mb-3 '>
                        <input type="text" className='d-block m-auto text-center my-3 bg-grey text-light p-1 input-w align-content-center'  placeholder='your speciality' />
                        <input type="text" className='d-block m-auto text-center my-3 bg-grey text-light p-1 input-w input-h' placeholder='tell us more about you' />
                        <div className="d-block m-auto file-input ">
                            <input type="file" onChange={handleChange}  id="file" className="file" />
                            <label htmlFor="file" className='fw-normal file-input'>cv here</label>
                            {IsfileSize ? <p className='text-center'>{file.name}</p> : <p></p>}
                       </div>
                        </form>
                         <input type="submit" className='d-block m-auto mt-5 submit-color p-2 submit-w' value="Submit"></input>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Works;
