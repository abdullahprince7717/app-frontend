import React from 'react'
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import "./css/carousel.css";

function carousel() {
    return (

        
        <div className = "root">
            <Carousel className = "carousel">
                <div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcNQglACC6TmgUY76aZNRXHyA415PcJQB-KA&usqp=CAU" />
                    {/* <p className="legend">Legend 1</p> */}
                </div>
                <div>
                    <img src="https://images.unsplash.com/photo-1590599145008-e4ec48682067?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzV8fG9ubGluZSUyMHNob3BwaW5nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                    {/* <p className="legend">Legend 2</p> */}
                </div>
                <div>
                    <img src="https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nzd8fG9ubGluZSUyMHNob3BwaW5nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                    {/* <p className="legend">Legend 3</p> */}
                </div>
            </Carousel>
        </div>
        
    )
}

export default carousel
