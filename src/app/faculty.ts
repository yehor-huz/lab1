export class Faculty {
    facultyName: string;
    universityName: string;
    dean: string;
    phone: string;
    address: string;
    constructor(faculty: string, university:string, dean: string, phone: string, address: string ) {
        this.phone = phone;
        this.address = address;
        this.facultyName = faculty;
        this.dean = dean;
        this.universityName = university;    
    }

}
