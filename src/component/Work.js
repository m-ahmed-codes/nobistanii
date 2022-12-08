import React, { useState } from 'react';

const Work = () => {
    const [file, setfile] = useState();
    const [IsfileSize, setIsfileSize] = useState(false);

    const handleChange = (e) =>{
        setfile(e.target.files[0]);
        setIsfileSize(true)
         
    }



    return (
        <>
        
        <section>

        <div className="container pt-3">
            {/* <p className=' text-center text-light pt-5'>why you?</p> */}
            <div className="row">
                <div className="col-12 d-flex justify-content-center  ">
                    <form action=""  className='d-inline-block ab'>
                        <input type="text" className='d-block text-center my-3 bg-grey text-light p-1'  placeholder='your speciality' />
                        <input type="text" className='d-block text-center my-3 bg-grey text-light p-1 h-100' placeholder='tell us more about you' />
                       <div className="d-block file-input">
                            <input type="file" onChange={handleChange}  id="file" className="file" />
                            <label htmlFor="file" className='fw-normal'>cv here</label>
                            {IsfileSize ? <p>{file.name}</p> : <p>file not selected</p>}
                       </div>
                    </form>
                </div>
            </div>
        </div>
        </section>
        </>
    );
}

export default Work;
