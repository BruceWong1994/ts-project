//type类型
type Status = number | string //联合类型

let printStatus = (data:Status):void => {
    console.log(data);
    
}

printStatus(200);
printStatus('404')

//面积
type Area = {
    height:number
    width:number
}

const Mianji:Area = {
    height: 2,
    width: 5
}

type LogFunc = () => number
let f1: LogFunc = () => 222