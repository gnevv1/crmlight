import React, {useState} from "react";
import "./HeaderController.css";

function HeaderController(){

    return (
        <div className="container col">  
            <div className="row">
                

                <div className="col-sm"> 
                    LeftUI
                </div>

                <div className="col-sm">
                    RightUI
                </div>

                <div className="col-sm">
                    SearchUI
                </div>
              
            </div>
         </div>
    )
}
export default HeaderController;