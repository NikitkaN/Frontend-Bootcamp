/* В продолжение прошлого задания вам нужно нужно создать 5 новых классов:

**Company** - класс описывающий IT компанию. Состоит из:
1. Св-ва:
- companyName
- currentProjects - текущий пулл проектов. Массив экземпляров класса Project
- completedProjects - пулл завершенных проектов. Массив экземпляров класса Project
- staff - весь пулл сотрудников компании. Это объект, у которого есть поля Developers, Managers. В этих полях лежат массивы экземпляров аналогичных классов.
2. Методы:
- addNewCompanyMember() - позволяет нанять нового сотрудника. В результате метода у выбранного сотрудника
должно смениться имя компании.
- addProject() - позволяет добавить проект в пулл текущих.
- getMembersQuantity() - позволяет получить кол-во сотрудников, работающих в данной компании
- completeProject(project) - позволяет закончить проект. В результате выполнения функции проект из currentProjects перемещается в completedProjects. У команды данного проекта должно увеличиться кол-во завершенных проектов.

**Project** - класс описывающий проект компании. На проекте может быть только 1 менеджер! Каждый сотрудник может работать только над одним проектом! Состоит из:
1. Св-ва:
- projectName
- minQualification - минимальная квалификация сотрудника, для работы на данном проекте.
- team - команда проекта. Объект, типа {manager: Manager, developers: {Frontend : [], backend: []}}. В св-ва этого объекта указан массив аналогичных классов.

2. Методы:
- addNewProjectMember(member) - Метод внутри которого вызывается проверка менеджера на то, подходит ли сотрудник проекту. Если подходит, то команда расширяется, иначе нет.


**Backend Developer** - Класс, который наследуется от класса Employee. 
1.Имеет новые св-ва:
- stack - Массив в котором указаны технологии, которыми владеет разработчик.
- developerSide - 'backend'
- projectQuantity - Число завершенных проектов.
2. Методы:
- expandStack(someTech) - разработчик может увеличить стек технологий.

**Frontend Developer** - Класс, который наследуется от класса Employee.
1.Имеет новые св-ва:
- stack - Массив в котором указаны технологии, которыми владеет разработчик.
- developerSide - 'frontend'
- projectQuantity - Число завершенных проектов.
- projectQuantity - Число завершенных проектов.
2. Методы:
- expandStack(someTech) - разработчик может увеличить стек технологий.

**Manager** - Класс, который наследуется от класса Employee. 
1.Имеет новые св-ва:
- projectQuantity - Число завершенных проектов.
2. Методы:
- checkMember(minQualification, member) - менеджер проверяет, удовлетворяет ли сотрудник условиям проекта. Сотрудник, состоящий в другой компании не может работать над проектом другой компании.

*/

import { Employee } from "./classes.js";

/* Св-ва и методы класса
companyName - string
currentProjects - Массив экземпляров класса Project
completedProjects -  Массив экземпляров класса Project
staff - {
    developers :  {
    frontend : массив содержащий экземпляры класса FrontendDeveloper
    backend : массив содержащий экземпляры класса BackendDeveloper
    },
    managers: массив содержащий экземпляры класса Manager
}

addNewCompanyMember(Developer/Manager) - в кач-ве аргумента принимает экземпляр класса FrontendDeveloper, BackendDeveloper или Manager
addProject(Project) - в кач-ве аргумента принимает экземпляр класса Project
getMembersQuantity()
completeProject()
*/
export class Company {
    staff = {
        manager: Manager,
        developers : {
            frontend : FrontendDeveloper,
            backend : BackendDeveloper,
        }
    }

    constructor(companyName = '', currentProject, completedProjects, manager, frontend, backend) {
        this.staff.manager = manager;
        this.staff.developers.frontend = frontend;
        this.staff.developers.backend = backend;
        this.companyName = companyName;
        this.currentProject = currentProject;
        this.completedProjects = completedProjects;
    }

    addNewCompanyMember(member) {
        if (Object.getPrototypeOf(member) == Manager.prototype)
        this.staff.manager.push(member);
        else if (Object.getPrototypeOf(member) == FrontendDeveloper.prototype)
        this.staff.developers.frontend.push(member);
        else if (Object.getPrototypeOf(member) == BackendDeveloper.prototype)
        this.staff.developers.backend.push(member);
        member.changeCompany(this.companyName);
    }

    addProject(Project) {
        this.currentProject.push(Project);
    }

    getMembersQuantity() {
        return this.staff.manager.length + this.staff.developers.frontend.length + this.staff.developers.backend.length;
    }

