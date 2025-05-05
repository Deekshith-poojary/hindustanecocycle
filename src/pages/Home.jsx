import React, { useEffect, useState } from 'react'
import appwriteService from "../appwrite/config";
import { Container, Header, PostCard, Scroller,Bodycomp} from '../components'
import {dummyContent, homedata} from '../Contents/Scrollerdata';
function Home() {
    
    const [posts, setPosts] = useState([])

    useEffect(() => {
        appwriteService.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
    }, [])

    if (posts.length === 0) {
        return (
            
            <div>
            <Bodycomp title={homedata.title} para1={homedata.para1} para2={homedata.para2} />
    <Scroller content={dummyContent} />

    </div>
    
        )
    }
    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-1/4'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Home