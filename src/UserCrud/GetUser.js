import React from 'react';  
import { Table,Button } from 'react-bootstrap';  
import axios from 'axios';  
  
const apiUrl = 'http://localhost:55537/api/User';  
  
class UserList extends React.Component{  
    constructor(props){  
        super(props);  
        this.state = {  
           error:null,  
           users:[],  
           response: {}  
              
        }  
    } 
  
    componentDidMount(){  
       axios.get(`https://cors-anywhere.herokuapp.com/${apiUrl}/GetUserDetails`,  {headers: { 'Content-Type': 'application/json', "origin,X-Requested-With": "XMLHttpRequest" }}).then(response => response.data).then(  
            (result)=>{  
                this.setState({  
                    users:result  
                });  
            },  
            (error)=>{  
                this.setState({error});  
            }  
        ) 
    }  
  
      
    deleteUser(userId) {  
      const { users } = this.state;     
     axios.delete(apiUrl + '/DeleteUserDetails/' + userId).then(result=>{  
       alert(result.data);  
        this.setState({  
          response:result,  
          users:users.filter(user=>user.UserId !== userId)  
        });  
      });  
    }  
  
    render(){         
        const{error,users}=this.state;  
        if(error){  
            return(  
                <div>Error:{error.message}</div>  
            )  
        }  
        else  
        {  
            return(  
         <div>  
                      
                  <Table>  
                    <thead className="btn-primary">  
                      <tr>  
                        <th>user_id</th>  
                        <th>User name</th>  
                        <th>EmailId</th>  
                        <th>MobileNo</th>  
                        <th>Location id</th> 
                      </tr>  
                    </thead>  
                    <tbody>  
                      {users.map(user => (  
                        <tr key={user.user_id}>  
                          <td>{user.user_name}</td>  
                          <td>{user.user_email}</td>  
                          <td>{user.user_phone}</td>  
                          <td>{user.location_id}</td>   
                          <td><Button variant="info" onClick={() => this.props.editUser(user.user_id)}>Edit</Button>       
                          <Button variant="danger" onClick={() => this.deleteUser(user.user_id)}>Delete</Button>  
                          
                          </td>  
                        </tr>  
                      ))}  
                    </tbody>  
                  </Table>  
                </div>  
              )  
        }  
    }  
}  
  
export default UserList;  