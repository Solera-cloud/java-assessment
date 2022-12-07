package dev.cloud.JavaAssessment.repository;

import dev.cloud.JavaAssessment.model.Movie;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MovieRepository extends JpaRepository<Movie, Long> {
    Movie findByMovieId(Long movieId);
    List<Movie> findAll();
}
