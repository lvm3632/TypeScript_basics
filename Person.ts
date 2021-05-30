class Person{
    public firstName: string;
    public lastName: string;
    public age: number;
    private _ssn: string;

    construtor(firstName: string, lastName: string, age:number, ssn:string){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this._ssn = ssn;
    }
                                      
}

const p = new Person("John", "Smith",29, "123-90-4567");

console.log(p.lastName);