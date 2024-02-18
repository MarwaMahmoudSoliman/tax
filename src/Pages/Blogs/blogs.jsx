import img from "../../images/2015_5_18_16_0_1_59.jpg";
import Blog from '../../components/Blog'
import { useTranslation } from "react-i18next";

function Blogs() {
  const cards=[0,1,2,3,4,5,6,7,8];
  const [t , i18n] = useTranslation()
  return (
    <div>
    
    <div className="overflow-hidden">
    <div className='w-75 mx-auto text-center mt-5'>
        <h2 style={{ textAlign: "center" }} className='infoAbout'>{t('blogs')}</h2>
        <p style={{ color: "#585858", marginTop: "10px" }}>{t('infoBlogs')}</p>
    </div>
    </div>
    
    
    
    
    
    
    <div className='border col-10 mx-auto rounded p-3 d-flex justify-content-between align-items-center gap-3'>
    <div className='col-4'> 
    <img alt='' src={img} className='w-100  rounded'/></div>
    
    <div className='col-8'> 
    <h4>This is tilte </h4>    
    <p>lourem lourem lourem lourem lourem lourem lourem lourem lourem lourem lourem lourem lourem lourem lourem lourem  </p>    
    </div>
    </div>
    <div className='text-center my-3'>
    <input type='search' aria-label="Recipient's username" aria-describedby="basic-addon2"  width={"120px"}  style={{borderColor:'#0062ff',outline:'none' , borderRadius:'25px',paddingLeft:'10px'}} placeholder='Search....' />
    </div>
    <div className='d-flex justify-content-between container my-5 flex-wrap' >
    {cards.map(cards => <div className="col-12 col-md-6 col-xl-4 p-2 my-3" key={cards}>
    <Blog />
  </div>)}
    </div>
    </div>
  )
}

export default Blogs