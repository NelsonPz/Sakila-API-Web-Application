package week8.demo.controllers;

// import static org.mockito.Answers.values;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import week8.demo.model.entities.Actor;
import week8.demo.model.entities.Film;
import week8.demo.model.repos.ActorRepo;
import week8.demo.model.repos.FilmRepo;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class MainController {

    ActorRepo actorRepo;
    FilmRepo filmRepo;

    public MainController(ActorRepo actorRepo, FilmRepo filmRepo) {
        this.actorRepo = actorRepo;
        this.filmRepo = filmRepo;
    }

    @GetMapping("/actors")
    public Page<Actor> getActors(@RequestParam Integer page, @RequestParam Integer pagesize) {
        PageRequest pageRequest = PageRequest.of(page, pagesize);
        Page<Actor> actors = actorRepo.findAll(pageRequest);
        return actors;
    }

    @GetMapping("/films")
    public Page<Film> getFilms(@RequestParam Integer page,@RequestParam Integer pagesize) {
        PageRequest pageRequest = PageRequest.of(page, pagesize);
        Page<Film> films = filmRepo.findAll(pageRequest);
        return films;
    }

    @GetMapping("/getAll")
    public long getAllFilms(@RequestParam String type) {
        long size = 0;
        if(type.equals("actors") )
        {
            Iterable<Actor> actors = actorRepo.findAll(Sort.by("firstName"));
            size = actors.spliterator().getExactSizeIfKnown();
        }
        else
        {
            Iterable<Film> films = filmRepo.findAll(Sort.by("title"));
            size = films.spliterator().getExactSizeIfKnown();
        }

        return size;
    }


}
