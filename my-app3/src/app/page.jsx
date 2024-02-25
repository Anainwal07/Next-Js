import GetData1 from "@/components/GetData1";
import GetData2 from "@/components/GetData2";
import PostData1 from "@/components/PostData1";
import PostData2 from "@/components/PostData2";

export const metaData = {
  title: "Blog Posts",
  description: "This is blog post all"
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        {/* <GetData1/> */}
        {/* <PostData1/> */}
        <PostData2/>
        <GetData2/>
      </div>
    </main>
  );
}
