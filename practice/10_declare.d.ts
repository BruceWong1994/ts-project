declare function add(a:number,b:number):number
declare function mul(a:number,b:number):number
export { add, mul }


//.d.ts文件（类型声明文件），是ts中一种特殊文件。通常以.d.ts作为扩展名。
//其主要作用：为现有的js代码提供类型信息。使得ts能够在使用这些js库或模块时进行类型检查和提示。