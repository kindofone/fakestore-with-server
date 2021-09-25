import { User } from "./db/User.model.mjs";
import mongo from 'mongodb';
const { ObjectId } = mongo;

export function getUsers() {
    return User.find();
}

export async function getUser(id) {
    return User.findOne({_id: ObjectId(id)});
}

export async function addUser(user) {
    const newUser = new User(user);
    return newUser.save();
}

export async function deleteUser(userId) {
    return User.findOneAndDelete({_id: ObjectId(userId)});
}

export async function editUser(id, newUser) {
    return User.findOneAndUpdate(
        {_id: ObjectId(id)},
        newUser
    );
}
