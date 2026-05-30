//source file 
// named export
export class Student {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}

 export function format(score) {
    return `score=100`;
}

export default class Batch{}
//export default class Teacher{} // duplicate default error