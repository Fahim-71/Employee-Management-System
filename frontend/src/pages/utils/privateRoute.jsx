import React from 'react'
import {useAuth} from '../context/authContext'

const privateRoute = ({children}) => {
const {user, loading} = useAuth()
}

export default privateRoute

//test comment