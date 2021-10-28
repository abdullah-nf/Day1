import React from 'react'
import './day1.css'
import { AiFillSetting, AiFillStar, AiOutlineCheckCircle } from 'react-icons/ai'
import { IoMdChatbubbles, IoIosFolder } from 'react-icons/io'
import { BiCalendar } from 'react-icons/bi'

const Card = [
    {
        icon1: <IoMdChatbubbles />,
        icon2: <BiCalendar />,
        icon3: <IoIosFolder />,
        icon4: <AiOutlineCheckCircle />,
        title: 'Traning',
        discp: 'All instructions related to traning...',
        bdr_color: 'green'

    },
    {
        icon1: <IoMdChatbubbles />,
        icon2: <BiCalendar />,
        icon3: <IoIosFolder />,
        icon4: <AiOutlineCheckCircle />,
        title: 'BI 2.0',
        discp: 'No description',
        bdr_color: 'purple'

    },
    {
        icon1: <IoMdChatbubbles />,
        icon2: <BiCalendar />,
        icon3: <IoIosFolder />,
        icon4: <AiOutlineCheckCircle />,
        title: 'Polus BI',
        discp: 'This will include the detials ab...',
        bdr_color: 'blue'

    },
    {
        icon1: <IoMdChatbubbles />,
        icon2: <BiCalendar />,
        icon3: <IoIosFolder />,
        icon4: <AiOutlineCheckCircle />,
        title: 'ETL',
        discp: 'All tasks related to ELT',
        bdr_color: 'green'
    },
]

export default function Day1() {

    const renderCard = () => {
        return Card.map((obj) => {
            return (
                <>
                    <div class='card' style={{
                        borderTopColor: obj.bdr_color,
                        borderTopWidth: '8px'
                    }}>
                        <div class='upperDiv'>
                            <div class='upperIcon'>
                                <AiFillStar class='star' />
                                <AiFillSetting class='setting' />
                            </div>
                            <div class='tittle'>
                                <h1>{obj.title}</h1>
                                <p>{obj.discp}</p>
                            </div>
                        </div>
                        <div class='lowerDiv'>
                            <div class='icon'>
                                <div class='lowerIcon'>{obj.icon1} </div>
                                <div class='lowerIcon'>{obj.icon2} </div>
                                <div class='lowerIcon'>{obj.icon3} </div>
                                <div class='lowerIcon'>{obj.icon4} </div>
                            </div>
                            <div class='image'>
                                <img src="telegram.png" />
                                <img src="SK.jpg" />
                                <img src="AB.png" />
                            </div>
                        </div>
                    </div>

                </>
            )
        })
    }
    return (
        <div class='div'>
            {renderCard()}
        </div>
    )

}