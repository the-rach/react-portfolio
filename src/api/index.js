import axios from 'axios'

const api = axios.create({
    baseURL: 'http://rachelgrant.me/api',
})

export const insertEducation = payload => api.post(`/education`, payload)
export const getAllEducations = () => api.get(`/educations`)
export const updateEducationById = (id, payload) => api.put(`/education/${id}`, payload)
export const deleteEducationById = id => api.delete(`/education/${id}`)
export const getEducationById = id => api.get(`/education/${id}`)

const apis = {
    insertEducation,
    getAllEducations,
    updateEducationById,
    deleteEducationById,
    getEducationById,
}

export default apis