    completeProject() {

        this.completedProjects.push(this.currentProject);
        this.currentProject.pop();
    }
}


 /*
- projectName - string
- minQualification -string
- team -  {
    manager : экземпляр класса Manager
    developers: {
    frontend : массив содержащий экземпляры класса FrontendDeveloper
    backend : массив содержащий экземпляры класса BackendDeveloper
    }
}

addNewProjectMember(Developer) - Метод внутри которого вызывается проверка менеджера на то, подходит ли сотрудник проекту. Если подходит, то команда расширяется, иначе нет.
*/

export class Project {
    team = {
        manager: Manager,
        developers : {
            frontend : FrontendDeveloper,
            backend : BackendDeveloper,
        }
    }
    constructor(projectName = '', minQualification = '', manager, frontend = [], backend = []) {
        this.team.manager = manager;
        this.team.developers.frontend = frontend.slice();
        this.team.developers.backend = backend.slice();
        if (['L1', 'L2', 'L3', 'L4'].includes(minQualification)) {
        this.minQualification = minQualification;
        }
        this.projectName = projectName;
    }

    addNewProjectMember(member) {
        if (member.grade >= this.minQualification) {
        if (member instanceof FrontendDeveloper)
        this.team.developers.frontend.push(member);
        if (member instanceof BackendDeveloper)
        this.team.developers.backend.push(member);
        if (member instanceof Manager)
        this.team.manager = member;
        }
    }
}
/*
projectQuantity - number
checkMember(minQualification, member) - в качестве аргумента принимается строка ('L1'/'L2'/'L3'/'L4') и BackendDeveloper || FrontendDeveloper
*/
export class Manager extends Employee {
    constructor(name, grade, hardSkills, company, projectQuanity) {
        super(name, grade, hardSkills, company);
        this.projectQuantity = projectQuanity;
    }

    checkMember(minQualification, member) {
        if (minQualification <= member.grade) return true;
        else return false;
    }
}

/*
stack - массив строк
- developerSide - строка ('frontend')
- projectQuantity - number
expandStack(newTech) - в кач-ве аргумента принимает строку
*/

export class FrontendDeveloper extends Employee {
    constructor(name, grade, hardSkills, company, projectQuantity, stack) {
        super(name, grade, hardSkills, company);
        this.projectQuantity = projectQuantity;
        this.stack = stack;
    }

    expandStack(newTech) {
        this.stack.push(newTech);
    }
}

/*
stack - массив строк
- developerSide - строка ('backend')
- projectQuantity - number
expandStack(newTech) - в кач-ве аргумента принимает строку
*/

export class BackendDeveloper extends Employee {
    constructor(name, grade, hardSkills, company, projectQuantity, stack) {
        super(name, grade, hardSkills, company);
        this.projectQuantity = projectQuantity;
        this.stack = stack;
    }

    expandStack(newTech) {
        this.stack.push(newTech);
    }
}

const m = new Manager('John', 'L4', ['leadership', 'team management'] , "SBER", 2);
const m2 = new Manager('Alexia', 'L2', ['decision-making'], "Ak Bars", 4);

const bd = new BackendDeveloper('Max', 'L3', ['HTTP', 'Security', 'API REST'], "SBER", 5, ['PHP', 'Angular']);
const bd2 = new BackendDeveloper('Lara', 'L2', ['Data Modeling', 'Web Sockets'], "Ak Bars", 3, ['Ruby on Rails', 'Node.js', '.Net']);

const fd = new FrontendDeveloper('Oleg', 'L2', ['Responsive Design', 'Web Performance'], "SBER", 3, ['HTML', 'CSS', 'JS']);
const fd2 = new FrontendDeveloper('Jenn', 'L3', ['Testing/Debagging', 'Tooling'], "Ak Bars", 3, ['HTML', 'CSS', 'JS']);

const pr = new Project('Pr', 'L1', [m], [fd], [bd, bd2]);
const pr2 = new Project('Pr2', 'L2', [m2], [fd, fd2], [bd]);

const co = new Company('SBER', [pr], [pr2], [m], [fd], [bd]);
const co2 = new Company('Ak Bars', [pr2], [pr], [m2], [fd2], [bd2]);

// Tests

// co.addNewCompanyMember(m2); // добавление нового рабочего
// co2.addNewCompanyMember(m); 
// co.completeProject(); // Завершить текущий проект
// co2.completeProject();
// co.addProject(pr2); // добавить новый проект
// co2.addProject(pr);
// console.log(co);
// console.log(co2);
// console.log(co.getMembersQuantity()); // Вывести кол-во работников в компании

// console.log(co2.getMembersQuantity());

// pr.addNewProjectMember(fd2);
// pr2.addNewProjectMember(bd2);
// console.log(pr.team.developers);
// console.log(pr2.team.developers);

// console.log(m.checkMember('L1', fd)); // Проверка на то, подходят ли рабочие на задачу
// console.log(m2.checkMember('L2', bd2));

fd.expandStack('React');
// bd.expandStack('Node.js');
console.log(fd);
// console.log(bd);