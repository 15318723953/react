import {ADD_PERSON} from '../constant' 

// 创建一个action对象
export const createAddPersonAction = (personObj)=> ({type:ADD_PERSON,data:personObj})