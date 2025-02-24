import { Faculty } from "./faculty";

export class FacultyList {
    faculties: Faculty[] = [];
    addFaculty(newFaculty: Faculty){
        this.faculties.push(newFaculty);
    }
    groupByUniversity() {
        this.faculties = this.faculties.sort((f1, f2) => f1.universityName.localeCompare(f2.universityName));
    }
}
