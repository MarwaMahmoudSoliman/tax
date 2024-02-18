import { useRef } from "react"
import img from '../assets/upload.png'
function AddBlog() {
    const inputImg=useRef()
    return (
      <div className="bg-white  px-3 me-3 mt-4 pt-5 pb-5 shadow-sm conform ">
      <h4>add new Blog</h4>
    <hr  className="text-secondary opacity-25 shadow-sm"/>
    <div className=" col-lg-7 p-4 border  form shadow-sm  col-sm-12 ">
    <div className="d-flex justify-content-between  mb-4  mt-3">
    <div className="col-6 ">
      <label  className="form-label ">title</label>
      <input type="text" className="form-control shadow-sm " placeholder="your blog title"/> 
    </div>
    <div className="col-5 ">
      <label  className="form-label">Tags</label>
      <input type="text" className="form-control shadow-sm " placeholder="enter tags" />
    </div>
  </div>
  <div className="d-flex justify-content-between  mb-4  mt-3">
  <div className="col-6  ">
    <label  className="form-label ">Upload</label>
    <input type="password" className="form-control shadow-sm d-none " ref={inputImg} placeholder=""/> 
    <div className="border rounded text-center w-100" onClick={()=> inputImg.current.click()}>
    <img src={img} className="w-50 " alt="..." />
    </div>
  </div>
  <div className="col-5 ">
    <label  className="form-label">repeat password</label>
    <input type="password" className="form-control shadow-sm " placeholder="" />
  </div>
</div>
  <label  className="form-label">Write down your blog</label>
        <textarea  className="form-control mb-3  shadow-sm" style={{height:150}} placeholder="your blog"/>
  
      <button type="button" className=" px-5 bt">create user</button>
    </div>
  
    </div>  )
  }
  
  export default AddBlog