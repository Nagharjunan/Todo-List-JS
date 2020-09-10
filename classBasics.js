class Student {
    name;
    classTeacher;
    
    constructor(_name, _classTeacher) {
        this.name = _name;
        this.classTeacher = _classTeacher;
    }

    setName(_name) {
        this.name = _name;
    }

    getName() {
        return this.name;
    }

    getClassTeacher() {
       return this.classTeacher.name ;
    }
}

class Teacher {
    name;
    constructor(_name) {
        this.name = _name;
    }

    setName(_name) {
        this.name = _name;
    }

    getName() {
        return this.name;
    }
}