package week8.demo.model.repos;

import org.springframework.data.repository.PagingAndSortingRepository;

import week8.demo.model.entities.Film;

public interface FilmRepo extends PagingAndSortingRepository<Film, Integer>{
    
}
