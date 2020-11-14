/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package rest;

import com.google.gson.Gson;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.UriInfo;
import javax.ws.rs.Consumes;
import javax.ws.rs.Produces;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PUT;
import javax.ws.rs.core.MediaType;
import threads.Caller;

/**
 * REST Web Service
 *
 * @author abed
 */
@Path("exapi")
public class ExApiResource {

    @Context
    private UriInfo context;

    /**
     * Creates a new instance of ExApiResource
     */
    public ExApiResource() {
    }

    
    @GET
    @Path("/cats")
    @Produces(MediaType.APPLICATION_JSON)
    public String getSomeCats() throws Exception {
        
       Caller c1 = new Caller("https://api.chucknorris.io/jokes/random");
       String chuckNorris = c1.call();
       
       Caller c2 = new Caller("https://icanhazdadjoke.com");
       String dadJoke = c2.call();
       
       Caller c3 = new Caller("https://swapi.dev/api/planets/1/");
       String swapi = c3.call();
       
       
       Caller c4 = new Caller("https://cat-fact.herokuapp.com/facts/random");
       String cat = c4.call();
       
       Caller c5 = new Caller("https://test.api.suredbits.com/nba/v0/info");
       String nba = c5.call();
       
       String combined = dadJoke + chuckNorris + swapi + cat + nba;
       
       return combined;
    }
}
