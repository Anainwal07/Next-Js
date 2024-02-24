import { cookies } from "next/headers";
import { NextResponse } from "next/server";

// export async function GET(req , {params}){
//     const requestHeaders = new Headers(req.headers);
//     console.log(requestHeaders);
//     console.log(params);
//     //URL Query Params
//     // const {searchParams} = new URL(req.url)
//     // console.log(searchParams);
//     // console.log(searchParams.get("search"));

//     //Cookies
//     const cook1 = req.cookies;
//     // const cook2 = cookies;
//     // // console.log("Cookies1" , cook1);
//     // console.log("Cookies2" , cook2);

//     return NextResponse.json({"msg" : "Hello NextJs Api"})
// }

export async function POST(req) {
    // console.log(req);
    // //Request Body
    // const res = await req.json()
    // console.log("ResJSON : " , res);

    const formData = await req.formData()
    console.log("form Data" , formData);
    console.log("Form Data" , formData.get("title"));
    console.log("Form Data: " , formData.get("body"));

    return NextResponse.json({"msg" : "Hello NextJs Api"} , {status: 201})
}