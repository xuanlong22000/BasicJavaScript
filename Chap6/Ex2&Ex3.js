class Group {
    constructor() {
        this.group = []
    }
    add(item) {
        if (!this.group.includes(item)) {
            return this.group.push(item)
        }
    }
    delete(item) {
        if (this.group.indexOf(item) !== -1) {
            return this.group.splice(this.group.indexOf(item), 1)
        }
    }
    has(item) {
        return this.group.includes(item)
    }
    static from(a) {
        let group = new Group()
        for (let item of a) {
            group.add(item)
        }
        return group
    }
    [Symbol.iterator]() {
        return new GroupIterator(this)
    }

}
class GroupIterator {
    constructor(o) {
        this.i = 0
        this.group = o.group
    }
    next() {
        if (this.i == this.group.length || this.i > 10) {
            return { done: true }
        }
        let value = this.group[this.i]
        this.i++
        return { value, done: false }
    }
}
let newGroup = Group.from([1, 2, 3])
for (var value of newGroup) {
    console.log(value)
}
console.log(newGroup.has(8))
console.log(newGroup.add(0))
console.log(newGroup)
console.log(newGroup.delete(3))
console.log(newGroup)