package it.unife.sample.backend.dto;

import lombok.Data;

/**
 * DTO usato dall'API per serializzare i dati della categoria.
 */
@Data
public class CategoriaDTO {

    private Integer id;
    private String nome;
    private String descrizione;
}
