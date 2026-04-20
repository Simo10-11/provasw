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

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class ProdottoController {

	@Autowired
	private ProdottoService prodottoService;

	@GetMapping("/products")
	public List<ProdottoDTO> getProducts() {
		return prodottoService.getAllProducts();
	}

	@GetMapping("/products/search")
	public List<ProdottoDTO> searchProducts(@RequestParam String nome) {
		return prodottoService.searchByNome(nome);
	}

	@GetMapping("/products/categoria/{id}")
	public List<ProdottoDTO> getProductsByCategoria(@PathVariable Integer id) {
		return prodottoService.getByCategoriaId(id);
	}
}
