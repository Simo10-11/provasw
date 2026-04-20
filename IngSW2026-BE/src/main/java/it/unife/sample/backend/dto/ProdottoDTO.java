package it.unife.sample.backend.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import java.math.BigDecimal;

@Data
public class ProdottoDTO {

	@JsonProperty("ID")
	private Integer ID;
	@JsonProperty("NOME")
	private String NOME;
	@JsonProperty("DESCRIZIONE")
	private String DESCRIZIONE;
	@JsonProperty("PREZZO")
	private BigDecimal PREZZO;
	@JsonProperty("QUANTITA_DISPONIBILE")
	private Integer QUANTITA_DISPONIBILE;
	@JsonProperty("ID_CATEGORIA")
	private Integer ID_CATEGORIA;
}
