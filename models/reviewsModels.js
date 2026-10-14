class Review {
    constructor() {
        this.reviews = [
            // rating: 1 - 5
            { employeeId: 1, reviewMonth: "yyyy-MM", rating: 1, notes: "---", evaluatorName: "Name" },
        ];
        this.nextId = 4;
    }



        findAll() {
            return this.reviews;
        }

        findById(id) {
            // const index = this.reviews.findIndex((review) => {
            //     return review.id === parseInt(id);
            // });
            // if (index !== -1) {
            //     return this.reviews[index];
            // }
            // return id;
            return this.reviews.find((review) => { return review.id === parseInt(id) });
        }

        create(Obj) {
            const review = { id: this.nextId++, ...Obj };
            this.reviews.push(review);
            return review;
        }

        deleteById(id) {
            const index = this.reviews.findIndex((review) => {
                return review.id === parseInt(id);
            });
            if (index !== -1) {
                const deletedReview = this.reviews.splice(index, 1)[0];
                return deletedReview;
            }
        }

        updateById(id, updatedUser) {
            const index = this.reviews.findIndex((review) => {
                return review.id === parseInt(id);
            });
            if (index !== -1) {
                this.reviews[index] = { ...this.reviews[index], ...updatedUser };
                return this.reviews[index];
            }
        }    
}

export default new Review();