package login;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Response;

@Path("/login")
@Produces("application/json")
public class LoginService {
	
	@GET
	@Path("/validate/{username}/{password}")
	public Response validateUser(@PathParam("username") String username,@PathParam("password") String password)
	{
		try{
			if(username.equals("abcd")&&password.equals("1234"))
				return Response.status(200).entity(1).build();
			else
			{
				//String ret=username+" "+password;
				//System.out.println(ret);
				return Response.status(200).entity(0).build();
			}
		}
		catch(Exception e)
		{
			return Response.status(400).entity("").build();
		}
	}
}
