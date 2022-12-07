package dev.cloud.JavaAssessment.controller;


import dev.cloud.JavaAssessment.model.Movie;
import dev.cloud.JavaAssessment.service.MovieService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/movies")
@CrossOrigin(origins = "*", allowedHeaders = "*")
@Slf4j
public class MoviesController {

    @Autowired
    private MovieService movieService;


    @GetMapping("/test")
    public String test(){
//        log.info("FlightController Works!");
        return "test";
    }

    @PostMapping("/")
    public Movie saveMovie(@RequestBody Movie movie){
//        log.info("Inside FlightController: saveFlight");
        return movieService.saveMovie(movie);
    }

    @GetMapping()
    public List<Movie> findAll(){
//        log.info("Inside FlightController: findFlightById");
        return movieService.findAll();
    }

    @GetMapping("/{id}")
    public Movie findMovieById(@PathVariable("id") Long movieId){
//        log.info("Inside FlightController: findFlightById");
        return movieService.findMovieById(movieId);
    }
}
