import { Link } from 'react-router-dom'
import dummy from '../assets/dummy.jpg'
import { Button } from '../components/Button'
import { useEffect } from 'react'

export const PageNotFound = () => {
    useEffect(()=>{
        document.title="Page Not Found/Cinemate";
    })
    return (
        <main>
            <section className="flex flex-col justify-center px-2">
                <div className="flex flex-col items-center my-4">
                    <p className="text-7xl text-gray-700 font-bold my-10 dark:text-white">404, oops!</p>
                </div>
                <div className="max-w-lg">
                    <img src={dummy} alt="404"></img>
                </div>
                <div className="flex justify-center my-4">
                    <Link to="/"><Button>Back To Home</Button></Link>
                </div>
            </section>
        </main>
    )
}
