import React from "react";
import { useParams } from "react-router-dom";
export default function RoomPage(props){
    const params = useParams();
    console.log(params);
    return (
        <div
            id="student-room-page"
        >
            <div
                style = {{
                    marginTop : "90px"
                }}
            >
                {params.bldgName} {params.bldgNumber}
            </div>
        </div>
    );
}