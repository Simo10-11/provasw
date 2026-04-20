package it.unife.sample.backend.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

/**
 * DTO usato dall'API per serializzare i dati della categoria.
 */
@Data
public class CategoriaDTO {

    @JsonProperty("ID")
    private Integer ID;
    @JsonProperty("NOME")
    private String NOME;
    @JsonProperty("DESCRIZIONE")
    private String DESCRIZIONE;
}
