import User from './model';

const userController = {
    getAll: async ({ res, next }) => {
        try {
            const users = await User.findAll();
            res.status(200).json(users);
        } catch (e) {
            next(e);
        }
    },
    register: async ({ res, req, next }) => {
        try {
            const user = await User.create(...req.body);
            res.status(201).json(user);
        } catch (e) {
            next(e);
        }
    },
    login: async ({ res, req, next }) => {
        try {
            const { mail, password } = { ...req.body };
            const user = await User.findOne({
                where: { mail, password },
            });
            res.status(200).json(user);
        } catch (e) {
            next(e);
        }
    },
};

export default userController;