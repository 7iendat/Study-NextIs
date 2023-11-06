'use client'
import useSWR from "swr"
import TableBlog from "../components/table"

const BlogsPage = () => {
  const fetcher = (url:string) => fetch(url).then(res => res.json())

  const { data, error, isLoading } = useSWR("http://localhost:8000/blogs", fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false
  })

  // console.log("Check:" , data)
  // useEffect(() => {
  //   const fetchData = async() => {
  //     const res = await fetch("http://localhost:8000/blogs");
  //     const data = await res.json();

  //     console.log(">> Check: ", data);
  //   }

  //   fetchData();
  // }, [])

  if (isLoading) return <div>Loading.....</div>
  if (error) return <div><p>Error!!</p></div>
  return <div>
    <TableBlog  blogs={data}/>
  </div>
}


export default BlogsPage;