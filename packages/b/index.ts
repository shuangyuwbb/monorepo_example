import { A } from "../a";

export class B {
    private a = A.getInstance()
    static _ins: any 

    constructor(){
    }

    static getInstance(){
        return this._ins || (this._ins = new B())
    }

    public init(){
        console.log(this.a ===A.getInstance(), '--this.a ===A.getInstance()' );
    }
}

console.log(A, 'a');
