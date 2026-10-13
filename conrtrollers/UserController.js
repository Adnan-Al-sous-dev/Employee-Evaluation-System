import User from "../models/UserModels.js";



export const getUserController = (req, res) => {
    const { _sort, _order, _start, _end } = req.query;
    let result = [...User.findAll()];
    if (_sort && _order) {
        result.sort((a, b) => {
            if (a[_sort] < b[_sort]) return _order === "ASC" ? -1 : 1;
            if (a[_sort] > b[_sort]) return _order === "ASC" ? 1 : -1;
            return 0;
        });
    }
    const start = _start ? parseInt(_start) : 0;
    const end = _end ? parseInt(_end) : result.length;
    const paginated = result.slice(start, end);
    res.setHeader("Content-Range", `user ${start}-${end - 1}/${result.length}`);
    res.setHeader("Access-Control-Expose-Headers", "Content-Range");
    res.json(paginated);
}


// export const getUserController = (req, res) => {
//     res.json(User.users);
// };

export const findUSerById = (req, res) => {
    const id = req.params.id;
    res.json(User.findById(id));
}

export const createNewUserController = (req, res) => {
    const temp = req.body;
    const user = User.create(temp);
    res.json(user);
}

export const deleteUSerById = (req, res) => {
    const id = req.params.id;
    res.json(User.deleteById(id));
}

export const updateUSerById = (req, res) => {
    const id = req.params.id;
    const updatedUser = req.body;
    res.json(User.updateById(id, updatedUser));
}