import axios from "axios";

export const getDocs = (path) => axios.get(path);
export const postDoc = (path, doc) => {
    axios.post(path, doc);
}

export const putDoc = (path, uuid, doc) => axios.put(`${path}/${uuid}`, doc);

export const deleteDoc = (path, uuid) => axios.delete(`${path}/${uuid}`);