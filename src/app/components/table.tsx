
'use client'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import ModalApp from './modal.add';
import { useState } from 'react';
import ModalEditApp from './modal.edit';
import Link from 'next/link';
interface IProps{
    blogs: IBlog[]
}

function TableBlog(props: IProps) {
    const {blogs} = props;
    const [displayModalAdd, setDisplayModalAdd] = useState<boolean>(false);
    const [displayModalEdit, setDisplayModalEdit] = useState<boolean>(false);
    
    const [blog, setBlog] = useState<IBlog | null>(null);
  return (
    <>
      <div className='mb-3' style={{display:"flex", justifyContent:"space-between"}}>
        <h1 >Table Blog</h1>
        <Button onClick={() => setDisplayModalAdd(true)}>Add Blog</Button>
      </div>

      <Table striped bordered hover size="sm"  variant="dark">
      <thead>
        <tr>
          <th>NO</th>
          <th>Title</th>
          <th>Author</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {blogs?.map(item => {
            return(
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                    <td>{item.author}</td>
                    <td>
                      <Link href={`/blogs/${item.id}`} className='btn btn-primary'>View</Link>
                    
                     <Button variant='warning' className='mx-4' onClick={()=> {setDisplayModalEdit(true); setBlog(item)}} >Edit</Button>
                     <Button variant='danger'>Delete</Button>
                     
                    </td>
              </tr>
            )
        })}

      </tbody>
    </Table>
    <ModalApp displayModalAdd={displayModalAdd} setDisplayModalAdd = {setDisplayModalAdd}/>
    <ModalEditApp displayModalEdit = {displayModalEdit} setDisplayModalEdit={setDisplayModalEdit} blog = {blog} setBlog = {setBlog} />
    </>
    
  );
}

export default TableBlog;