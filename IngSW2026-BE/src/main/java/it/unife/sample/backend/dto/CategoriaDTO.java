package it.unife.sample.backend.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

@Data
public class CategoriaDTO {

    @JsonProperty("ID")
    private Integer ID;
    @JsonProperty("NOME")
    private String NOME;
    @JsonProperty("DESCRIZIONE")
    private String DESCRIZIONE;
}
