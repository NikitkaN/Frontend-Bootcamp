/*
У экземпляра класса должны присутствовать св-ва:
-name string.
-grade string Для простоты предположим, что система грейдов будет иметь значения от L1 до L4.
-hardSkills string[].
-company string.


Так же должны иметься три метода:

-changeCompany(newCompanyName) - сотрудник может сменить компанию, либо же просто уволиться.
-upGrade() - сотрудник может повысить квалификацию.
-addSkill(newSkillName) - сотрудник может дополнить список своих скиллов.
*/


export class Employee {
    constructor (name = '', grade = '', hardSkills = [], company = '') {
        this.name = name;
        if (['L1', 'L2', 'L3', 'L4'].includes(grade)) {
            this.grade = grade;
        }
        this.hardSkills = hardSkills.slice();
        this.company = company;
    }

    changeCompany(newCompanyName) {
        this.company = newCompanyName;
    }

    upGrade() {
        switch (this.grade) {
            case 'L1':
                this.grade = 'L2'
                break;
            case 'L2':
                this.grade = 'L3'
                break;  
            case 'L3':
                this.grade = 'L4'
                break;
            default:
                break;
        }
    }

    addSkill(newSkillName) {
        this.hardSkills.push(newSkillName);
    }
}

let E1 = new Employee ('Lowell', 'L1', ['React', 'JS', 'TS'], 'Ak Bars');
E1.addSkill('SCSS');
console.log(E1);

let E2 = new Employee ('Lowell', 'L2', '?', 'School 21');
E2.upGrade();
console.log(E2);

let E3 = new Employee ('Lowell', 'L3', 'Gigachad', 'SpaceX');
E3.changeCompany("X");
console.log(E3);
