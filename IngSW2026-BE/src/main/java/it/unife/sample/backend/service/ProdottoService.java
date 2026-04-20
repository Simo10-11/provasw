package it.unife.sample.backend.service;

import it.unife.sample.backend.dto.ProdottoDTO;
import it.unife.sample.backend.mapper.ProdottoMapper;
import it.unife.sample.backend.model.Prodotto;
import it.unife.sample.backend.repository.ProdottoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Gestisce la logica applicativa per consultazione e ricerca prodotti.
 */
@Service
public class ProdottoService {

	@Autowired
	private ProdottoRepository prodottoRepository;

	// Legge tutti i prodotti dal repository e li converte in DTO.
	public List<ProdottoDTO> getAllProducts() {
		return toDtoList(prodottoRepository.findAll());
	}

	// Ricerca case-insensitive per nome.
	public List<ProdottoDTO> searchByNome(String nome) {
		return toDtoList(prodottoRepository.findByNomeContainingIgnoreCase(nome));
	}

	// Ritorna solo i prodotti della categoria selezionata.
	public List<ProdottoDTO> getByCategoriaId(Integer categoriaId) {
		return toDtoList(prodottoRepository.findByCategoria_Id(categoriaId));
	}

	// Metodo di utilita: converte una lista di Entity in una lista di DTO.
	private List<ProdottoDTO> toDtoList(List<Prodotto> prodotti) {
		return prodotti.stream()
				.map(ProdottoMapper::toDTO)
				.toList();
	}
}
