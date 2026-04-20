package it.unife.sample.backend.controller;

import it.unife.sample.backend.dto.ProdottoDTO;
import it.unife.sample.backend.service.ProdottoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * Espone gli endpoint REST per consultare e filtrare i prodotti.
 */
@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class ProdottoController {

	@Autowired
	private ProdottoService prodottoService;

	// Restituisce tutti i prodotti in formato DTO (nomi campi come nel DB).
	@GetMapping("/products")
	public List<ProdottoDTO> getProducts() {
		return prodottoService.getAllProducts();
	}

	// Cerca i prodotti per nome usando la query string ?nome=...
	@GetMapping("/products/search")
	public List<ProdottoDTO> searchProducts(@RequestParam String nome) {
		return prodottoService.searchByNome(nome);
	}

	// Filtra i prodotti per categoria usando l'id passato nell'URL.
	@GetMapping("/products/categoria/{id}")
	public List<ProdottoDTO> getProductsByCategoria(@PathVariable Integer id) {
		return prodottoService.getByCategoriaId(id);
	}
}
