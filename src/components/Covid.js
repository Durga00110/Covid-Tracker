import React, {useEffect,useState} from 'react'
import {Link} from "react-router-dom"
import '../Style/covid.css'

const  Covid = ()=> {
    const [data, setdata] = useState([])

    const getcoviddata = async ()=> {
        try{
            const res = await fetch('https://data.covid19india.org/data.json')
            const actualdata = await res.json();
            console.log(actualdata.statewise[0]);
            setdata(actualdata.statewise[0]);
        }catch(error){
                console.log(error);
        }
       
    }

    useEffect(() => {
     getcoviddata(); 
    }, [])
    
   
    
    
  return (
    <div>
        <h6 className='mt-5 text-center'>🔴 LIVE</h6>
        <h2 className='text-center font-weight-bold text-danger'>COVID-19 CORONAVIRUS TRACKER</h2>
        <br/>
        <div  className='main' >
        <div class="row">
        <div class="col-sm-4">
            <div class="card" id="a">
            <div class="card-body">
                <p className='text-card'>our <gap></gap><span className='span-card'>COUNTRY</span></p>
                <p className='country-card' id='india'>INDIA</p>
            </div>
            </div>
         </div>
         <div class="col-sm-4">
            <div class="card" id="b">
            <div class="card-body">
                <p className='text-card'>total <gap></gap><span className='span-card'>RECOVERED</span></p>
                <p className='country-card'>{data.recovered}</p>
            </div>
            </div>
         </div>
         <div class="col-sm-4">
            <div class="card" id="c">
            <div class="card-body">
                <p className='text-card'>total <gap></gap><span className='span-card'>CONFORMED</span></p>
                <p className='country-card'>{data.confirmed}</p>
            </div>
            </div>
         </div>
        </div >
        </div>

        <br/>
        <br/>

        <div className='main'>
        <div class="row">
        <div class="col-sm-4">
            <div class="card" id="d">
            <div class="card-body">
                <p className='text-card'>total <gap></gap><span className='span-card'>DEATH</span></p>
                <p className='country-card'>{data.deaths}</p>
            </div>
            </div>
         </div>
         <div class="col-sm-4">
            <div class="card" id="e">
            <div class="card-body">
                <p className='text-card'>total <gap></gap><span className='span-card'>ACTIVE</span></p>
                <p className='country-card'>{data.active}</p>
            </div>
            </div>
         </div>
         <div class="col-sm-4">
            <div class="card" id="f">
            <div class="card-body">
                <p className='text-card'>Last <gap></gap><span className='span-card'>UPDATED</span></p>
                <p className='country-card'>{data.lastupdatedtime}</p>
            </div>
            </div>
         </div>
        </div >
        </div>
        <br/>
        <div className='statebutton'>
         <Link to='/statewise'><button className='btn btn-success' >State-Wise-Details</button></Link>
        </div>
        <br/>
        <br/>
    </div>
    
  )
}

export default Covid