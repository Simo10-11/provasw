package it.unife.sample.backend.service;

import it.unife.sample.backend.dto.ProdottoDTO;
import it.unife.sample.backend.mapper.ProdottoMapper;
import it.unife.sample.backend.model.Prodotto;
import it.unife.sample.backend.repository.ProdottoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProdottoService {

	@Autowired
	private ProdottoRepository prodottoRepository;

	public List<ProdottoDTO> getAllProducts() {
		return toDtoList(prodottoRepository.findAll());
	}

	public List<ProdottoDTO> searchByNome(String nome) {
		return toDtoList(prodottoRepository.findByNomeContainingIgnoreCase(nome));
	}

	public List<ProdottoDTO> getByCategoriaId(Integer categoriaId) {
		return toDtoList(prodottoRepository.findByCategoria_Id(categoriaId));
	}

	private List<ProdottoDTO> toDtoList(List<Prodotto> prodotti) {
		return prodotti.stream()
				.map(ProdottoMapper::toDTO)
				.toList();
	}
}
