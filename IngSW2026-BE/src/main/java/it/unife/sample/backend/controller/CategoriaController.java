package it.unife.sample.backend.controller;

import it.unife.sample.backend.dto.CategoriaDTO;
import it.unife.sample.backend.service.CategoriaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class CategoriaController {

    @Autowired
    private CategoriaService categoriaService;

    @GetMapping("/categorie")
    public List<CategoriaDTO> getCategorie() {
        return categoriaService.getAllCategorie();
    }
}
