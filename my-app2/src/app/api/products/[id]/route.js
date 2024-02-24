import { NextResponse } from "next/server";

// export const GET  = async (req , context) => {
    
//     // console.log("Req: " , req);
//     // console.log("Context: " , context);
//     console.log("Context: " , context.params);
//     console.log("Context: " , context.params.id);

//     return NextResponse.json({"msg" : "Success"} , {status: 200})

// }


export const GET  = async (req , {params}) => {
    // console.log("Req: " , req);
    // console.log("Context: " , context);
    console.log("Context: " , params.id);

    return NextResponse.json({"msg" : "Success"} , {status: 200})

}