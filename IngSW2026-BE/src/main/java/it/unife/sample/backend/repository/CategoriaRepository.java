package it.unife.sample.backend.repository;

import it.unife.sample.backend.model.Categoria;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * Repository Spring Data per accesso CRUD alle categorie.
 */
@Repository
public interface CategoriaRepository extends JpaRepository<Categoria, Integer> {
}
