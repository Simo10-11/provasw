package it.unife.sample.backend.service;

import it.unife.sample.backend.dto.CategoriaDTO;
import it.unife.sample.backend.mapper.CategoriaMapper;
import it.unife.sample.backend.repository.CategoriaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Gestisce la logica applicativa per la lettura delle categorie.
 */
@Service
public class CategoriaService {

    @Autowired
    private CategoriaRepository categoriaRepository;

    // Legge le categorie dal DB e le converte in DTO per l'API.
    public List<CategoriaDTO> getAllCategorie() {
        return categoriaRepository.findAll().stream()
                .map(CategoriaMapper::toDTO)
                .toList();
    }
}
