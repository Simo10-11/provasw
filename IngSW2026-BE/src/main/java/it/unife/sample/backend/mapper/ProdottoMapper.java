package it.unife.sample.backend.mapper;

import it.unife.sample.backend.dto.ProdottoDTO;
import it.unife.sample.backend.model.Prodotto;

/**
 * Mapper statico per conversione tra Prodotto entity e ProdottoDTO.
 */
public class ProdottoMapper {

    // Classe utility: non deve essere istanziata.
    private ProdottoMapper() {
    }

    // Converte l'entity in DTO mantenendo il valore immagine letto dal DB.
    public static ProdottoDTO toDTO(Prodotto entity) {
        if (entity == null) {
            return null;
        }

        ProdottoDTO dto = new ProdottoDTO();
        dto.setId(entity.getId());
        dto.setNome(entity.getNome());
        dto.setDescrizione(entity.getDescrizione());
        dto.setPrezzo(entity.getPrezzo());
        dto.setImageUrl(entity.getImageUrl());
        dto.setQuantitaDisponibile(entity.getQuantitaDisponibile());
        // Espone solo l'id della categoria nel DTO API.
        dto.setIdCategoria(entity.getCategoria() != null ? entity.getCategoria().getId() : null);
        return dto;
    }

    // Converte il DTO in entity (la categoria viene impostata nel service).
    public static Prodotto toEntity(ProdottoDTO dto) {
        if (dto == null) {
            return null;
        }

        Prodotto entity = new Prodotto();
        entity.setId(dto.getId());
        entity.setNome(dto.getNome());
        entity.setDescrizione(dto.getDescrizione());
        entity.setPrezzo(dto.getPrezzo());
        entity.setImageUrl(dto.getImageUrl());
        entity.setQuantitaDisponibile(dto.getQuantitaDisponibile());
        // La relazione completa con Categoria viene impostata nel service quando serve.
        return entity;
    }
}
