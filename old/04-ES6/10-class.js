class insan {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.parti = null;
    }

    oyVerebilir() {
        return this.age >= 18 && !this.parti;
    }

    oyVer(parti) {
        if (this.oyVerebilir()) {
            console.log(`${parti} partisine oy veriyor`);
            this.parti = parti;

        } else {
            console.warn("oy veremez");
            if (this.parti) {
                console.warn("mukerrer oy");
            }
            if (this.age < 18) {
                console.warn("resit degil");
            }
        }
    }
}


class Ogrenci extends insan {
    constructor(name, age, school) {
        super(name, age);
        this.school = school;
    }

    oyVer(parti) {
        console.warn(`${this.school} okulundaki ogrenci oy veriyor`);
        super.oyVer(parti);
    }

}

var a = new insan("Kerem", 30);

a.oyVer("X");

a.oyVer("Y");


var b = new Ogrenci("Ahmet", 17, "TED");

b.oyVer("X");
