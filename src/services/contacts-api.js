import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com'

export async function fetchContacts() {
    const { data } = await axios.get(`/contacts`);
    return data;
}

export async function postContacts(contact) {
    const { data } = await axios.post(`/contacts`, contact);
    return data;

}

export async function deleteContact(id) {
     await axios.delete(`/contacts/${id}`);
    return id;
}

export async function editContact(id,contact) {
    const { data} = await axios.patch(`/contacts/${id}`,contact);
    return data;
}




