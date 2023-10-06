// import React,{useState} from 'react'

export default function About(props) {
    // const [mystyle,setmystyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white'
    // })
    // const [btntext,setbtntext] = useState('Enable Dark Mode')

    // const togglestyle = ()=> {
    //     if(mystyle.color === 'black')
    //     {
    //         setmystyle({
    //             color: 'white',
    //             backgroundColor: 'black',
    //             border: '1px solid white'
    //         })
    //         setbtntext('Enable Light Mode')
    //     }
    //     else
    //     {
    //         setmystyle({
    //             color: 'black',
    //             backgroundColor: 'white'
    //         })
    //         setbtntext('Enable Dark Mode')
    //     }
    // }

    let mystyle={
        background:props.mode==='dark'?'rgb(35 53 72)':'white',
        color:props.mode==='dark'?'white':'black'
    }
  return (
    <>
        <div className="container" style={{background:props.mode==='dark'?'#091828':'white'}}>
            <h1 style={{color:props.mode==='dark'?'white':'black'}}>About This Page</h1>
            <div id="accordion">
                <div className="card" style={mystyle}>
                    <div className="card-header" style={mystyle} id="headingOne">
                        <h5 className="mb-0">
                            <button className="btn btn-link" style={mystyle}data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <strong>Collapsible Group Item #1</strong>
                            </button>
                        </h5>
                    </div>
                    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                        <div className="card-body" >
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                        </div>
                    </div>
                    </div>
                    <div className="card" style={mystyle}>
                        <div className="card-header" style={mystyle} id="headingTwo">
                            <h5 className="mb-0">
                                <button className="btn btn-link collapsed" style={mystyle} data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                <strong>Collapsible Group Item #2</strong>
                                </button>
                            </h5>
                    </div>
                    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                        <div className="card-body">
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                        </div>
                    </div>
                    </div>
                    <div className="card" style={mystyle}>
                        <div className="card-header" style={mystyle} id="headingThree">
                            <h5 className="mb-0">
                                <button className="btn btn-link collapsed" style={mystyle} data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                <strong>Collapsible Group Item #3</strong>
                                </button>
                            </h5>
                        </div>
                        <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                        <div className="card-body">
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
