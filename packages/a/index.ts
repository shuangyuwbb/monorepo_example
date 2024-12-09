
@Singleton  
export class A {
  public name:string = 'wbb12'
  static _instance: any

  public static getInstance(): A {
    if (!this._instance) {
      this._instance = new A()
    }
    return this._instance
  }
}


export function Singleton<T extends {new (...args: any[]): object}>(constructor: T){
  let instance : T
  const proxy = new Proxy(constructor, {
    construct(target, args){
      if(!instance){
        // @ts-ignore
        instance = new target(...args)
        console.log(constructor, 'constructor')
      }
      return instance
    }
  })

  proxy.prototype.__destroy__ = ()=>{
    instance= null as any
  }
  console.log(constructor);

  return proxy
}