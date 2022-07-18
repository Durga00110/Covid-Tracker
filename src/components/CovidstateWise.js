import React, { useEffect,useState } from 'react'
import {Link} from "react-router-dom"
import '../Style/statewise.css'

function CovidstateWise() {
    const [data, setdata] = useState([])

    const getCoviddata = async()=>{
            const res = await fetch('https://data.covid19india.org/data.json');
            const actualdata = await res.json()
            console.log(actualdata.statewise);
            setdata(actualdata.statewise)
    }
    useEffect(() => {
      getCoviddata();
    }, [])
    
  return (
    <>
        
        <div className='container-fluid' mt-5>
                <div className='main-heading'>
                <h1 className='mb-5 mt-5 text-center font-weight-bold text-danger'>INDIA COVID-19 DASHBOARD</h1>
                </div>
                <div className='table-responsive'>
                    <table className='table table-hover'>
                       <thead>
                        <tr>
                            <th>State</th>
                            <th>Conformed</th>
                            <th>Recovered</th>
                            <th>Deaths</th>
                            <th>Active</th>
                            <th>Updated</th>
                        </tr>
                        </thead>
                        <tbody>
                            {
                                data.map((item,index)=>{
                                    return (
                                        <tr key={item.index}>
                                            <td>{item.state}</td>
                                            <td>{item.confirmed}</td>
                                            <td>{item.recovered}</td>
                                            <td>{item.deaths}</td>
                                            <td>{item.active}</td>
                                            <td>{item.lastupdatedtime}</td>
                                            
                                      </tr> 
                                    )
                                })
                            }
                        
                        </tbody>   
                    </table>
                </div>
                <br/>
                <div className='statebutton'>
                <Link to='/'><button className='btn btn-secondary' >BACK</button></Link>
                </div>
                <br/>
                <br/>
                <br/>
                
        </div>
    </>
  )
}

export default CovidstateWise