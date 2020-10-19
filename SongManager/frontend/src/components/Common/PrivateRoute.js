import React from 'react'
import { connect } from 'react-redux'
import { Redirect, Route } from 'react-router-dom'

const  PrivateRoute=({component:Component,auth,...rest})=> 
     (
           <Route
               {...rest}
               render={props=>{
                   if(auth.isAuth){
                   return <Component {...props} />
                    }else{
                    return  <Redirect to="/login"/>
                    }
               }}
         />
    )         

const mapstatetoprops=(state)=>({
    auth:state.auth
})
export default connect(mapstatetoprops)(PrivateRoute)