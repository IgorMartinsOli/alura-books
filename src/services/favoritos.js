import axios from 'axios'

const livrosAPI = axios.create({baseURL: 'http://localhost:8000/favoritos'});

async function getFavoritos() {
    const response = await livrosAPI.get('/')

    return response.data
}

async function postFavorito(id) {
    await livrosAPI.post(`/${id}`)
}

async function deleteFavorito(id) {
    await livrosAPI.delete(`/${id}`)
}

export {
    getFavoritos,
    postFavorito,
    deleteFavorito
}