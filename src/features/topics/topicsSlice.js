

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

            },
            extraReducers: {
                "quizzes/addQuiz": (state, action) => {
                  const { topicId, id } = action.payload;
                  state.topics[topicId].quizIds.push(id);
                 console.log(topicId);
                }
      }
    }
        );

export const selectTopics = (state)=> state.topics.topics;
export const {addTopic} = topicsSlice.actions;
export default topicsSlice.reducer;