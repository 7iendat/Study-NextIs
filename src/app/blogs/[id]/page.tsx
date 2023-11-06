'use client'

import Link from 'next/link';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import useSWR, { Fetcher } from 'swr'

const BlogDetail = ({ params }: { params: { id: number } }) => {
   
    const fetcher: Fetcher<IBlog, string> = (url:string) => fetch(url).then(res => res.json())

    const { data, error, isLoading } = useSWR(`http://localhost:8000/blogs/${params.id}`, fetcher, {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false
    })

    if (isLoading) return <div>Loading.....</div>
    if (error) return <div><p>Error!!</p></div>
    return (
        <div className='mt-3'>
            <Link href={'/blogs'} className='btn btn-primary'>Go Back</Link>
            <Card className="text-center mt-3">
                <Card.Header>{data?.title}</Card.Header>
                <Card.Body>
               
                <Card.Text>
                    {data?.content}
                </Card.Text>
                
                </Card.Body>
                <Card.Footer className="text-muted">{data?.author}</Card.Footer>
            </Card>
        </div>
       
    )

}
export default BlogDetail;