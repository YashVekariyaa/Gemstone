import React, { useEffect, useState } from 'react'
import { DisplayReview } from '../../https/axios'

const ReviewMessage = () => {

    const [remessage, setRemessage] = useState('')

    useEffect(() => {
        async function Review(){
            const me = await DisplayReview()
            // console.log(me.data.Reviews)
            setRemessage(me.data.Reviews)
        }
        Review()
    }, [])

  return (
    <div>
        {
            remessage && remessage.map((data) => {
                return (
                    <>
                        <span>{data.name}</span>
                        <p>{data.message}</p>
                    </>
                )
            })
        }
    </div>
  )
}

export default ReviewMessage