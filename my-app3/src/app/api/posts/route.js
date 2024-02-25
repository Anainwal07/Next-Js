import connectDB from "@/app/lib/connectDB";
import Post from "@/app/models/Post";
import { NextResponse } from "next/server";


export async function GET(req){
    try {
        await connectDB()
        const result = await Post.find()
        return NextResponse.json({"msg": "success"}, {status: 200})
    } catch (error) {
        console.log(error);
        return NextResponse.json({"msg": "something went wrong"}, {status: 400})
    }
}
export async function POST(req){
    const body = await req.json()
    try {
        await connectDB()
        const result = await Post.create(body)
        return NextResponse.json({"result": result}, {status: 201})
    } catch (error) {
        console.log(error);
        return NextResponse.json({"msg": "something went wrong"}, {status: 400})
    }
}