class Employee {
    constructor() {
        this.users = [
            { id: 1, name: "John Doe", department: "----" , salary: 1 , hairDate:"yyyy/mm/dd" , averageRating : 1  }
        ];
        this.nextId = 4;
    }

    // findAll() {
    //     return this.users;
    // }

    // findById(id) {
    //     // const index = this.users.findIndex((user) => {
    //     //     return user.id === parseInt(id);
    //     // });
    //     // if (index !== -1) {
    //     //     return this.users[index];
    //     // }
    //     // return id;
    //     return this.users.find((user) => { return user.id === parseInt(id) });
    // }

    // create(Obj) {
    //     const user = { id: this.nextId++, ...Obj };
    //     this.users.push(user);
    //     return user;
    // }

    // deleteById(id) {
    //     const index = this.users.findIndex((user) => {
    //         return user.id === parseInt(id);
    //     });
    //     if (index !== -1) {
    //         const deletedUser = this.users.splice(index, 1)[0];
    //         return deletedUser;
    //     }
    // }

    // updateById(id, updatedUser) {
    //     const index = this.users.findIndex((user) => {
    //         return user.id === parseInt(id);
    //     });
    //     if (index !== -1) {
    //         this.users[index] = { ...this.users[index], ...updatedUser };
    //         return this.users[index];
    //     }
    // }

    
}

export default new Employee();