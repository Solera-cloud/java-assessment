package dev.cloud.JavaAssessment.service;


import dev.cloud.JavaAssessment.model.Movie;
import dev.cloud.JavaAssessment.repository.MovieRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Slf4j
public class MovieService {

    @Autowired
    private MovieRepository movieRepository;

    public Movie saveMovie(Movie movie){
//        log.info("Inside MovieService: saveMovie");
        return movieRepository.save(movie);
    }

    public List<Movie> findAll(){
//        log.info("Inside MovieService: saveMovie");
        return movieRepository.findAll();
    }

    public Movie findMovieById(Long movieId){
//        log.info("Inside MovieService: findMovieById");
        return movieRepository.findByMovieId(movieId);
    }
}
