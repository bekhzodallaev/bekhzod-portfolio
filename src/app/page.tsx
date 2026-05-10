

import HomeClient from "../components/Home/HomeClient";
import { getAllPosts } from "../lib/blog/getAllPosts";



export default function Home() {
const blogs = getAllPosts();
   return(
    <div>
      <HomeClient blogs={blogs} />
    </div>
   )
}
