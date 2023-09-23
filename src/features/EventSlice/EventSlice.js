
import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState = [
    {
        id:nanoid(),
        title: 'Compose Camp',
        CompleteTitle : 'Compose Camp',
        details:{
            date: '01-03-2023',
            time:{
                start: '1:40 pm',
                finish :'4:00 pm'
            },
            venue: 'Lab 176, MMEC, MM(DU)'
        },
        status: 'upcoming',
        type: 'Info Session ',
        img: 'https://blog.desdelinux.net/wp-content/uploads/2021/08/Jetpack-Compose-1024x305.png',
        description:'Compose Camps are community-organized events focused on how to build Android apps using Jetpack Compose. During these sessions, attendees can get hands-on coding experience on how to develop apps using the latest toolset, Compose, the modern way to develop UI on Android. For those of you who’ve attended Android Study Jams in the past, this is a fun spin on the event series with a focus on Compose!',
        Speaker:{
            name:'Ms. Jenny Oliens',
            type: 'Android developer',
            image: 'https://blog.desdelinux.net/wp-content/uploads/2021/08/Jetpack-Compose-1024x305.png'
        },
        EventImages: ["a","a","a","a",]
    },
    {
        id:nanoid(),
        title: 'Appeofesta',
        details:{
            date: '01-04-2023',
            time:{
                start: '1:40 pm',
                finish :'4:00 pm'
            },
            venue: 'Seminar Hall Block-2 mmec'
        },
        status: 'upcoming',
        type: 'Hackathon',
        img: 'https://th.bing.com/th/id/OIP.DX2t5tVds1PRUeKQotQYnAHaFY?pid=ImgDet&rs=1',
        description:'',
    },
    {
        id:nanoid(),
        title: 'Machine Learning',
        details:{
            date: '25-03-2023',
            time:{
                start: '1:40 pm',
                finish :'4:00 pm'
            },
            venue: 'Lab 176, MMEC, MM(DU)'
        },
        status: 'upcoming',
        type: 'workshop',
        img :'',
        description:'',
    },
    {
        id:nanoid(),
        title: 'Flutter Festival',
        details:{
            date: '15-03-2023',
            time:{
                start: '1:40 pm',
                finish :'4:00 pm'
            },
            venue: 'Lab 176, MMEC, MM(DU)'
        },
        status: 'upcoming',
        type: 'workshop',
        img :'https://miro.medium.com/max/1200/1*qUwhyiEX0ubr7ezTj85ZGQ.jpeg',
        description:'',
    },
]

const eventslice = createSlice({
    name: 'event',
    initialState,
    reducers:{}
    
})
export default eventslice.reducer
