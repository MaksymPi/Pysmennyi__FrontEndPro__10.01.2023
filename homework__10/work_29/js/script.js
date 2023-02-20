class Student {
  constructor(name, surname, yearOfBirth) {
    this.name = name;
    this.surname = surname;
    this.yearOfBirth = yearOfBirth;
    this.scores = [];
    this.attendance = new Array(25);
  }

  getAge() {
        const currentYear = new Date().getFullYear();
        return currentYear - this.yearOfBirth;
  }

  getAverageScore() {
    const sum = this.scores.reduce(function (acc, scores) {
      return (acc += scores);
    }, 0);
    return sum / this.scores.length;
  }

  getAverageAttendance() {
    let attendClass = 0,
      lessonNum = 0;
    this.attendance.forEach((elem) => {
      if (elem === true) {
        attendClass++;
      }
      if (elem === true || elem === false) {
        lessonNum++;
      }
    });
    return attendClass / lessonNum;
  }

  present() {
        for (let i = 0; i < this.attendance.length; i++) {
          if (this.attendance[i] === undefined) {
            this.attendance[i] = true;
            break;
            }
          }
        }
      absent() {
        for (let i = 0; i < this.attendance.length; i++) {
          if (this.attendance[i] === undefined) {
            this.attendance[i] = false;
            break;
            }
          }
        }

  summary() {
    const averageScore = this.getAverageScore();
    const attendance = this.getAverageAttendance();
    if (averageScore > 90 && attendance > 0.9) {
      return "Молодець!";
    } else if (averageScore > 90 || attendance > 0.9) {
      return "Добре, але можна краще!";
    } else if (averageScore < 90 && attendance < 0.9) {
      return "Редиска!";
    }
  }

  showStudentsInfo() {
    console.log(`
       Name: ${this.name} ${this.surname} Age: ${this.getAge()}
       Average grade: ${this.getAverageScore()} Attendance: ${this.getAverageAttendance()}
       Summery: ${this.summary()}`);
  }
}

const student1 = new Student("Devid", "Guetta", 1967);
student1.scores = [100, 95, 98, 95, 94];
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
console.log(student1);
student1.showStudentsInfo();

const student2 = new Student("Will", "Smith", 1968);
student2.scores  = [87, 94, 90, 98];
student2.absent();
student2.present();
student2.absent();
student2.present();
student2.absent();
student2.present();
console.log(student2);
student2.showStudentsInfo();

const student3 = new Student("Rowan", "Atkinson", 1955);
student3.scores = [45, 80, 55];
student3.present();
student3.absent();
student3.present();
student3.absent();
student3.present();
student3.absent();
console.log(student3);
student3.showStudentsInfo();