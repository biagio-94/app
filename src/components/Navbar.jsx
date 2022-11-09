import React from "react"
function Navbar() {
    return (
        <nav className="py-3 px-3">
            <div className="container">

            <div className="row align-items-center justify-content-between">
                <div className="col-3">
                    <a href="/"> <div className="logo"><img src={process.env.PUBLIC_URL + '/logo192.png'} alt="" /></div></a>
                </div>
                <div className="col">
                    <ul >
                        <li><a href="#">about</a> </li>
                        <li><a href="#">skills</a> </li>
                        <li><a href="#">my-projects</a> </li>
                    </ul>
                </div>
                <div className="col-3">
                    <div className="row justify-content-end">
                        <ul>
                            <li><a href="https://www.linkedin.com/in/biagio-ferro/"><i class="fa-brands fa-linkedin"></i></a></li>
                            <li><a href="https://github.com/biagio-94"><i class="fa-brands fa-github"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
            </div>
        </nav>

    )
}

export default Navbar