import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'
import Navbarb from './Navbarb'
import Newsd from './Apis'
import Newsbox from './Newsbox'
function News() {

  const [newsdata,setnewsdata]=useState(Newsd);
  return (<>
  <Header/>
  <Navbarb/>
<Newsbox newsdata={newsdata} />

    <div className='container'></div>
    <Link className='btn btn-danger py-2 px-4' to="/">CLICK</Link>

    
<hr />
    <div className="botom">
    <h6><i> This is Demo Website Which is Developed by ALOK R. GAUTAM</i></h6>
</div>
    </>
  )
}

export default News