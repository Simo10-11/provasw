package it.unife.sample.backend.dto;

import lombok.Data;

import java.math.BigDecimal;

/**
 * DTO usato dall'API per esporre i dati del prodotto.
 */
@Data
public class ProdottoDTO {

	private Integer id;
	private String nome;
	private String descrizione;
	private BigDecimal prezzo;
	private String imageUrl;
	private Integer quantitaDisponibile;
	private Integer idCategoria;
}
