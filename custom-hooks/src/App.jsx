import { useEffect, useState } from 'react'
import './App.css'

function useFetch () {

  const [post , setPost] = useState({});

  async function getPost () {
    const response = await fetch("https://json-placeholder.mock.beeceptor.com/posts");
    const postDetails = await response.json();
    
    setPost(postDetails);
  }

  useEffect(() => {
    getPost();
  } , []);

  return {
    post : post,
  }
}

function App() {

  const { post } = useFetch(); 

  return (
    <>
      <div>{JSON.stringify(post[2]?.title)}</div>
    </>
  )
}

export default App
