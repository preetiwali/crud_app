import React from 'react';  
import { Table,Button } from 'react-bootstrap';  
import './style.css';
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
      //  axios.get(`https://cors-anywhere.herokuapp.com/${apiUrl}/GetUserDetails`,  {data: { 'Content-Type': 'application/json', "origin,X-Requested-With": "XMLHttpRequest" }}).then(response => response.data).then(  
      //       (result)=>{  
      //           this.setState({  
      //               users:result  
      //           });  
      //       },  
      //       (error)=>{  
      //           this.setState({error});  
      //       }  
      //   )
      var config = {
        method: 'get',
        url: 'http://localhost:55537/api/User',
        headers: { }
      };
      
      axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
       
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
        let {error,users}=this.state;
        users = [{
          // user_id: "1",
          // user_name: "test",  
          // user_email: "test@gmail.com",  
          // user_phone: "976343526211",  
          // location_id: "R&D"
        }]
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
                          <td><Button variant="info"  onClick={() => this.props.editUser(user.user_id)}>Edit</Button>       
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