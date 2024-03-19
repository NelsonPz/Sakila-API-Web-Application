package week8.demo.model.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * The Actor class represents an actor entity in a database.
 * It is annotated as an Entity, making it a persistent entity managed by JPA (Java Persistence API).
 */

@Entity
@Data
@NoArgsConstructor
public class Actor {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long actor_id;
    
    String firstName;
    String lastName;
}
