package week8.demo.model.repos;

import org.springframework.data.repository.PagingAndSortingRepository;

import week8.demo.model.entities.Actor;

public interface ActorRepo extends PagingAndSortingRepository<Actor, Long>{

    
} 