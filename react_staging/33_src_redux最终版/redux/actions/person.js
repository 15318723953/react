import {ADD_PERSON} from '../constant' 

// 创建一个action对象
export const addPerson = (personObj)=> ({type:ADD_PERSON,data:personObj})