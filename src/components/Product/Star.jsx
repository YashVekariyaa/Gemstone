import React, { useEffect, useState } from 'react'
import { FaStar, FaStarHalfAlt } from "react-icons/fa"
import { AiOutlineStar } from "react-icons/ai"
import { DisplayReview } from '../../https/axios'

const Star = ({stars}) => {

    const ratingStar = Array.from({length : 5},(elem,index) => {
        let number = index + 0.5
        return (
          <>
              <span key={index}>
                  {stars >= index + 1
                    ? ( <FaStar className="iconstar" /> )
                    : stars >= number
                    ? ( <FaStarHalfAlt className="iconstar" /> )
                    : ( <AiOutlineStar className="iconstar" /> )   
                  }
              </span>
          </>
        );
    });

    return (
        <>
            <div className="icon-style">
                {ratingStar}
            </div>
        </>
    )

}

export default Star