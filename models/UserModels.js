// class User {
//     constructor() {
//         this.users = [
//             { id: 1, name: "John Doe", email: "john@example.com" },
//             { id: 2, name: "Jane Smith", email: "jane@example.com" },
//             { id: 3, name: "Bob Johnson", email: "bob@example.com" }
//         ];
//         this.nextId = 4;
//     }

//     findAll() {
//         return this.users;
//     }

//     findById(id) {
//         // const index = this.users.findIndex((user) => {
//         //     return user.id === parseInt(id);
//         // });
//         // if (index !== -1) {
//         //     return this.users[index];
//         // }
//         // return id;
//         return this.users.find((user) => { return user.id === parseInt(id) });
//     }

//     create(Obj) {
//         const user = { id: this.nextId++, ...Obj };
//         this.users.push(user);
//         return user;
//     }

//     deleteById(id) {
//         const index = this.users.findIndex((user) => {
//             return user.id === parseInt(id);
//         });
//         if (index !== -1) {
//             const deletedUser = this.users.splice(index, 1)[0];
//             return deletedUser;
//         }
//     }

//     updateById(id, updatedUser) {
//         const index = this.users.findIndex((user) => {
//             return user.id === parseInt(id);
//         });
//         if (index !== -1) {
//             this.users[index] = { ...this.users[index], ...updatedUser };
//             return this.users[index];
//         }
//     }
// }

// export default new User();