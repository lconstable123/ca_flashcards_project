

import {createSlice} from '@reduxjs/toolkit';






export const topicsSlice = createSlice({
    name:'topics',
    initialState: {
        topics:{}
    },
    reducers:{
        addTopic:(state,action)=>{
            const newid= action.payload.id;
           const newtopic = 
                {
                    id: newid,
                    name: action.payload.name,
                    icon: action.payload.icon,
                    quizIds:[] 
                }
             
            state.topics[newid]=newtopic;
        }
            }});

export const selectTopics = (state)=> state.topics;
export const {addTopic} = topicsSlice.actions;
export default topicsSlice.reducer;